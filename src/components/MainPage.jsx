import React from 'react'
import Navbar from './Navbar'
import { Grid } from '@mui/material';
import "../components/MainPage.css"
import RenderMovieList from './RenderMovieList';


const MainPage = () => {
 
  return (
    <div className="content">
        {/* <Navbar /> */}
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