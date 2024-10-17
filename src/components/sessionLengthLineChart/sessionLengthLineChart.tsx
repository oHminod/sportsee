import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { formatedUserAverageSession } from "../../utils/types";
import CustomCursor from "./customCursor";
import CustomToolTip from "./hoverTooltip";

const SessionLengthLineChart = ({
  userAverageSessions,
}: {
  userAverageSessions: formatedUserAverageSession[];
}) => {
  return (
    <div className="h-[263px] w-[258px] bg-red rounded-md relative">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userAverageSessions}
          margin={{ top: 80, bottom: 58, left: 0, right: 0 }}
        >
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={["dataMin-10", "dataMax+10"]}
          />
          <Tooltip
            content={<CustomToolTip />}
            cursor={<CustomCursor />}
            isAnimationActive={false}
          />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "#FFFFFF",
              strokeWidth: 8,
              r: 1,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="absolute top-0">
        <p className="text-white/50 font-medium text-[15px] leading-6 mt-[29px] ml-[34px] max-w-36 text-left">
          Durée moyenne des sessions
        </p>
      </div>
      <div className="absolute bottom-0 flex justify-between p-4 w-full">
        {userAverageSessions.map((session, index) => (
          <p
            key={index}
            className="text-white/50 text-xs leading-6 font-medium"
          >
            {session.day}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SessionLengthLineChart;
