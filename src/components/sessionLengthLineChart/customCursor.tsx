import { Rectangle } from "recharts";

type CustomCursorProps = {
  points?: { x: number; y: number }[];
};

const CustomCursor = ({ points }: CustomCursorProps) => {
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
