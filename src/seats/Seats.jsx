import { useState, useEffect} from 'react'
import { movies } from '../data/movies';
import { useParams } from 'react-router-dom'
import DisplaySeats from './DisplaySeats/DisplaySeats';
import '../seats/seats.css';
import PaymentButton from './PaymentButton/PaymentButton';

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

//     let output ={};
// Object.entries(seatDetails.seats).forEach(([row, value]) => (output[row] = value.map((v,i) => i+1)))
//     console.log(output)

  return (
    <div className='seatsContainer'>
        <h1>{ seatDetails.name}</h1>
       {/* {
  Object.entries(seatDetails.seats).map(
    ([row, value]) => {
      return (
        <div>
          {row}
        {value.map((v, i) => <span>{i + 1} </span>)}
        </div>
        )
      }
  )
} */}
        <div>{<DisplaySeats />}</div> 
        {/* {seatDetails.seats} */}
        <div>{<PaymentButton />}</div>
    </div>
  )
}



export default Seats