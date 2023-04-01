import React, { useState } from "react";
import Tooltip from "./Tooltip";

const ChartBar = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="chart-bar-container">
      <div className="chart-bar-day">{item.day}</div>
      <div
        className="chart-bar-fill"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        style={{ height: `${item.amount * 3}px` }}
      >
        <Tooltip active={active} amount={item.amount} />
      </div>
    </div>
  );
};

export default ChartBar;
