import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DashBoard from "./components/dashboard/dashBoard.tsx";
import "./index.css";
import Layout from "./components/layout/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <DashBoard />
    </Layout>
  </StrictMode>
);
