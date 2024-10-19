import PerformanceRadar from "./performanceRadar";
import ScoreRadialChart from "./scoreRadialChart";
import SessionLengthLineChart from "./sessionLengthLineChart/sessionLengthLineChart";
import ActivityBarChart from "./activityBarChart/activityBarChart";
import UserInfoCard from "./userInfoCard/userInfoCard";
import NormalizeData from "../utils/normalizeData";
import Loading from "./loading";
import useUserData from "../hooks/useUserData";

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

  // const normalizedData = normalizeData(userData); // old way
  const normalizedData = new NormalizeData(userData);
  const { user, userPerformance, userAverageSessions, userActivity, keyData } =
    normalizedData;
  const goodScore = user.score >= 0.15;

  return (
    <div className="flex flex-col w-full lg:pl-[117px] xl:pl-[132px] pt-[91px] pb-[68px]">
      <div className="flex flex-col items-center justify-center mb-[77px] mt-[68px]">
        <h1 className="lg:w-[835px] xl:w-[1125px] text-5xl leading-6 font-medium">
          Bonjour{" "}
          <span className="text-primary">{user.userInfos.firstName}</span>
        </h1>
        <p className="lg:w-[835px] xl:w-[1125px] text-lg leading-6 mt-[41px] ml-[2px]">
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
        <div className="flex flex-wrap xl:flex-col gap-[39px] justify-center lg:justify-between lg:w-[835px] xl:w-[258px]">
          {keyData.map((data, i) => (
            <UserInfoCard key={i} label={data.key} value={data.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
