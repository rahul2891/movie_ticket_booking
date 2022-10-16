import React from 'react'
import { useSearchParams } from 'react-router-dom';
import './DisplayBookingCharges.css'

const DisplayBookingCharges = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let selectedSeatArr = searchParams.get("data").split(",");
  console.log(selectedSeatArr.length)
   let bookingChargeCost = 20;
  let bookingCharge = selectedSeatArr.length * bookingChargeCost;

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