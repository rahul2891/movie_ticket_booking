import './DisplaySeatsDetails.css'

const DisplaySeatsDetails = ({searchParams, selectedSeatArr, costOfTicket}) => {
  
console.log(costOfTicket)
 
  return (
    <div className='seatDetailContainer'>
        <div className="seatDetails">
            {searchParams.get("data")} ({selectedSeatArr.length} Tickets)
        </div>
        <div className="seatCost">
          Rs.{costOfTicket}
        </div>
    </div>
  )
}

export default DisplaySeatsDetails