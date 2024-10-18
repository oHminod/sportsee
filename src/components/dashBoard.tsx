import { useEffect, useState } from "react";
import { getUserData } from "../utils/data-access-layer";
import PerformanceRadar from "./performanceRadar";
import { UserData } from "../utils/types";
// import { normalizeData } from "../utils/formatData";
import ScoreRadialChart from "./scoreRadialChart";
import SessionLengthLineChart from "./sessionLengthLineChart/sessionLengthLineChart";
import ActivityBarChart from "./activityBarChart/activityBarChart";
import UserInfoCard from "./userInfoCard/userInfoCard";
import NormalizeData from "../utils/normalizeData";

/**
 * Extracts the user ID from the query string in the URL.
 * @returns {number | undefined} The user ID or undefined if not found.
 */
const getUserIdFromQueryString = (): number | undefined => {
  const params = new URLSearchParams(window.location.search);

  const id = Number(params.get("id")) || undefined;
  return id;
};

/**
 * The DashBoard component fetches user data and displays various charts and information cards.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const DashBoard = (): JSX.Element => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * Fetches user data based on the user ID from the query string.
     * @async
     */
    const fetchUserData = async () => {
      const userId = getUserIdFromQueryString();

      try {
        const data = await getUserData(userId);
        setUserData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading)
    return (
      <p className="w-full h-full flex items-center justify-center">
        Loading...
      </p>
    );
  if (!userData)
    return (
      <p className="w-full h-full flex items-center justify-center">
        No data available
      </p>
    );

  // const normalizedData = normalizeData(userData);
  const normalizedData = new NormalizeData(userData);
  const { user, userPerformance, userAverageSessions, userActivity, keyData } =
    normalizedData;

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-[77px] mt-[68px]">
        <h1 className="w-[835px] xl:w-[1125px] text-5xl leading-6 font-medium">
          Bonjour{" "}
          <span className="text-primary">{user.userInfos.firstName}</span>
        </h1>
        <p className="w-[835px] xl:w-[1125px] text-lg leading-6 mt-[41px] ml-[2px]">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:items-start gap-8">
        <div className="flex flex-col gap-[30px]">
          <ActivityBarChart userActivity={userActivity} />
          <div className="flex justify-between w-[835px]">
            <SessionLengthLineChart userAverageSessions={userAverageSessions} />
            <PerformanceRadar userPerformance={userPerformance} />
            <ScoreRadialChart user={user} />
          </div>
        </div>
        <div className="flex xl:flex-col gap-[39px] justify-between w-[835px] xl:w-[258px]">
          {keyData.map((data, i) => (
            <UserInfoCard key={i} label={data.key} value={data.value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
