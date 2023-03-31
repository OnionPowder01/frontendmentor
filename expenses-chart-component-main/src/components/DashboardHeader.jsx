import React from 'react'
import LogoSvg from './LogoSvg'

const DashboardHeader = () => {
  return (
    <div className="dashboard-container">
        <div className="my-balance-container">
            <p>My balance</p>
            <h1>$921.48</h1>
        </div>
        <div className="logo-copntainer">
            <LogoSvg  className='svg'/>
        </div>
    </div>
  )
}

export default DashboardHeader