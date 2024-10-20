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
      <div className="lg:hidden flex flex-1 items-center justify-end pr-6 w-full">
        <div className="h-16 w-16 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="64"
            height="64"
          >
            <rect x="10" y="20" width="80" height="10" fill="#FFFFFF" />
            <rect x="10" y="45" width="80" height="10" fill="#FFFFFF" />
            <rect x="10" y="70" width="80" height="10" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
