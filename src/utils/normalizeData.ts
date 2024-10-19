import {
    UserData,
    UserMainData,
    UserActivity,
    UserAverageSessions,
    UserPerformance,
    formatedUserAverageSession,
    formatedUserMainData,
    formatedUserActivity,
    UserPerformanceFormattedData,
    userKeyData,
} from "./types";

/**
 * Class representing normalized user data.
 */
class NormalizeData {
    public user: formatedUserMainData;
    public userActivity: formatedUserActivity;
    public userAverageSessions: formatedUserAverageSession[];
    public userPerformance: UserPerformanceFormattedData[];
    public keyData: userKeyData;

    /**
     * Create a NormalizeData instance.
     * @param {UserData} userData - The raw user data.
     */
    constructor(userData: UserData) {
        const { user, userActivity, userAverageSessions, userPerformance } = userData;

        this.user = this.formatUserMainData(user);
        this.userActivity = this.formatUserActivity(userActivity);
        this.userAverageSessions = this.formatUserAverageSessions(userAverageSessions);
        this.userPerformance = this.formatPerformanceData(userPerformance);
        this.keyData = this.formatUserKeyData(user);
    }

    /**
     * Format the key data of the user.
     * @param {UserMainData} userMainData - The main data of the user.
     * @returns {Array<{ key: string; value: string }>} The formatted key data.
     */
    private formatUserKeyData(userMainData: UserMainData): userKeyData {
        const keyData = userMainData.keyData;
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
                    };
            }
        });
    }

    /**
     * Format the main data of the user.
     * @param {UserMainData} userMainData - The main data of the user.
     * @returns {formatedUserMainData} The formatted main data.
     */
    private formatUserMainData(userMainData: UserMainData): formatedUserMainData {
        const { userInfos, todayScore, score, keyData } = userMainData;

        const unifiedScore = todayScore || score || 0;

        return {
            userInfos,
            score: unifiedScore,
            keyData,
        };
    }

    /**
     * Format the activity data of the user.
     * @param {UserActivity} userActivity - The activity data of the user.
     * @returns {formatedUserActivity} The formatted activity data.
     */
    private formatUserActivity(userActivity: UserActivity): formatedUserActivity {
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
     * Format the average session data of the user.
     * @param {UserAverageSessions} userAverageSessions - The average session data of the user.
     * @returns {formatedUserAverageSession[]} The formatted average session data.
     */
    private formatUserAverageSessions(
        userAverageSessions: UserAverageSessions
    ): formatedUserAverageSession[] {
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
                    return day.toString();
            }
        };

        return sessions.map((session) => ({
            day: nameDay(session.day),
            sessionLength: session.sessionLength,
        }));
    }

    /**
     * Format the performance data of the user.
     * @param {UserPerformance} userPerformance - The performance data of the user.
     * @returns {UserPerformanceFormattedData[]} The formatted performance data.
     */
    private formatPerformanceData(
        userPerformance: UserPerformance
    ): UserPerformanceFormattedData[] {
        const { data, kind } = userPerformance;

        const formatKindName = (kindKey: string) => {
            switch (kindKey) {
                case "cardio":
                    return "Cardio";
                case "energy":
                    return "Énergie";
                case "endurance":
                    return "Endurance";
                case "strength":
                    return "Force";
                case "speed":
                    return "Vitesse";
                case "intensity":
                    return "Intensité";
                default:
                    return kindKey;
            }
        };

        const reversedData = data.slice().reverse();

        return reversedData.map((dataEntry) => ({
            kind: formatKindName(kind[dataEntry.kind]),
            value: dataEntry.value,
        }));
    }
}

export default NormalizeData;
