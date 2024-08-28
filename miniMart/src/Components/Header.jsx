import React,{createContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import Modal from './Modal';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from "react-icons/md";
import PageContent from './PageContent';
import { HiOutlineLockClosed } from "react-icons/hi2";
import ProfilePage from './ProfilePage';
import { useCardContax } from './CartContax';
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { useFilterContax } from './FilterContax';
import Loding from './Loding';


function Header() {
  const{cart,wish,totalItem}=useCardContax()
  const{FastLoading,toggleHome,togglePages,toggleAbout,toggleBlog,toggleProducts,toggleContact,home,about,product,contact,pages,blog}=useFilterContax()

  const [showModal,setShowModal]=useState(false)
  const [profileDropdawn,setProfileDropdawn]=useState(false)
  



 

  const Menu = styled.section`
     li{
      
    }
    li ul{
      visibility: hidden;
      transition:all .1s linear;
      top:45px;
      
      
     
    }
  li:hover ul{
    visibility:visible;
    cursor: pointer;
    
    
    
  }

  `
    const ProductMenu = styled.section`
    li{
      
    }
    li ul{
      visibility: hidden;
      transition:all .1s linear;
      top:45px;
      
      
     
    }
  li:hover ul{
    visibility:visible;
    cursor: pointer;
    
    
    
  }

  `

const ProductMenus = styled.section`
li{
  
}
li ul{
  visibility: hidden;
  transition:all .4s ease;
  top:45px;
  
  
 
}
li:hover ul{
visibility:visible;
cursor: pointer;




}

`

  

  const tougleSwitch =()=>{
    setShowModal(!showModal)
  }

 
  return (
    <>
     <div className=' w-[100%] bg-gray-900  '>
    <div className=' w-[75%]  bg-gray-900 flex justify-between mx-auto'>
    <div className=' flex justify-between w-[400px] h-8 '>
        <div  className='flex items-center   mt-2 w-[115px] mb-2 sm:hidden xs:hidden '>
                <IoIosCall className=' mr-1 text-gray-400'/>
            <p className='text-gray-400 text-xs'>01857165115</p>
            
          </div>

        <div className=' flex items-center mt-2 w-[200px] mb-2 xs:hidden sm:hidden'>
            <MdOutlineMail className='ml-1 text-gray-400'/>
            <p className='text-gray-400 text-sm'>info@minimart.furniture</p>
            
          </div>
    </div>

    <div className=' w-[300px] sm:w-[400px] xs:w-[800px] h-8  flex justify-around'>
        <button className=' text-xs text-gray-400 font-semibold'>Oder Track</button>
        <button className=' text-xs text-gray-400 font-semibold'>My Accunt</button>
        <button className=' text-xs text-gray-400 font-semibold'>Checkour</button>
    </div>

    </div>
    </div>
    
        <div className=' w-[100%] h-16 flex justify-between items-center mini:w-[360px]'>
        

            <div className=' w-[300px] grid place-items-center lg:w-[200px] xs:w-[200px]'>
                <NavLink to='/'>
                  <h3 className=' text-3xl  font-bold '>Mini<span className=' text-red-500'>Mart</span></h3>
                </NavLink>
            </div>
            <div className='  flex mr-10  z-30'>
                <div className='flex space-x-12   font-light text-md tracking-[2px] xs:hidden sm:hidden md:hidden  lg:space-x-5 '>
                  <ul className=' flex space-x-14  font-light text-md tracking-[2px] xs:hidden sm:hidden md:hidden  lg:space-x-5  items-center'>

                    <Menu>
                       <li onClick={()=>{toggleHome()}} className={home?" text-red-500":null}><NavLink  to=''>HOME</NavLink></li>
                    </Menu>
                      <ProductMenu>
                      
                      <li onClick={()=>{toggleProducts()}} className={product?" text-red-500":null}><NavLink  to='/product'>PRODUCTS</NavLink></li>
                      </ProductMenu>

                      <ProductMenu>
                        <li onClick={toggleBlog} className={blog?" text-red-500":null}><NavLink  to='/blog'>BLOG</NavLink></li>
                      </ProductMenu>
                      <div className='  w-auto    flex items-center '>
                          <div className=''>
                          <ProductMenu>
                            <li onClick={()=>{togglePages}}><NavLink  to='' className={pages?" text-red-500":null}>PAGES </NavLink>
                            <ul className=' w-[1300px] h-[450px] left-[150px]  absolute  mt-10  bg-white'><PageContent/></ul>

                          </li>
                          </ProductMenu>
                          </div>
                          <div><MdKeyboardArrowDown/></div>
                      
                      </div>
                      <li onClick={()=>{toggleAbout()}} className={about?" text-red-500":null}><NavLink  to='/about'>ABOUT</NavLink></li>

                      <ProductMenus>
                        <li onClick={()=>{toggleContact()}} className={contact?" text-red-500":null}><NavLink  to='/contact'>CONTACT</NavLink></li>
                      </ProductMenus>
                  </ul>
                </div>

                <div className=' flex justify-around items-center w-[193px] h-12  md:w-[193px] xs:w-[170px] sm:w-[193px]  xs:ml-10]'>
                  <NavLink to=''>
                      <MdOutlineMenu className=' w-7 h-7  lg:hidden xl:hidden 2xl:hidden z-50' onClick={()=>{tougleSwitch()}}/>
                  </NavLink>

                  <NavLink to='/search'>
                      <IoSearchOutline className=' w-7 h-7 ' />
                  </NavLink>
                    <NavLink to='/heart'>
                      <div className=' h-auto w-auto flex relative'><CiHeart className=' w-8 h-8'/><span className=' bg-red-500 text-white w-4 h-4 grid place-items-center rounded-full text-[11px] absolute top-3 left-5'>{wish.length}</span></div>
                    </NavLink>
                  <NavLink to='/cart'>
                  <div className=' h-auto w-auto flex relative'><HiOutlineShoppingBag className=' w-7 h-7'/><span className=' bg-red-500 text-white w-4 h-4 grid place-items-center rounded-full text-[11px] absolute top-3 left-5'>{totalItem}</span></div>
                  </NavLink>
                  <NavLink to='/'>
                      <div className=' relative'><HiOutlineLockClosed className=' w-7 h-7  ' onClick={()=>{setProfileDropdawn(true)}}/>
                        {profileDropdawn && <ProfilePage getData={setProfileDropdawn}/>}
                       
                      </div>
                  </NavLink>
                
                  
                </div>
            </div>
           

        </div>
       
      {showModal?<Modal/>:null}
    
    </>
  )
}

export default Header