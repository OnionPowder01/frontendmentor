import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardMain from "./components/DashboardMain";

function App() {
  return (
    <main>
      <div className="main-container">
      <DashboardHeader />
      <DashboardMain />
      </div>
    </main>
  );
}

export default App;
