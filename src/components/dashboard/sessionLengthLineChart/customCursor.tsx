import { Rectangle } from "recharts";

type CustomCursorProps = {
  points?: { x: number; y: number }[];
};

/**
 * CustomCursor component to display a custom cursor for the recharts line chart.
 * @param {CustomCursorProps} props - The properties for the CustomCursor component.
 * @param {Array<{x: number, y: number}>} [props.points] - The points data for the cursor.
 * @returns {JSX.Element|null} The CustomCursor component or null if points are not provided.
 */
const CustomCursor = ({ points }: CustomCursorProps): JSX.Element | null => {
  if (!points) return null;

  return (
    <Rectangle
      fill="#000000"
      opacity={0.1}
      x={points[0].x}
      width={500}
      height={300}
    />
  );
};

export default CustomCursor;
