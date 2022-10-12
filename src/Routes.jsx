import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import Details from './movieDetails/Details'

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
            <Route path='/' element={<MainPage />}></Route>
            {/* <Route path='/details' element={<Details />}></Route> */}
            <Route path='/details/:id' element={<Details />}></Route>
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default MainRoutes