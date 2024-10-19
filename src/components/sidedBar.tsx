import { useEffect, useState } from "react";

const SidedBar = () => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    function calculateWindowHeight() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", calculateWindowHeight);
    return () => {
      window.removeEventListener("resize", calculateWindowHeight);
    };
  }, []);

  const isSmallScreen = windowHeight < 768;
  const isVerySmallScreen = windowHeight < 328;

  return (
    <div className="min-h-full w-[117px] bg-[#020203] fixed z-10 hidden lg:block">
      <nav
        className={`flex flex-col items-center justify-center gap-5 h-full w-full absolute -top-[6px] z-10${
          isSmallScreen ? " hidden" : ""
        }
        `}
      >
        <a href="#">
          <div className="bg-white h-16 w-16 rounded-[6px] flex items-center justify-center">
            <img src="/Zen.png" alt="zen" />
          </div>
        </a>
        <a href="#">
          <div className="bg-white h-16 w-16 rounded-[6px] flex items-center justify-center">
            <img src="/Swim.png" alt="swim" />
          </div>
        </a>
        <a href="#">
          <div className="bg-white h-16 w-16 rounded-[6px] flex items-center justify-center">
            <img src="/Cycle.png" alt="cycle" />
          </div>
        </a>
        <a href="#">
          <div className="bg-white h-16 w-16 rounded-[6px] flex items-center justify-center">
            <img src="/Alteres.png" alt="alteres" />
          </div>
        </a>
      </nav>
      <p
        className={`fixed text-white text-xs font-medium rotate-[270deg] -left-[14px] bottom-[120px]${
          isVerySmallScreen ? " hidden" : ""
        }`}
      >
        Copyright, SportSee 2020
      </p>
    </div>
  );
};

export default SidedBar;
