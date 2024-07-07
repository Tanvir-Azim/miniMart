import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";
import HomeNavigation from './Navigation/HomeNavigation';
import ProductNavigation from './Navigation/ProductNavigation';
import BlogNavagate from './Navigation/BlogNavagate';
import ContactNavation from './Navigation/ContactNavation';


function Modal() {
  const [showProduct,setShowProduct]=useState(false)

  const [productData,setProductData]=useState(false)
  const [blogDropdawn,setBlogDropdown]=useState(false)
  const [contactDropdawn,setContactDropdawn]= useState(false)
 


  const HomeToggle=()=>{
    setShowProduct(!showProduct)
  }

  const ProductToggle=()=>{
    setProductData(!productData)
  }

  const BlogToggle=()=>{
    setBlogDropdown(!blogDropdawn)
  }

  const ContactToggle=()=>{
    setContactDropdawn(!contactDropdawn)
  }




  return (
    
    <>    
              <ul className=''>

                  <div className=' w-full h-full flex items-center'>

                      <li onClick={()=>{HomeToggle()}} className=' text-[17px] relative  h-10 ml-5 flex items-center'><NavLink  to='/'>HOME</NavLink>
                        {showProduct && <HomeNavigation/>}
                      </li>
                      <div>
                        <MdKeyboardArrowDown className=' text-[20px]'/>
                      </div>
                   </div>
                    <hr/>
                    <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{ProductToggle()}}><NavLink  to='/product' className=' text-[17px] relative  h-10 ml-5 flex items-center'>PRODUCTS</NavLink>
                        {productData && <ProductNavigation/>}
                        </li>

                        <div>
                        <MdKeyboardArrowDown className=' text-[20px]'/>
                        </div>
                    </div>
                    
                    <hr/>
                    <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{BlogToggle()}}><NavLink  to='/blog' className=' text-[17px] relative  h-10 ml-5 flex items-center'> BLOG</NavLink>
                        {blogDropdawn && <BlogNavagate/>}
                        </li>

                        <div>
                        <MdKeyboardArrowDown className=' text-[20px]'/>
                        </div>
                    </div>
                    <hr/>

                     <div className=' w-full h-full flex items-center'>
                        <li><NavLink  to='/pages' className=' text-[17px] relative  h-10 ml-5 flex items-center'>PAGES</NavLink></li>

                        <div>
                        <MdKeyboardArrowDown className=' text-[20px]'/>
                        </div>
                    </div>
                    <hr/>
                    <div className=' w-full h-full flex items-center'>
                        <li><NavLink  to='/about' className=' text-[17px] relative  h-10 ml-5 flex items-center'>ABOUT</NavLink></li>

                        <div>
                        <MdKeyboardArrowDown className=' text-[20px]'/>
                        </div>
                    </div>
                    <hr/>
                    <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{ContactToggle()}}><NavLink  to='/contact' className=' text-[17px] relative  h-10 ml-5 flex items-center'>CONTACT</NavLink>
                        {contactDropdawn && <ContactNavation/>}
                        </li>

                        <div>
                        <li><MdKeyboardArrowDown className=' text-[20px]'/></li>
                        </div>
                    </div>
                    <hr/>

              </ul>
    </>
  )
}

export default Modal