import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/layout/header.tsx";
import SidedBar from "./components/layout/sidedBar.tsx";
import DashBoard from "./components/dashboard/dashBoard.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <SidedBar />
    <DashBoard />
  </StrictMode>
);
