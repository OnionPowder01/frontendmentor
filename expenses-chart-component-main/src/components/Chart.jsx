import React, { useState } from "react";
import data from "../data.json";


const Chart = () => {

  const chartBars = data.map(item => (
    <div className="chart-bar-container">
      <div className="chart-bar-day">{item.day}</div>
      <div className="chart-bar-fill" style={{ height: `${item.amount * 4}px` }}></div>  
    </div>
  ));
  

  return (
    <div className="main-chart">
     {chartBars}
    </div>
  )
};

export default Chart;
