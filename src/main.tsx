import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.tsx";
import SidedBar from "./components/sidedBar.tsx";
import DashBoard from "./components/dashBoard.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <SidedBar />
    <DashBoard />
  </StrictMode>
);
