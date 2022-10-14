import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { movies } from '../data/movies'
import { Button } from '@mui/material';


const BookTicketsButton = () => {
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
    <Link to={`/seats/${movieData?.id}`}>
    <div className='paymentButtonContainer'>
        <Button style={{color: "white"}} className='paymentButton'>Book Ticket</Button>
    </div>
    </Link>
  )
}

export default BookTicketsButton