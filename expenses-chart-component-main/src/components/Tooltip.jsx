import React from 'react'

const Tooltip = ({ active, amount }) => {

    const handleToolTip = (amount) => {
        if(active) {
          return (
            <div className="tooltip-container">
              <div className="para">
                <p>${amount}</p>
              </div>
            </div>
          )
        }
      }

  return (
    <>
    {handleToolTip(amount)}
    </>

  )
}

export default Tooltip