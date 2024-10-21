import { Text } from "recharts";

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
const CustomedLabels = ({
  payload,
  x,
  y,
  cy,
  ...rest
}: CustomedLabelsProps): JSX.Element => {
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
};

export default CustomedLabels;
