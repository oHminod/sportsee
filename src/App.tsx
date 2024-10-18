import DashBoard from "./components/dashBoard";
import Header from "./components/header";
import SidedBar from "./components/sidedBar";

function App() {
  return (
    <>
      <Header />
      <div className="flex w-full min-h-full pt-[91px]">
        <SidedBar />
        <DashBoard />
      </div>
    </>
  );
}

export default App;
