import React from 'react'
import './DisplaySeatsDetails.css'

const DisplaySeatsDetails = () => {
  //  let costOfTicket = seatSelected.length*(movie.ticketCost || 0)


  return (
    <div className='seatDetailContainer'>
        <div className="seatdetails">
            <p>seatSelected.join(,) && seatSelected.length + Tickets</p>
        </div>
        <div className="seatCost">
          {/* Rs.{totalCost} */}
        </div>
    </div>
  )
}

export default DisplaySeatsDetails