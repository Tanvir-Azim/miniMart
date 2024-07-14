import React from 'react'
import { useProductContax } from './ProdaxContax'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function FeatureTitle() {
    const{getFeatureData,getLatestData,getBestSellerData}=useProductContax()
    const Wraper = styled.section`
    .active{
      color:red;
    }
    `
  return (
    <>
    <Wraper>
          <div className='w-[80%] m-auto xs:mt-[131vh] sm:mt-[130vh] sm:text-[12px] xs:text-[12px] '>
            <div className='w-[60%] h-10 flex place-items-center  font-bold text-md text-gray-500  cursor-pointer '>
                <button onClick={()=>{getFeatureData()}} className='w-[100px] grid place-items-center mr-6 hover:text-black  '>FEATURED</button><div className=' h-5 w-1 bg-gray-500 '></div>
                <button onClick={()=>{getLatestData()}} className='  w-[100px] grid place-items-center hover:text-black bg-red-00 '>LATEST</button><div className=' h-5 w-1 bg-gray-500'></div>
                <button onClick={()=>{getBestSellerData()}} className='  w-[100px]  grid place-items-center ml-6 hover:text-black'>BEST SELLER</button>
        
            </div>
          </div>
          </Wraper>
    </>
  )
}

export default FeatureTitle