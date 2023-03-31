import React from 'react'
import Chart from './Chart'

const DashboardMain = () => {
  return (
    <div className="dashboard-main-container">
        <div className="dashboard-title">
            <h1>Spending- Last 7 days</h1>
        </div>
        <div className="chart-container">
        <Chart />
        </div>
    </div>
  )
}

export default DashboardMain