import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './ConfirmButton.css'

const ConfirmButton = () => {
  const [seconds, setSeconds] = useState(5);
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setTimerCompleted(true);
    }
  });
  return (
    <div className='paymentButtonContainer'>
        <Button disabled={timerCompleted} className='paymentButton'>
           {timerCompleted ? 'Confirm Booking' : `Confirm Booking (${seconds})` }
        </Button>
    </div>
  )
}

export default ConfirmButton