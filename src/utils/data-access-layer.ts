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
const apiDomain = "http://localhost:3000";

/**
 * Fetches the main data of a user by ID.
 * @param {number} [id=12] - The ID of the user.
 * @returns {Promise<UserMainData>} The main data of the user.
 * @throws Will throw an error if the user data cannot be fetched.
 */
export const getUser = async (id: number = 12): Promise<UserMainData> => {
  if (mockedData) {
    const userData = USER_MAIN_DATA.find((user) => user.id === id);
    if (!userData) {
      throw new Error("Could not fetch user data");
    }
    return userData;
  }

  const response = await fetch(`${apiDomain}/user/${id}`);

  if (!response.ok) {
    throw new Error("Could not fetch user data");
  }

  const data = await response.json();

  return data.data;
};

/**
 * Fetches the activity data of a user by ID.
 * @param {number} [id=12] - The ID of the user.
 * @returns {Promise<UserActivity>} The activity data of the user.
 * @throws Will throw an error if the user activity data cannot be fetched.
 */
export const getUserActivity = async (
  id: number = 12
): Promise<UserActivity> => {
  if (mockedData) {
    const userActivity = USER_ACTIVITY.find((user) => user.userId === id);
    if (!userActivity) {
      throw new Error("Could not fetch user activity data");
    }
    return userActivity;
  }

  const response = await fetch(`${apiDomain}/user/${id}/activity`);

  if (!response.ok) {
    throw new Error("Could not fetch user activity data");
  }

  const data = await response.json();

  return data.data;
};

/**
 * Fetches the average sessions data of a user by ID.
 * @param {number} [id=12] - The ID of the user.
 * @returns {Promise<UserAverageSessions>} The average sessions data of the user.
 * @throws Will throw an error if the user average sessions data cannot be fetched.
 */
export const getUserAverageSessions = async (
  id: number = 12
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

  const response = await fetch(`${apiDomain}/user/${id}/average-sessions`);

  if (!response.ok) {
    throw new Error("Could not fetch user average sessions data");
  }

  const data = await response.json();

  return data.data;
};

/**
 * Fetches the performance data of a user by ID.
 * @param {number} [id=12] - The ID of the user.
 * @returns {Promise<UserPerformance>} The performance data of the user.
 * @throws Will throw an error if the user performance data cannot be fetched.
 */
export const getUserPerformance = async (
  id: number = 12
): Promise<UserPerformance> => {
  if (mockedData) {
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId === id);
    if (!userPerformance) {
      throw new Error("Could not fetch user performance data");
    }
    return userPerformance;
  }

  const response = await fetch(`${apiDomain}/user/${id}/performance`);

  if (!response.ok) {
    throw new Error("Could not fetch user performance data");
  }

  const data = await response.json();

  return data.data;
};

/**
 * Fetches all relevant data of a user by ID.
 * @param {number} [id=12] - The ID of the user.
 * @returns {Promise<UserData>} An object containing the main data, activity data, average sessions data, and performance data of the user.
 * @throws Will throw an error if any of the user data cannot be fetched.
 */
export const getUserData = async (id: number = 12): Promise<UserData> => {
  const data = Promise.all([
    getUser(id),
    getUserActivity(id),
    getUserAverageSessions(id),
    getUserPerformance(id),
  ]);

  // Simulate a delay to mimic long data fetching, delay fit loader animation
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const [user, userActivity, userAverageSessions, userPerformance] =
    await data

  return {
    user,
    userActivity,
    userAverageSessions,
    userPerformance,
  };
};
