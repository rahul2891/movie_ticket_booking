//import { useContext } from 'react'
import '../movieDetails/details.css'
import BookTicketsButton from './BookTicketsButton'
import CustomizeRowsButton from './CustomizeRowsButton'
//import MoviesContext from '../context/MoviesContext'

const Details = () => {
   // const {movies} = useContext(MoviesContext)

  //  const seatNumber = movies.seats
    
  return (
    <div className= "seatsContainer">
        <h1>Movie Name - Movie Language</h1>
        <div className='language'>
          Ticket Cost: movie.ticketCost
        </div>
        <div className="buttonContainer">
          <div className="buttonHolder">
            <BookTicketsButton />
            <CustomizeRowsButton />
          </div>
        </div>
    </div>
  )
}

export default Details