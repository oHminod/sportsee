import { RectangleProps } from "recharts";

/**
 * CustomCursor component to display a custom cursor for the recharts line chart.
 * @param {RectangleProps} props - The properties for the CustomCursor component.
 * @param {number} [props.x=0] - The x-coordinate of the cursor.
 * @param {number} [props.width=0] - The width of the cursor.
 * @returns {JSX.Element} The CustomCursor component.
 */
const CustomCursor = (props: RectangleProps): JSX.Element => {
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
