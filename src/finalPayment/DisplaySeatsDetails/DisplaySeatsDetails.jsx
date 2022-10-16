import { useParams, useSearchParams } from 'react-router-dom';
import { movies } from '../../data/movies';
import './DisplaySeatsDetails.css'

const DisplaySeatsDetails = () => {
  
  let [searchParams, setSearchParams] = useSearchParams();
  let selectedSeatArr = searchParams.get("data").split(",");
  const { id } = useParams();
  const movie = movies.find(mov => mov.id === parseInt(id));
  let costOfTicket = selectedSeatArr.length*(movie.ticketCost || 0)


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