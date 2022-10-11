import React, { useContext } from 'react'
import '../movieDetails/details.css'
import MoviesContext from '../context/MoviesContext'

const details = () => {
    const {movies} = useContext(MoviesContext)
  return (
    <div>
        <h1>{movies.name}</h1>
    </div>
  )
}

export default details