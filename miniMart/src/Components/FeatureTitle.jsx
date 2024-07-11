import React from 'react'
import { useProductContax } from './ProdaxContax'

function FeatureTitle() {
    const{getFeatureData}=useProductContax()
  return (
    <>
          <div className='w-[80%] m-auto xs:mt-[131vh] sm:mt-[130vh] sm:text-[12px] xs:text-[12px]  '>
            <div className='w-[60%] h-10 flex place-items-center  font-bold text-md text-gray-500  cursor-pointer '>
                <div onClick={()=>{getFeatureData()}} className='  w-[100px] grid items-center place-items-center mr-6 hover:text-black'>FEATURED</div><div className=' h-5 w-1 bg-gray-500 '></div>
                <button className='  w-[100px] grid place-items-center hover:text-black '>LATEST</button><div className=' h-5 w-1 bg-gray-500'></div>
                <button className='  w-[100px]  grid place-items-center ml-6 hover:text-black'>BEST SELLER</button>
        
            </div>
          </div>
    </>
  )
}

export default FeatureTitle