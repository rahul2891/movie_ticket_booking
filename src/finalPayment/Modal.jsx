import React from 'react'
import ConfirmButton from './ConfirmButton'
import DisplayBookingCharges from './DisplayBookingCharges'
import DisplaySeatsDetails from './DisplaySeatsDetails'
import DisplayTotalCharge from './DisplayTotalCharge'

const Modal = () => {
  return (
    <div className='modal'>
        <div className='modalContainer'>
            <div className="modalTitle">
                BOOKING SUMMARY
            </div>
        </div>
        <p className="movieName">Movie Name</p>
        <p>Display seats details</p>
        {/* <DisplaySeatsDetails /> */}
        <p>Display Booking Charges</p>
        {/* <DisplayBookingCharges /> */}
        <hr />
        <p>Total Charge</p>
        {/* <DisplayTotalCharge /> */}
        <button>Confirm Button</button>
        {/* <ConfirmButton /> */}
    </div>
  )
}

export default Modal