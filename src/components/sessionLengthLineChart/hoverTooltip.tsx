import { TooltipProps } from "recharts";

const CustomToolTip = ({
  active,
  payload,
  coordinate,
}: TooltipProps<number, string>) => {
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
