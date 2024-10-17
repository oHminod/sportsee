import { RectangleProps } from "recharts";

const CustomCursor = (props: RectangleProps) => {
  const { x = 0, width = 0 } = props;
  const newWidth = 60;
  const newX = x + (width - newWidth) / 2;

  return (
    <rect
      fill="rgba(196, 196, 196, 0.5)"
      width={newWidth}
      x={newX}
      height="51.7%"
      y="32%"
    />
  );
};

export default CustomCursor;
