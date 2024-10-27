import { useEffect, useState } from "react";

/**
 * Icon component that displays an image and background color based on the provided name.
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the icon to display. Can be one of "Calories", "Protéines", "Glucides", or "Lipides".
 * @returns {JSX.Element} The rendered Icon component.
 */
const Icon = ({ name }: { name: string }): JSX.Element => {
  const [image, setImage] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const noImage = image === "";

  useEffect(() => {
    switch (name) {
      case "Calories":
        setImage("/energy.png");
        setColor("bg-red opacity-[6.6%]");
        break;
      case "Protéines":
        setImage("/chicken.png");
        setColor("bg-[#4AB8FF] opacity-[10%]");
        break;
      case "Glucides":
        setImage("/apple.png");
        setColor("bg-[#F9CE23] opacity-[10.17%]");
        break;
      case "Lipides":
        setImage("/cheeseburger.png");
        setColor("bg-[#FD5181] opacity-[10%]");
        break;
      default:
        break;
    }
  }, [name]);

  if (noImage)
    return (
      <div className="h-[60px] w-[60px] rouded-[6px] bg-red flex items-center justify-center"></div>
    );

  return (
    <div className="h-[60px] w-[60px] rouded-[6px] flex items-center justify-center relative">
      <div className={`absolute inset-0 rounded-[6px] ${color}`}></div>
      <img src={image} alt={`icone ${name}`} />
    </div>
  );
};

export default Icon;
