import Header from "./header";
import SidedBar from "./sidedBar";

/**
 * Layout component that includes a header, a sidebar, and a main content area.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed within the main area.
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <SidedBar />
      <main className="flex flex-col min-h-full lg:pl-[117px] xl:pl-[132px] pt-[91px]">
        {children}
      </main>
    </>
  );
};

export default Layout;
