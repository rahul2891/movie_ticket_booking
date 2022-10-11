import React from 'react'
import Navbar from './Navbar'
import { Grid } from '@mui/material';
import "../components/FrontPage.css"
import {movies} from '../data/movies';

const MainPage = () => {
 

  const RenderMovieList = () => {
    if(movies){
      return movies.map(movie => (
        <Grid item xs={4} key={movie.id}>
          <div className='card'>
            <div className="movieTitle">{movie.name}</div>
            <div className="movieLanguage">{movie.language}</div>
          </div>
        </Grid>
      ))
    }
  }
  return (
    <div className="content">
        <Navbar />
        <div className='moviesContainer'>
          <h1 className='title'>Recommended Movies</h1>
          <Grid container spacing={2}>
            <RenderMovieList />
          </Grid>
        </div>
    </div>
  )
}

export default MainPage