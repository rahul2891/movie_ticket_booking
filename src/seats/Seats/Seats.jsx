import { useState, useEffect} from 'react'
import { movies } from '../../data/movies';
import { useParams } from 'react-router-dom'
import DisplaySeats from '../DisplaySeats/DisplaySeats';
import './seats.css';

const Seats = () => {
   const { id } = useParams();
   const [seatDetails, setSeatDetails] = useState({});
    const fetchDetails = () => {
  const filteredData = movies.filter(item => item.id === parseInt(id));
  setSeatDetails(filteredData[0]);
    }
    useEffect(() => {   
      fetchDetails();   
    }, [])

  return (
    <>
    <div className='seatsContainer'>
        <h1>{ seatDetails.name}</h1>
    
        {<DisplaySeats />}
    </div>
    </>
  )
}



export default Seats