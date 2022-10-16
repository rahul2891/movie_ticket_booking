import React from 'react'
import './DisplayBookingCharges.css'

const DisplayBookingCharges = ({bookingCharge}) => {

  return (
    <div className='seatDetailContainer'>
        <div className="seatDetails">
            Booking Charge
        </div>
        <div className="seatCost">
            Rs.{bookingCharge}
        </div>
    </div>
  )
}

export default DisplayBookingCharges