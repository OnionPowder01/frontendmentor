import React from "react";
import ChartBar from "./ChartBar";
import data from "../data.json";

const Chart = () => {
  data.map((item, idx) => <ChartBar item={item} key={idx} />);

  return (
    <div className="main-chart">
      {data.map((item, idx) => (
        <ChartBar item={item} key={idx} />
      ))}
    </div>
  );
};

export default Chart;
