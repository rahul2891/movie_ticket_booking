import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { movies } from '../../data/movies';
import './PaymentButton.css'

const PaymentButton = ({seatsSelected}) => {
  console.log(seatsSelected)
   const { id } = useParams();
  const movie = movies.find(mov => mov.id === parseInt(id));
  // const [seatDetails, setSeatDetails] = useState(movie?.seats || {});
  // console.log(seatDetails)
  // let seatSelected = [];

  // for(let key in seatDetails){
  //   seatDetails[key].forEach((seatValue, seatIndx) => {
  //     if(seatValue === 2) {
  //       seatSelected.push(`${key}${seatIndx+1}`)
  //       //console.log(seatSelected)
  //     }
  //   })
  // }
 
  if(seatsSelected?.length){
    return (
      <Link to={`/payment/${movie.id}?data=${seatsSelected}`}>
        <div className="payButtonContainer">
          <Button className='payButton'>
            Pay Rs.{seatsSelected.length*(movie.ticketCost || 0)}
          </Button>
        </div>
      </Link>
    )
  } else {
  return <></>
}
}

export default PaymentButton