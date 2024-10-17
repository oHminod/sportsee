import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { formatedUserActivity } from "../../utils/types";
import CustomToolTip from "./hoverToolTip";
import CustomCursor from "./customCursor";

const ActivityBarChart = ({
  userActivity,
}: {
  userActivity: formatedUserActivity;
}) => {
  const { sessions, minWeight, maxWeight } = userActivity;

  const formatXAxis = (_value: unknown, index: number): string =>
    (index + 1).toString();

  const formatLegend = (value: string): JSX.Element => (
    <span className="text-[#74798C] text-sm font-medium">{value}</span>
  );

  return (
    <div className="h-[320px] w-[835px] bg-lightGrey rounded-md relative px-8">
      <h3 className="absolute left-8 top-6 text-[#20253A] font-medium text-[15px]">
        Activités quotidiennes
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sessions}
          margin={{ top: 23, bottom: 23 }}
          barGap={8}
          barSize={7}
        >
          <XAxis
            dataKey="day"
            axisLine={{ stroke: "rgba(222, 222, 222, 1)" }}
            tickFormatter={formatXAxis}
            tickLine={false}
            className="text-sm font-medium text-legendGrey opacity-60"
            tick={{
              dy: 16,
            }}
            padding={{ left: -45, right: -45 }}
          />

          <YAxis dataKey="calories" yAxisId="left" hide={true} />
          <YAxis
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            domain={[minWeight - 1, maxWeight + 1]}
            tickCount={4}
            tickLine={false}
            axisLine={{ stroke: "transparent" }}
            className="text-sm font-medium text-legendGrey opacity-60"
            tick={{
              dx: 36,
            }}
          />
          <Tooltip
            content={<CustomToolTip />}
            cursor={<CustomCursor />}
            isAnimationActive={false}
          />

          <CartesianGrid
            stroke="rgba(222, 222, 222, 1)"
            strokeDasharray="3 3"
            vertical={false}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconSize={8}
            height={80}
            formatter={formatLegend}
          />
          <Bar
            dataKey="kilogram"
            fill="rgba(40, 45, 48, 1)"
            name=" Poids (kg)"
            legendType="circle"
            yAxisId="right"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="rgba(230, 0, 0, 1)"
            name=" Calories brûlées (kCal)"
            legendType="circle"
            yAxisId="left"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityBarChart;
