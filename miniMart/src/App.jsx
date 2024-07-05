import React from "react"
import Home from "./Components/HomePages/Home"
//import Product from '../src/components/productPages/Product'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./About"
import Pages from "./Components/Pages/Pages"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import Cart from "./Components/Cart"
import Header from "./Components/Header"
import Product from "./Components/ProductPages/Product"


function App() {


  return (
    <>
       <BrowserRouter>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
