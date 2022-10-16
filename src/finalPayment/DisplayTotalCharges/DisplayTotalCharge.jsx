import React from 'react'
import './DisplayTotalCharge.css'

const DisplayTotalCharge = ({bookingCharge, costOfTicket} ) => {
 let totalCost = costOfTicket + bookingCharge;
 
    return (
      <div className="seatDetailsContainer">
        <div className="seatDetails">
          Total
        </div>
        <div className="seatCost">
          Rs.{totalCost}
        </div>
      </div>
  )
}

export default DisplayTotalCharge