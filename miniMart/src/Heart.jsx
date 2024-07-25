import React from 'react'
import { useCardContax } from './Components/CartContax'
import Header from './Components/Header'
import { FaTrash } from "react-icons/fa";
import InStock from './Components/InStock';
import OutOfStock from './Components/OutOfStock';
import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Empty from './Components/Empty';

function Heart() {
  const {wish,WistToCart,RemoveWish}=useCardContax()
  const quantity = 1
  if(wish.length==[]){
    return(
      <>

      <Header/>
      <div className=' text-2xl flex place-items-center justify-center w-full h-[600px]'>
          No Wish In Item
      </div>
      </>
    )
  }
  
  return (
    <>
    <Header/>

    <div className=' w-[75%] h-full mt-5 mx-auto '>

      {
      wish.map((curElement)=>{
          return (
          
              <div className=' w-full h-[100px] flex justify-around items-center border-[1px] border-gray-300 mt-5'>
                <div>
                  <img src={curElement.image} className=' w-[80px] h-[80px] xs:w-[70px] xs:h-[70px] border-[1px] border-gray-300 '/>
                </div>

                <div className=' w-[250px] sm:w-[140px] xs:w-[100px]'>
                  <p className=' font-bold text-base sm:text-sm xs:text-xs'>{curElement.name}</p>
                 {curElement.available?<InStock/>:<OutOfStock/>}
                  
                </div>
                <div className='flex items-center '>
                  <p className=' font-bold text-base text-red-500 xs:text-xs'>{curElement.price}</p>
                  <TbCurrencyTaka className=' text-red-500 text-lg xs:text-xs'/>
                </div>

                <div>

                <NavLink to='/cart'><button className=' grid place-items-center w-[130px] h-[35px] xs:w-[90px] xs:h-[25px] text-base text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-[1px] border-red-500 xs:text-xs' onClick={()=>{WistToCart(curElement,quantity,curElement.colors[0])}}>ADD TO CART</button></NavLink> 
                </div>

                <div>
                    <FaTrash className=' hover:text-red-500 cursor-pointer' onClick={()=>{RemoveWish(curElement.id)}}/>
                </div>
              </div>
           
          )

      })
    
    }
    </div>
    {wish==[]&&<Empty/>}
    </>
  )
}

export default Heart
