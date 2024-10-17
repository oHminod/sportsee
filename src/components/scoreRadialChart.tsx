import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { formatedUserMainData } from "../utils/types";

const ScoreRadialChart = ({ user }: { user: formatedUserMainData }) => {
  const data = [
    {
      score: 1,
      fill: "#FBFBFB",
    },
    {
      score: user.score,
      fill: "#ff0000",
    },
  ];
  return (
    <div className="h-[263px] w-[258px] pb-10 bg-lightGrey rounded-md flex flex-col items-center pt-6 relative">
      <p className="w-full text-left pl-8 font-medium leading-7">Score</p>
      <div className="h-[190px] w-[190px] absolute top-[43px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="100%"
            outerRadius="100%"
            barSize={10}
            data={data}
            startAngle={85}
            endAngle={445}
          >
            <RadialBar background dataKey="score" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="h-[170px] w-[170px] bg-white rounded-full absolute top-[10px] left-[10px] flex flex-col items-center justify-center pt-6">
          <p className="text-legendTitle font-bold">
            {Math.round(user.score * 100)}%
          </p>
          <p className=" max-w-16 text-legend text-[#74798C] font-medium">
            de votre objectif
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreRadialChart;
