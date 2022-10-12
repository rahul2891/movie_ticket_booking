import React from 'react'
import {movies} from '../data/movies';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

 const RenderMovieList = () => {
    if(movies){
      return movies.map(movie => (
        <Grid item xs={4} key={movie.id}>
            <Link to={`/details/${movie.id}`}>
          <div className='card'>
            <div className="movieTitle">{movie.name}</div>
            <div className="movieLanguage">{movie.language}</div>
          </div>
          </Link>
        </Grid>
      ))
    }
  }
export default RenderMovieList