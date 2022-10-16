import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../../data/movies'
import ConfirmButton from '../ConfirmButton/ConfirmButton'
import DisplayBookingCharges from '../DisplayBookingCharges/DisplayBookingCharges'
import DisplaySeatsDetails from '../DisplaySeatsDetails/DisplaySeatsDetails'
import DisplayTotalCharge from '../DisplayTotalCharges/DisplayTotalCharge'
import './Modal.css'

const Modal = () => {
  const { id } = useParams();
  const movie = movies.find(mov => mov.id === parseInt(id));
  return (
    <div className='modal'>
        <div className='modalContainer'>
            <div className="modalTitle">
                BOOKING SUMMARY
            </div>
        </div>
        <p className="movieName">{movie.name}</p>
        {/* <p>Display seats details</p> */}
        <DisplaySeatsDetails />
        {/* <p>Display Booking Charges</p> */}
        <DisplayBookingCharges />
        <hr className='hrStyle'/>
        {/* <p>Total Charge</p> */}
        <DisplayTotalCharge />
        <ConfirmButton />
    </div>
  )
}

export default Modal