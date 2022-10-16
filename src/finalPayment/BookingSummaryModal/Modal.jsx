import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../../data/movies'
import ConfirmButton from '../ConfirmButton/ConfirmButton'
import DisplayBookingCharges from '../DisplayBookingCharges/DisplayBookingCharges'
import DisplaySeatsDetails from '../DisplaySeatsDetails/DisplaySeatsDetails'
import DisplayTotalCharge from '../DisplayTotalCharges/DisplayTotalCharge'
import { useSearchParams } from 'react-router-dom';
import './Modal.css'

const Modal = () => {
   const { id } = useParams();
  const movie = movies.find(mov => mov.id === parseInt(id));
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSeatArr = searchParams.get("data").split(",");
   const bookingChargeCost = 20;
  const bookingCharge = selectedSeatArr.length * bookingChargeCost;
  const costOfTicket = selectedSeatArr.length*(movie.ticketCost || 0)
  console.log(costOfTicket)
  
  return (
    <div className='modal'>
        <div className='modalContainer'>
            <div className="modalTitle">
                BOOKING SUMMARY
            </div>
        </div>
        <p className="movieName">{movie.name}</p>
        {/* <p>Display seats details</p> */}
        <DisplaySeatsDetails selectedSeatArr={selectedSeatArr} searchParams={searchParams} 
        costOfTicket={costOfTicket} />
        {/* <p>Display Booking Charges</p> */}
        <DisplayBookingCharges bookingCharge={bookingCharge} />
        <hr className='hrStyle'/>
        {/* <p>Total Charge</p> */}
        <DisplayTotalCharge bookingCharge={bookingCharge} costOfTicket={costOfTicket} />
        <ConfirmButton />
    </div>
  )
}

export default Modal