import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import Details from './movieDetails/Details'
import Seats from './seats/Seats'

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/details/:id' element={<Details />}></Route>
            <Route path='/seats/:id' element={<Seats />}></Route>
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default MainRoutes