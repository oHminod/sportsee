import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./data-mock";
import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
  UserData,
} from "./types";

const mockedData = true;

export const getUser = async (id = 12): Promise<UserMainData> => {
  if (mockedData) {
    const userData = USER_MAIN_DATA.find((user) => user.id === id);
    if (!userData) {
      throw new Error("Could not fetch user data");
    }
    return userData;
  }

  const response = await fetch(`http://localhost:3000/user/${id}`);

  if (!response.ok) {
    throw new Error("Could not fetch user data");
  }

  const data = await response.json();

  return data.data;
};

export const getUserActivity = async (id = 12): Promise<UserActivity> => {
  if (mockedData) {
    const userActivity = USER_ACTIVITY.find((user) => user.userId === id);
    if (!userActivity) {
      throw new Error("Could not fetch user activity data");
    }
    return userActivity;
  }

  const response = await fetch(`http://localhost:3000/user/${id}/activity`);

  if (!response.ok) {
    throw new Error("Could not fetch user activity data");
  }

  const data = await response.json();

  return data.data;
};

export const getUserAverageSessions = async (
  id = 12
): Promise<UserAverageSessions> => {
  if (mockedData) {
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === id
    );
    if (!userAverageSessions) {
      throw new Error("Could not fetch user average sessions data");
    }
    return userAverageSessions;
  }

  const response = await fetch(
    `http://localhost:3000/user/${id}/average-sessions`
  );

  if (!response.ok) {
    throw new Error("Could not fetch user average sessions data");
  }

  const data = await response.json();

  return data.data;
};

export const getUserPerformance = async (id = 12): Promise<UserPerformance> => {
  if (mockedData) {
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId === id);
    if (!userPerformance) {
      throw new Error("Could not fetch user performance data");
    }
    return userPerformance;
  }

  const response = await fetch(`http://localhost:3000/user/${id}/performance`);

  if (!response.ok) {
    throw new Error("Could not fetch user performance data");
  }

  const data = await response.json();

  return data.data;
};

export const getUserData = async (id = 12): Promise<UserData> => {
  const user = await getUser(id);
  const userActivity = await getUserActivity(id);
  const userAverageSessions = await getUserAverageSessions(id);
  const userPerformance = await getUserPerformance(id);

  // if (!user || !userActivity || !userAverageSessions || !userPerformance) {
  //   throw new Error("Could not fetch user data");
  // }

  return {
    user,
    userActivity,
    userAverageSessions,
    userPerformance,
  };
};
