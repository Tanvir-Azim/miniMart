import React from 'react'

import { BrowserRouter,Routes,Route, RouterProvider, NavLink } from "react-router-dom"
import SingleProductPage from './SingleProductPage'
import SingleProductPageId from './SingleProductPageId'

function Text() {
   
    
   
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/singleproductpage' element={ <SingleProductPage/>} />
            <Route path='/singleproductpageid/:id' element={ <SingleProductPageId/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Text