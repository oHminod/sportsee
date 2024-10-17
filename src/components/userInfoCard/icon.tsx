const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "Calories":
      return (
        <div className="h-[60px] w-[60px] rouded-[6px] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-[6px] bg-red opacity-[6.6%]"></div>
          <img src="/energy.png" alt="icone calories" />
        </div>
      );
    case "Protéines":
      return (
        <div className="h-[60px] w-[60px] rouded-[6px] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-[6px] bg-[#4AB8FF] opacity-[10%]"></div>
          <img src="/chicken.png" alt="icone calories" />
        </div>
      );
    case "Glucides":
      return (
        <div className="h-[60px] w-[60px] rouded-[6px] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-[6px] bg-[#F9CE23] opacity-[10.17%]"></div>
          <img src="/apple.png" alt="icone calories" />
        </div>
      );
    case "Lipides":
      return (
        <div className="h-[60px] w-[60px] rouded-[6px] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-[6px] bg-[#FD5181] opacity-[10%]"></div>
          <img src="/cheeseburger.png" alt="icone calories" />
        </div>
      );
    default:
      return (
        <div className="h-[60px] w-[60px] rouded-[6px] bg-red flex items-center justify-center"></div>
      );
  }
};

export default Icon;
