import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useFilterContax } from './FilterContax'
import { IoMdClose } from "react-icons/io";


function Modal() {
  const{toggleHome,togglePages,toggleAbout,toggleBlog,toggleProducts,toggleContact,home,about,product,contact,pages,blog}=useFilterContax()



  return (
    
    <> 

              <ul className=''>

                  <div className=' w-full h-full flex items-center'>

                      <li onClick={()=>{toggleHome()}} className={home?'text-red-500 text-[17px] relative  h-10 ml-5 flex items-center':'text-[17px] relative  h-10 ml-5 flex items-center'}><NavLink  to='/'>HOME</NavLink></li>
                      
                   </div>
                    <hr/>
                    <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{toggleProducts()}}><NavLink  to='/product' className={product?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500':'text-[17px] relative  h-10 ml-5 flex items-center'}>PRODUCTS</NavLink>
                        </li>
                    </div>
                    
                    <hr/>
                    <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{toggleBlog()}} ><NavLink  to='/blog' className={blog?' text-red-500 text-[17px] relative  h-10 ml-5 flex items-center':'text-[17px] relative  h-10 ml-5 flex items-center'}> BLOG</NavLink></li>
                    </div>
                    <hr/>

                     <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{togglePages()}}><NavLink  to='' className={pages?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500':'ext-[17px] relative  h-10 ml-5 flex items-center'}>PAGES</NavLink></li>

                    </div>
                    <hr/>
                    <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{toggleAbout()}}><NavLink  to='/about' className={about?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500':'text-[17px] relative  h-10 ml-5 flex items-center'}>ABOUT</NavLink></li>
                    </div>
                    <hr/>
                      <div className=' w-full h-full flex items-center'>
                        <li onClick={()=>{toggleContact()}}><NavLink  to='/contact' className={contact?' text-[17px] relative  h-10 ml-5 flex items-center text-red-500':' text-[17px] relative  h-10 ml-5 flex items-center'}>CONTACT</NavLink></li>
                      </div>
                    <hr/>

              </ul>
            
    </>
  )
}

export default Modal