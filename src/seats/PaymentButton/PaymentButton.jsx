import { Button } from '@mui/material';
import {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { movies } from '../../data/movies';
import './PaymentButton.css'

const PaymentButton = () => {
   const { id } = useParams();
  const movie = movies.find(mov => mov.id === parseInt(id));
  const [seatDetails, setSeatDetails] = useState(movie?.seats || {});

  let seatSelected = [];
  for(let key in seatDetails){
    seatDetails[key].forEach((seatValue, seatIndx) => {
      if(seatValue === 2) {
        seatSelected.push(`${key}${seatIndx+1}`)
      }
    })
  }
  if(seatSelected.length){
    return (
      <Link to={{ pathname: '/payment', query:{
        movieId: movie.id, seatDetails: JSON.stringify(seatDetails)
      }}}>
        <div className="payButtonContainer">
          <Button className='payButton'>
            Pay Rs.{seatSelected.length*(movie.ticketCost || 0)}
          </Button>
        </div>
      </Link>
    )
  }else {
  return <></>
}
}

export default PaymentButton