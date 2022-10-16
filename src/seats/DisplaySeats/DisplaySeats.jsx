import { useParams } from 'react-router-dom'
import { useState} from 'react'
import { movies } from '../../data/movies'
import styles from './DisplaSeats.module.css'
import PaymentButton from '../PaymentButton/PaymentButton'

const DisplaySeats = () => {
  const { id } = useParams();
  const movie = movies.find(mov => mov.id === parseInt(id));
  const [seatDetails, setSeatDetails] = useState(movie?.seats || {});
  const [seatsSelected, setSeatSelected] = useState([]);

  //           

   const onSeatClick = (seatValue, rowIndex, key) => {
    if (seatDetails) {
      if (seatValue === 1 || seatValue === 3) {
        return;
      } else if (seatValue === 0) {
        seatDetails[key][rowIndex] = 2;
        setSeatSelected([key + "" + (rowIndex + 1), ...seatsSelected]);
      } else {
        seatDetails[key][rowIndex] = 0;
        const val = key + "" + (rowIndex + 1);
        setSeatSelected(seatsSelected.filter(item => item !== val ));
      }
    }
    setSeatDetails({...seatDetails});
  }


    // 0 - Not booked || 1 - Booked || 2 - Selected || 3 - Blocked
   
  const nameForSeats = (seatValue) => {
    let colorChangeClass;
    if(seatValue === 0){
      colorChangeClass = styles.seatNotBooked;
    } else if(seatValue === 1){
      colorChangeClass = styles.seatBooked;
    } else if(seatValue === 2){
      colorChangeClass = styles.seatSelected;
    } else {
      colorChangeClass = styles.seatBlock;
    }
    return `${styles.seats} ${colorChangeClass}`
  }
  // console.log(seatsSelected);
//  useEffect(()=>{    
//     const seatsSelected = [];
//     Object.keys(seatDetails).map(row => {
//       seatDetails[row].map((item, i) => {
//       if (item === 2) {
//         seatsSelected.push(row + "" + (i + 1))
//       }
//     })})
//     console.log(seatsSelected);
//   },[seatDetails]);
 let seatArray = [];
    for(let key in seatDetails) {
      let colValue = seatDetails[key].map((seatValue, rowIndex) => (
        <span key={`${key}.${rowIndex}`} style={{margin: "10px"}}>
          {rowIndex === 0 && <span className= "styles.colName">{key}</span>}
          <span className={nameForSeats(seatValue)}  onClick={() => onSeatClick(seatValue, rowIndex, key)}>
            {rowIndex+1}
          </span>
          
          {seatDetails && rowIndex === seatDetails[key].length-1 && <><br/><br/></>}
        </span>
      ))
      seatArray.push(colValue);
      
  } 

  return(
    <>
    <div className='sContainer'>{seatArray}</div>
    <PaymentButton seatsSelected={seatsSelected}/>
    </>
  )
}

export default DisplaySeats