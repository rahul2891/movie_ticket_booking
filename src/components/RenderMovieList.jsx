import React from 'react'
import {movies} from '../data/movies';
import { Grid } from '@mui/material';

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
export default RenderMovieList