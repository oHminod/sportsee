const Header = () => {
  return (
    <div className="h-[91px] flex bg-[#020203] items-center shadow-header fixed top-0 left-0 right-0 z-50">
      <div className="w-[178px] ml-[29px]">
        <img src="/logo.png" alt="logo" className="w-full h-[60px]" />
      </div>
      <nav className="flex-1 w-full pl-[149px] pr-[91px] hidden lg:block">
        <ul className="flex gap-6 ml-auto mr-[29px] w-full justify-between items-center">
          <li>
            <a href="#" className="text-white font-medium text-2xl leading-6">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-2xl leading-6">
              Profil
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-2xl leading-6">
              Réglages
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-2xl leading-6">
              Communauté
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-1 items-center justify-end pr-4 w-full">
        <div className="lg:hidden h-16 w-16 flex items-center">
          <svg
            version="1.0"
            id="katman_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 841.89 595.28"
            xmlSpace="preserve"
          >
            <rect
              x="164.21"
              y="132.42"
              fill="#FFFFFF"
              width="514.08"
              height="66.64"
            />
            <rect
              x="164.21"
              y="395.81"
              fill="#FFFFFF"
              width="514.08"
              height="66.64"
            />
            <rect
              x="164.21"
              y="264.12"
              fill="#FFFFFF"
              width="514.08"
              height="66.64"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
