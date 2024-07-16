import React from 'react'
import Star from './Star'
import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink } from 'react-router-dom';



function MiniProduct({miniFeatured,hotSale, topRate,saleProduct}) {
   

  return (
    <div className='w-[75%]  h-[65vh] grid grid-cols-4 grid-rows-1 mt-8 mx-auto md:grid-cols-2 md:grid-rows-[1fr 1fr] md:h-[125vh] lg:grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-[1fr 1fr] sm:h-[120vh] xs:grid-cols-1 xs:grid-rows-4 xs:h-[210vh]'>
                     
        <div className=' '>
                <h1 className=' font-bold text-xl text-gray-700'>Hot Sale</h1>
            <div className=' w-full h-[400px] flex flex-col items-center'>
                {
                    hotSale.map((curElement)=>{
                        return(
                            <>
                            <NavLink to={`/singleproductpage/${curElement.id}`}>
                               
                             
                          
                                <div className=' w-full h-[100px]  mt-5 flex justify-around'>
                                    <img src={curElement.image} className=' h-[90px] w-[90px]'/>
                                    <div className=' flex flex-col  justify-center w-[150px] ml-5 '>
                                    <p className=' text-xs hover:text-red-500'>{curElement.name}</p>
                                    <p className=' text-xs mt-1'><Star star={curElement.stars}/></p>
                                   
                                    <div className=' flex mt-1'>
                                    <TbCurrencyTaka className=' text-sm'/>
                                    <p className='  text-xs'>{curElement.price}</p>
                                    <p className=' line-through text-[10px] font-thin ml-2 text-gray-500'>{curElement.discount}</p>
                                    </div>
                                </div>

                             </div>
                             </NavLink>
                            

                             </>   
                         
                        )
                    })
                }
            </div>
        </div>

        <div className=' '>
                <h1 className=' font-bold text-xl text-gray-700'>Featured Products</h1>
            <div className=' w-full h-[400px] flex flex-col items-center'>
                {
                    miniFeatured.map((curElement)=>{
                        return(
                            <>
                            <NavLink to={`/singleproductpage/${curElement.id}`}>
                               
                             
                          
                                <div className=' w-full h-[100px]  mt-5 flex justify-around'>
                                    <img src={curElement.image} className=' h-[90px] w-[90px]'/>
                                    <div className=' flex flex-col  justify-center w-[150px] ml-5 '>
                                    <p className=' text-xs hover:text-red-500'>{curElement.name}</p>
                                    <p className=' text-xs mt-1'><Star star={curElement.star}/></p>
                                   
                                    <div className=' flex mt-1'>
                                    <TbCurrencyTaka className=' text-sm'/>
                                    <p className='  text-xs'>{curElement.price}</p>
                                    <p className=' line-through text-[10px] font-thin ml-2 text-gray-500'>{curElement.discount}</p>
                                    </div>
                                </div>

                             </div>
                             </NavLink>
                            

                             </>   
                         
                        )
                    })
                }
          </div>
        </div>
       
        <div className=''>
                <h1 className=' font-bold text-xl text-gray-700'>Sale Products</h1>
            <div className=' w-full h-[400px] flex flex-col items-center'>
                {
                    saleProduct.map((curElement)=>{
                        return(
                            <>
                            <NavLink to={`/singleproductpage/${curElement.id}`}>
                               
                             
                          
                                <div className=' w-full h-[100px]  mt-5 flex justify-around'>
                                    <img src={curElement.image} className=' h-[90px] w-[90px]'/>
                                    <div className=' flex flex-col  justify-center w-[150px] ml-5 '>
                                    <p className=' text-xs hover:text-red-500'>{curElement.name}</p>
                                    <p className=' text-xs mt-1'><Star star={curElement.star}/></p>
                                   
                                    <div className=' flex mt-1'>
                                    <TbCurrencyTaka className=' text-sm'/>
                                    <p className='  text-xs'>{curElement.price}</p>
                                    <p className=' line-through text-[10px] font-thin ml-2 text-gray-500'>{curElement.discount}</p>
                                    </div>
                                </div>

                             </div>
                             </NavLink>
                            

                             </>   
                         
                        )
                    })
                }
            </div>
            </div>
            <div className='  lg:hidden'>
                <h1 className=' font-bold text-xl text-gray-700'>Top Rated Products</h1>
            <div className=' w-full h-[400px] flex flex-col items-center'>
                {
                    topRate.map((curElement)=>{
                        return(
                            <>
                            <NavLink to={`/singleproductpage/${curElement.id}`}>
                               
                             
                          
                                <div className=' w-full h-[100px]  mt-5 flex justify-around'>
                                    <img src={curElement.image} className=' h-[90px] w-[90px]'/>
                                    <div className=' flex flex-col  justify-center w-[150px] ml-5 '>
                                    <p className=' text-xs hover:text-red-500'>{curElement.name}</p>
                                    <p className=' text-xs mt-1'><Star star={curElement.star}/></p>
                                   
                                    <div className=' flex mt-1'>
                                    <TbCurrencyTaka className=' text-sm'/>
                                    <p className='  text-xs'>{curElement.price}</p>
                                    <p className=' line-through text-[10px] font-thin ml-2 text-gray-500'>{curElement.discount}</p>
                                    </div>
                                </div>

                             </div>
                             </NavLink>
                            

                             </>   
                         
                        )
                    })
                }
            </div>
            </div>
    </div>
  )
}

export default MiniProduct