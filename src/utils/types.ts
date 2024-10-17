export type UserInfos = {
    firstName: string;
    lastName: string;
    age: number;
};

export type KeyData = {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
};

export type UserMainData = {
    id: number;
    userInfos: UserInfos;
    todayScore?: number;
    score?: number;
    keyData: KeyData;
};

export type formatedUserMainData = {
    userInfos: UserInfos;
    score: number;
    keyData: KeyData;
};

export type UserActivitySession = {
    day: string;
    kilogram: number;
    calories: number;
};

export type UserActivity = {
    userId: number;
    sessions: UserActivitySession[];
};

export type UserAverageSession = {
    day: number;
    sessionLength: number;
};

export type formatedUserActivity = {
    sessions: UserActivitySession[];
    minWeight: number;
    maxWeight: number;
};

export type formatedUserAverageSession = {
    day: string;
    sessionLength: number;
};

export type UserAverageSessions = {
    userId: number;
    sessions: UserAverageSession[];
};

export type UserPerformanceData = {
    value: number;
    kind: number;
};

export type UserPerformanceKind = {
    [key: number]: string;
};

export type UserPerformance = {
    userId: number;
    kind: UserPerformanceKind;
    data: UserPerformanceData[];
};

export type UserPerformanceFormattedData = {
    kind: string;
    value: number;
};

export type UserData = {
    user: UserMainData;
    userActivity: UserActivity;
    userAverageSessions: UserAverageSessions;
    userPerformance: UserPerformance;
};
