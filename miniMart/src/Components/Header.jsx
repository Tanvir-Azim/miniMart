import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";

function Header() {
  return (
    <>
        <div className=' w-[100%]  bg-gray-300 h-16 flex justify-between items-center mini:w-[360px]'>

            <div className=' w-[300px] grid place-items-center'>
                <h3 className=' text-3xl  font-bold'>mini<span className=' text-red-500'>Mart</span></h3>
            </div>
            <div className='  bg-red-300 flex mr-10 '>
                <div className='flex space-x-12 font-light text-md tracking-[2px] xs:hidden '>
                    <NavLink  to='/'>HOME</NavLink>
                    <NavLink  to='/product'>PRODUCTS</NavLink>
                    <NavLink  to='/blog'>BLOG</NavLink>
                    <NavLink  to='/pages'>PAGES</NavLink>
                    <NavLink  to='/about'>ABOUT</NavLink>
                    <NavLink  to='/contact'>CONTACT</NavLink>
                </div>

                <div className='  bg-red-800 flex justify-around items-center mini: w-full'>
                  <IoSearchOutline className=' w-8 h-8 ' />
                  <CiHeart className=' w-8 h-8'/>
                  <HiOutlineShoppingBag className=' w-8 h-8'/>
                  <MdOutlineMenu className=' w-8 h-8'/>
                </div>
            </div>
           

        </div>
    </>
  )
}

export default Header