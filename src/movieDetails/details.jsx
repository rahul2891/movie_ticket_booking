//import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../data/movies'
import '../movieDetails/details.css'
import BookTicketsButton from './BookTicketsButton'
import CustomizeRowsButton from './CustomizeRowsButton'
//import MoviesContext from '../context/MoviesContext'

const Details = () => {
   // const {movies} = useContext(MoviesContext)

  //  const seatNumber = movies.seats
    const { id } = useParams();
    const [movieData, setMoviedata] = useState({});
    const fetchDetails = () => {
  const filteredData = movies.filter(item => item.id === parseInt(id));
  setMoviedata(filteredData[0]);
  console.log(filteredData, id)
    }
    useEffect(() => {   
      fetchDetails();   
    }, [])
  return (
    <div className= "seatsContainer">
        <h1>{movieData?.name} - {movieData?.language}</h1>
        <div className='language'>
          Ticket Cost: {movieData?.ticketCost}
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