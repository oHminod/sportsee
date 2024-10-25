import { TooltipProps } from "recharts";

/**
 * CustomToolTip component to display a custom tooltip for the recharts line chart.
 * @param {Object} props - The properties for the CustomToolTip component.
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload - The data payload for the tooltip.
 * @param {Object} props.coordinate - The coordinate of the tooltip.
 * @returns {JSX.Element|null} The CustomToolTip component or null if not active.
 */
const CustomToolTip = ({
  active,
  payload,
  coordinate,
}: TooltipProps<number, string>): JSX.Element | null => {
  if (active && payload && payload.length) {
    const weightValue = payload[0]?.value ?? 0;
    const calorieValue = payload[1]?.value ?? 0;

    const tooltipStyle: React.CSSProperties = {
      position: "absolute",
      left: coordinate?.x ? coordinate?.x + 36 : 0,
      top: "82px",
      pointerEvents: "none",
    };
    return (
      <div
        style={tooltipStyle}
        className={`bg-primary text-white text-[7px] leading-6 py-1 px-[6px] text-center`}
      >
        <p>{weightValue + "kg"}</p>
        <p>{calorieValue + "kCal"}</p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
