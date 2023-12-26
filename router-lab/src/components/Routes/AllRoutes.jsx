import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import PageNotFound from '../PageNotFound'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
  )
}

export default AllRoutes