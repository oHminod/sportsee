import { formatedUserActivity, formatedUserAverageSession, formatedUserData, formatedUserMainData, UserActivity, UserAverageSessions, UserData, userKeyData, UserMainData, UserPerformance, UserPerformanceFormattedData } from "./types";

/**
 * Normalizes user data by formatting various aspects of the user data.
 * 
 * @param {UserData} userData - The user data to normalize.
 * @returns {Object} The normalized user data.
 */
export const normalizeData = (userData: UserData): formatedUserData => {
    const { user, userActivity, userAverageSessions, userPerformance } = userData;

    /**
     * Formats the key data of the user.
     * 
     * @param {UserMainData} userMainData - The main data of the user.
     * @returns {Array<Object>} The formatted key data.
     */
    const formatUserKeyData = (userMainData: UserMainData): userKeyData => {
        const keyData = userMainData.keyData
        return Object.entries(keyData).map(([key, value]) => {
            switch (key) {
                case "calorieCount":
                    return {
                        key: "Calories",
                        value: value.toLocaleString("en") + "kCal",
                    };
                case "proteinCount":
                    return {
                        key: "Protéines",
                        value: value + "g",
                    };
                case "carbohydrateCount":
                    return {
                        key: "Glucides",
                        value: value + "g",
                    };
                case "lipidCount":
                    return {
                        key: "Lipides",
                        value: value + "g",
                    };
                default:
                    return {
                        key,
                        value: value.toString(),
                    }
            }
        });
    }

    /**
     * Formats the main data of the user.
     * 
     * @param {UserMainData} userMainData - The main data of the user.
     * @returns {Object} The formatted main data.
     */
    function formatUserMainData(userMainData: UserMainData): formatedUserMainData {
        const { userInfos, todayScore, score, keyData } = userMainData;


        const unifiedScore = todayScore || score || 0;


        return {
            userInfos,
            score: unifiedScore,
            keyData,
        };
    }

    /**
     * Formats the activity data of the user.
     * 
     * @param {UserActivity} userActivity - The activity data of the user.
     * @returns {Object} The formatted activity data.
     */
    function formatUserActivity(userActivity: UserActivity): formatedUserActivity {
        const { sessions } = userActivity;

        const minWeight = Math.min(...sessions.map((session) => session.kilogram));
        const maxWeight = Math.max(...sessions.map((session) => session.kilogram));

        return {
            sessions: sessions.map((session) => ({
                day: session.day,
                kilogram: session.kilogram,
                calories: session.calories,
            })),
            minWeight,
            maxWeight,
        };
    }

    /**
     * Formats the average session data of the user.
     * 
     * @param {UserAverageSessions} userAverageSessions - The average session data of the user.
     * @returns {Array<formatedUserAverageSession>} The formatted average session data.
     */
    function formatUserAverageSessions(userAverageSessions: UserAverageSessions): formatedUserAverageSession[] {
        const { sessions } = userAverageSessions;

        const nameDay = (day: number) => {
            switch (day) {
                case 1:
                    return "L";
                case 2:
                    return "M";
                case 3:
                    return "M";
                case 4:
                    return "J";
                case 5:
                    return "V";
                case 6:
                    return "S";
                case 7:
                    return "D";
                default:
                    return day;
            }
        }

        return sessions.map((session) => ({
            day: nameDay(session.day),
            sessionLength: session.sessionLength,
        })) as formatedUserAverageSession[];
    }

    /**
     * Formats the performance data of the user.
     * 
     * @param {UserPerformance} userPerformance - The performance data of the user.
     * @returns {Array<Object>} The formatted performance data.
     */
    function formatPerformanceData(userPerformance: UserPerformance): UserPerformanceFormattedData[] {
        const { data, kind } = userPerformance;

        const formatKindName = (kind: string) => {
            switch (kind) {
                case "cardio":
                    return "Cardio";
                case "energy":
                    return "Energie";
                case "endurance":
                    return "Endurance";
                case "strength":
                    return "Force";
                case "speed":
                    return "Vitesse";
                case "intensity":
                    return "Intensité";
                default:
                    return kind;
            }
        };

        const reversedData = data.slice().reverse();

        return reversedData.map((dataEntry) => ({
            kind: formatKindName(kind[dataEntry.kind]),
            value: dataEntry.value,
        }));
    }

    return {
        user: formatUserMainData(user),
        userActivity: formatUserActivity(userActivity),
        userAverageSessions: formatUserAverageSessions(userAverageSessions),
        userPerformance: formatPerformanceData(userPerformance),
        keyData: formatUserKeyData(user),
    };
}

