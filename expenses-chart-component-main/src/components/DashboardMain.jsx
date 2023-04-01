import React from "react";
import Chart from "./Chart";

const DashboardMain = () => {
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-title">
        <h1>Spending - Last 7 days</h1>
      </div>
      <div className="chart-container">
        <Chart />
      </div>
      <div className="break"></div>
      <footer>
        <div className="footer-total-container">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="footer-report-container">
          <h5>+2.4%</h5>
          <p>from last month</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardMain;
