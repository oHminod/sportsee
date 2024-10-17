import { TooltipProps } from "recharts";

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
      top: "75px",
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
