import {
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Text,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";
import { UserPerformanceFormattedData } from "../utils/types";

type CustomedLabelsProps = {
  payload: { value: string };
  x: number;
  y: number;
  cx: number;
  cy: number;
  [key: string]: unknown;
};

/**
 * Custom label component for the radar chart.
 * @param {CustomedLabelsProps} props - The properties for the custom label.
 * @returns {JSX.Element} The custom label element.
 */
function customedLabels({
  payload,
  x,
  y,
  cy,
  ...rest
}: CustomedLabelsProps): JSX.Element {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 10}
      x={x}
      className="text-[12px]"
    >
      {payload.value}
    </Text>
  );
}

/**
 * PerformanceRadar component to display user performance data in a radar chart.
 * @param {Object} props - The properties for the PerformanceRadar component.
 * @param {UserPerformanceFormattedData[]} props.userPerformance - The user performance data.
 * @returns {JSX.Element} The PerformanceRadar component.
 */
const PerformanceRadar = ({
  userPerformance,
}: {
  userPerformance: UserPerformanceFormattedData[];
}): JSX.Element => {
  if (!userPerformance) return <p>No data available</p>;

  const maxValue = Math.max(...userPerformance.map((data) => data.value)) + 30;

  return (
    <div className="flex h-[263px] bg-darkGrey w-[258px] rounded-md">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={"90"} data={userPerformance}>
          <PolarGrid
            radialLines={false}
            stroke="#FFFFFF"
            strokeWidth={1}
            polarRadius={[1.25, 22.5, 45, 67.5, 90]}
            gridType="polygon"
          />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            stroke="#FFFFFF"
            tick={(props) => customedLabels(props)}
          />
          <PolarRadiusAxis
            domain={[0, maxValue]}
            tick={false}
            axisLine={false}
          />
          <Radar dataKey="value" fillOpacity={0.7} fill="rgb(255, 1, 1)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadar;
