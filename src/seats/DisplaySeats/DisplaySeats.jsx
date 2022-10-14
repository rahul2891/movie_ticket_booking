import React from 'react'
import { useParams } from 'react-router-dom'
import { useState} from 'react'
import { movies } from '../../data/movies'
import styles from '../DisplaySeats/DisplaSeats.module.css'

const DisplaySeats = () => {
  const { id } = useParams();
  const movie = movies.find(mov => mov.id === parseInt(id));
  const [seatDetails, setSeatDetails] = useState(movie?.seats || {});

   const onSeatClick = (seatValue, rowIndex, key) => {
    if (seatDetails) {
      if (seatValue === 1 || seatValue === 3) {
        return;
      } else if (seatValue === 0) {
        seatDetails[key][rowIndex] = 2; 
      } else {
        seatDetails[key][rowIndex] = 0; 
      }
    }
    setSeatDetails({...seatDetails});
  }


    // 0 - Not booked || 1 - Booked || 2 - Selected || 3 - Blocked
   
  const nameForSeats = (seatValue) => {
    let block;
    if(seatValue === 0){
      block = styles.seatNotBooked;
    } else if(seatValue === 1){
      block = styles.seatBooked;
    } else if(seatValue === 2){
      block = styles.seatSelected;
    } else {
      block = styles.seatBlock;
    }
    return `${styles.seats} ${block}`
  }


 let seatArray = [];
    for(let key in seatDetails) {
      let colValue = seatDetails[key].map((seatValue, rowIndex) => (
        <span key={`${key}.${rowIndex}`} style={{margin: "10px"}}>
          {rowIndex === 0 && <span className='colName'>{key}</span>}
          <span className={nameForSeats(seatValue)}  onClick={() => onSeatClick(seatValue, rowIndex, key)}>
            {rowIndex+1}
          </span>
          
          {seatDetails && rowIndex === seatDetails[key].length-1 && <><br/><br/></>}
        </span>
      ))
      seatArray.push(colValue);
  } 

  

  return(
    <div className='sContainer'>{seatArray}</div>
  )
}

export default DisplaySeats