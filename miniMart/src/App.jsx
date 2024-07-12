import React from "react"
import Home from "./Components/HomePages/Home"
//import Product from '../src/components/productPages/Product'

import About from "./About"
import Pages from "./Components/Pages/Pages"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import Cart from "./Components/Cart"
import Header from "./Components/Header"
import Product from "./Components/ProductPages/Product"
import { BrowserRouter,Routes,Route, RouterProvider, NavLink } from "react-router-dom"
import Heart from "./Heart"
import HomePage1 from "./Components/HomePages/HomePage1"
import HomePage2 from "./Components/HomePages/HomePage2"
import HomePage3 from "./Components/HomePages/HomePage3"
import HomePage4 from "./Components/HomePages/HomePage4"
import HomePage5 from "./Components/HomePages/HomePage5"
import HomePage6 from "./Components/HomePages/HomePage6"
import HomePage7 from "./Components/HomePages/HomePage7"
import HomePage8 from "./Components/HomePages/HomePage8"
import HomePage9 from "./Components/HomePages/HomePage9"
import HomePage10 from "./Components/HomePages/HomePage10"
import ProductPage1 from "./Components/ProductPages/ProductPage1"
import ProductPage2 from "./Components/ProductPages/ProductPage2"
import ProductPage3 from "./Components/ProductPages/ProductPage3"
import ProductPage4 from "./Components/ProductPages/ProductPage4"
import ProductPage5 from "./Components/ProductPages/ProductPage5"
import ProductPage6 from "./Components/ProductPages/ProductPage6"
import ProductPage7 from "./Components/ProductPages/ProductPage7"
import BlogPage1 from "./Components/Blog/BlogPage1"
import BlogPage2 from "./Components/Blog/BlogPage2"
import BlogPage3 from "./Components/Blog/BlogPage3"
import BlogPage4 from "./Components/Blog/BlogPage4"
import BlogPage5 from "./Components/Blog/BlogPage5"
import ContactPage1 from "./Components/Contact/ContactPage1"
import ContactPage2 from "./Components/Contact/ContactPage2"
import Search from "./Search"
import ProfilePage from "./Components/ProfilePage"
//import Footer from "./Components/Footer"
import SingleProductPage from "./Components/SingleProductPage"
import DtailProduct from "./Components/DtailProduct"


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
        <Route path="/homepage1" element={<HomePage1/>}/>
        <Route path="/homepage2" element={<HomePage2/>}/>
        <Route path="/homepage3" element={<HomePage3/>}/>
        <Route path="/homepage4" element={<HomePage4/>}/>
        <Route path="/homepage5" element={<HomePage5/>}/>
        <Route path="/homepage6" element={<HomePage6/>}/>
        <Route path="/homepage7" element={<HomePage7/>}/>
        <Route path="/homepage8" element={<HomePage8/>}/>
        <Route path="/homepage9" element={<HomePage9/>}/>
        <Route path="/homepage10" element={<HomePage10/>}/>
        <Route path="/productpage1" element={<ProductPage1/>}/>
        <Route path="/productpage2" element={<ProductPage2/>}/>
        <Route path="/productpage3" element={<ProductPage3/>}/>
        <Route path="/productpage4" element={<ProductPage4/>}/>
        <Route path="/productpage5" element={<ProductPage5/>}/>
        <Route path="/productpage6" element={<ProductPage6/>}/>
        <Route path="/productpage7" element={<ProductPage7/>}/>
        <Route path="/blogpage1" element={<BlogPage1/>}/>
        <Route path="/blogpage2" element={<BlogPage2/>}/>
        <Route path="/blogpage3" element={<BlogPage3/>}/>
        <Route path="/blogpage4" element={<BlogPage4/>}/>
        <Route path="/blogpage5" element={<BlogPage5/>}/>
        <Route path="/contactpage1" element={<ContactPage1/>}/>
        <Route path="/contactpage2" element={<ContactPage2/>}/>
        <Route path="/heart" element={<Heart/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<ProfilePage/>}/> 
        <Route path="/singleproductpage/:id" element={<SingleProductPage/>}/>
        <Route path="/dtailproduct" element={<DtailProduct/>}/>    
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
