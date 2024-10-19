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
    </div>
  );
};

export default Header;
