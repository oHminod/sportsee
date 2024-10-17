import { formatedUserAverageSession, UserActivity, UserAverageSessions, UserData, UserMainData, UserPerformance } from "./types";

export const normalizeData = (userData: UserData) => {
    const { user, userActivity, userAverageSessions, userPerformance } = userData;

    const formatUserKeyData = (userMainData: UserMainData) => {
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

    function formatUserMainData(userMainData: UserMainData) {
        const { userInfos, todayScore, score, keyData } = userMainData;


        const unifiedScore = todayScore || score || 0;


        return {
            userInfos,
            score: unifiedScore,
            keyData,
        };
    }

    function formatUserActivity(userActivity: UserActivity) {
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

    function formatUserAverageSessions(userAverageSessions: UserAverageSessions) {
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

    function formatPerformanceData(userPerformance: UserPerformance) {
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

