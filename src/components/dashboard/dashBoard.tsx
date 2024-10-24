import PerformanceRadar from "./performanceRadar/performanceRadar";
import ScoreRadialChart from "./scoreRadialChart/scoreRadialChart";
import SessionLengthLineChart from "./sessionLengthLineChart/sessionLengthLineChart";
import ActivityBarChart from "./activityBarChart/activityBarChart";
import UserInfoCard from "./userInfoCard/userInfoCard";
import NormalizeData from "../../utils/normalizeData";
import Loading from "../layout/loading";
import useUserData from "../../hooks/useUserData";

/**
 * The DashBoard component fetches user data and displays various charts and information cards.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const DashBoard = (): JSX.Element => {
  const { userData, loading } = useUserData();

  if (loading) return <Loading />;
  if (!userData)
    return (
      <p className="w-full h-full flex items-center justify-center">
        No data available
      </p>
    );

  const normalizedData = new NormalizeData(userData);
  const { user, userPerformance, userAverageSessions, userActivity, keyData } =
    normalizedData;
  const goodScore = user.score >= 0.15;

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:w-[835px] xl:w-[1125px] mb-[77px] mt-[68px] mx-auto px-4 lg:px-0">
        <h1 className="text-5xl sm:leading-6 font-medium w-full">
          Bonjour{" "}
          <span className="text-primary">{user.userInfos.firstName}</span>
        </h1>
        <p className="text-lg leading-6 mt-[41px] ml-[2px] w-full">
          {goodScore
            ? "Félicitation ! Vous avez explosé vos objectifs hier 👏"
            : "Courage ! Continuez, vos efforts vont payer 💪"}
        </p>
      </div>
      <div className="flex flex-col px-4 lg:px-0 lg:items-center xl:flex-row xl:justify-center xl:items-start gap-8">
        <div className="flex flex-col gap-[30px]">
          <ActivityBarChart userActivity={userActivity} />
          <div className="flex flex-wrap gap-2 justify-center lg:justify-between w-full lg:w-[835px]">
            <SessionLengthLineChart userAverageSessions={userAverageSessions} />
            <PerformanceRadar userPerformance={userPerformance} />
            <ScoreRadialChart user={user} />
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-col gap-[39px] justify-center lg:justify-between lg:w-[835px] xl:w-[258px] pb-[68px]">
          {keyData.map((data, i) => (
            <UserInfoCard key={i} label={data.key} value={data.value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
