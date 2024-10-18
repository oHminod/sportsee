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

/**
 * ActivityBarChart component to display the daily activity of a user in a bar chart.
 * @param {Object} props - The properties for the ActivityBarChart component.
 * @param {formatedUserActivity} props.userActivity - The user activity data.
 * @returns {JSX.Element} The ActivityBarChart component.
 */
const ActivityBarChart = ({
  userActivity,
}: {
  userActivity: formatedUserActivity;
}): JSX.Element => {
  const { sessions, minWeight, maxWeight } = userActivity;

  /**
   * Formats the X-axis labels.
   * @param {unknown} _value - The value of the X-axis label.
   * @param {number} index - The index of the X-axis label.
   * @returns {string} The formatted X-axis label.
   */
  const formatXAxis = (_value: unknown, index: number): string =>
    (index + 1).toString();

  /**
   * Formats the legend labels.
   * @param {string} value - The value of the legend label.
   * @returns {JSX.Element} The formatted legend label.
   */
  const formatLegend = (value: string): JSX.Element => (
    <span className="text-[#74798C] text-sm font-medium">{value}</span>
  );

  const domainMinWeight = minWeight - 1;
  const domainMaxWeight = maxWeight + 1;
  const midWeight = (domainMinWeight + domainMaxWeight) / 2;
  const yAxisTicks = [domainMinWeight, midWeight, domainMaxWeight];
  const midWeightIsDecimal = midWeight % 1 !== 0;

  return (
    <div className="h-[320px] w-[835px] bg-lightGrey rounded-md relative px-8">
      <h3 className="absolute left-8 top-6 text-[#20253A] font-medium text-[15px]">
        Activité quotidienne
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sessions}
          margin={{ top: 30, bottom: 30 }}
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
          <YAxis
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            domain={[domainMinWeight, domainMaxWeight]}
            ticks={yAxisTicks}
            tickLine={false}
            axisLine={{ stroke: "transparent" }}
            className="text-sm font-medium text-legendGrey opacity-60"
            tick={{
              dx: midWeightIsDecimal ? 22 : 36,
            }}
          />
          <YAxis dataKey="calories" yAxisId="left" hide={true} />
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
