import React from 'react'
import CustomizeHeader1 from '../CustomizeHeader1'
import { useProductContax } from '../ProdaxContax'
import { NavLink } from 'react-router-dom'

function HomePage2() {
  const{h2Banner}=useProductContax()
  console.log(h2Banner)
  return (
<>
    <CustomizeHeader1/>
    <div className=' bg-gray-900 mt-5 w-[75%] h-[73vh] md:h-[65vh] sm:bg-slate-600 sm:h-[150vh] xs:bg-black xs:h-[250vh]  grid  grid-cols-[1.8fr,1fr,1.1fr] gap-4 md:grid-cols-[1.8fr,1fr] md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-[1fr,1fr,1fr,1fr] xs:grid-cols-1 xs:grid-rows-1    grid-rows-1 mx-auto'>
     <div className='bg-red-300 w-full h-full relative z-0'>
      <img src="/images/HomePage2/h2banner1.jpeg"  className=' w-full h-full z-0 relative'/>
      <NavLink to='/singleproductpage/thapaserialoq'><button className=' text-white absolute hover:text-red-500 top-[90%] left-[37%] z-50'>Buy Now</button></NavLink>
     </div>
     <div className=' bg-orange-900 w-full h-full relative z-0'>
        <img src="/images/HomePage2/h2banner2.jpeg"  className=' w-full h-full  z-0 '/>
        <NavLink to='/singleproductpage/thapaserialor'><button className=' text-white absolute top-[90%] left-[38%] z-50'>Buy Now</button></NavLink>
     </div>
     <div className=' flex flex-col justify-between md:hidden w-full h-full  relative '>
        <div className=' bg-slate-800 '>
          <img src="/images/HomePage2/h2banner3.jpeg"  className=' w-[325px] h-[260px] xs:w-full xs:h-full sm:w-full sm:h-full'/>
          <NavLink to='/singleproductpage/thapaserialos'><button className=' text-black absolute top-[38%] left-[37%] z-50'>Buy Now</button></NavLink>
    
        </div>

        <div className=' bg-lime-500  sm:mt-[20px] xs:mt-[20px]'>
            <img src="/images/HomePage2/h2banner4.jpeg"  className=' w-[325px] h-[260px] xs:w-full xs:h-full sm:w-full sm:h-full'/>
            <NavLink to='/singleproductpage/thapaserialot'><button className=' text-black absolute top-[90%] left-[65%] z-50'>Buy Now</button></NavLink>
    
        </div>

      </div>
    </div>


    <div className=' w-[75%] h-[45vh] mx-auto mt-8  sm:hidden xs:hidden lg:hidden xl:hidden 2xl:hidden '>
          <div className=' grid grid-cols-2 grid-rows-1 w-full h-full gap-4'>
            <div className=' bg-black h-full w-full relative z-0'>
                <img src="/images/HomePage2/h2banner3.jpeg" className=' h-full w-full '/>
                <NavLink to='/singleproductpage/thapaserialos'><button className=' text-black absolute top-[85%] left-[38%] z-50'>Buy Now</button></NavLink>
    
            </div>
            <div className=' bg-red-400 h-full w-full relative z-0'>
              <img src="/images/HomePage2/h2banner4.jpeg" className=' h-full w-full'/>
              <NavLink to='/singleproductpage/thapaserialot'><button className=' text-black absolute top-[85%] left-[63%] z-50'>Buy Now</button></NavLink>
    
            </div>
          </div>
    </div>

    </>
  )

 
}

export default HomePage2