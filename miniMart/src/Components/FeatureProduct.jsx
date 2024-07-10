import React from 'react'
import { useProductContax } from './ProdaxContax'
function FeatureProduct() {
    const{product}=useProductContax()
    console.log(product)
  return (
    <>
            <div className='w-[60%] h-10 flex'>
                <div className=' bg-fuchsia-400 w-[100px] grid items-center place-items-center'>FEATURED</div><div></div>
                <div className=' bg-green-300 w-[100px] grid place-items-center'>LATEST</div>
                <div className=' bg-red-950 w-[100px] grid place-items-center'>BEST SELLER</div>
        
        </div>
    </>
  )
}

export default FeatureProduct