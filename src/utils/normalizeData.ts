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
} from "./types";

class NormalizeData {
    public user: formatedUserMainData;
    public userActivity: formatedUserActivity;
    public userAverageSessions: formatedUserAverageSession[];
    public userPerformance: UserPerformanceFormattedData[];
    public keyData: { key: string; value: string }[];

    constructor(userData: UserData) {
        const { user, userActivity, userAverageSessions, userPerformance } = userData;

        this.user = this.formatUserMainData(user);
        this.userActivity = this.formatUserActivity(userActivity);
        this.userAverageSessions = this.formatUserAverageSessions(userAverageSessions);
        this.userPerformance = this.formatPerformanceData(userPerformance);
        this.keyData = this.formatUserKeyData(user);
    }

    private formatUserKeyData(userMainData: UserMainData) {
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

    private formatUserMainData(userMainData: UserMainData): formatedUserMainData {
        const { userInfos, todayScore, score, keyData } = userMainData;

        const unifiedScore = todayScore || score || 0;

        return {
            userInfos,
            score: unifiedScore,
            keyData,
        };
    }

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
