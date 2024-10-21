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
  if (!active || !payload || !coordinate) return null;

  return (
    <div className={`bg-white px-2`}>
      <p className="text-[8px] leading-6 font-medium">
        {`${payload[0].value} min`}
      </p>
    </div>
  );
};

export default CustomToolTip;
