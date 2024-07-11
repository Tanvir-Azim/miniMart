import React from 'react'
import { useProductContax } from './ProdaxContax'
//import ProductData from './ProductData'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
function FeatureProduct() {
   const{featureProduct}=useProductContax()
   console.log(featureProduct)

const Wraper = styled.section`

.img{
  width: 200px ;
  height: 170px;
  background-color: green;
  z-index:1
}


.menu{
  height: 30px;
  background-color: gold;
  visibility:hidden;
  top: 100px;
  left:0 ;
  z-index: 10;
}
.main:hover .menu{
 
  visibility: visible;
}
`

 //lg:place-items-center  

  return (
    <Wraper>
   
      <div className='w-[77%] h-[95vh] bg-sky-300 md:h-[215vh] sm:h-[215vh] xs:h-[215vh] lg:w-[85%] grid grid-cols-4 grid-rows-2 gap-4 m-auto mt-10  sm:mt-[20px] md:grid-cols-2 md:grid-rows-[170px 170px  ] sm:grid-cols-2 sm:grid-rows-[170px 170px 170px 170px  ] xs:grid-cols-2 xs:grid-rows-[170px 170px 170px 170px] lg:gap-20 '>
    

              {
                
                featureProduct.map((curElement)=>{
                 
                  return (
                  <NavLink to={`/singleproductpage/${curElement.id}`}>
                  <div className='w-[200p] grid place-items-center bg-red-300'>
                      
                      <div>
                      
                       
                        <ul className='main w-[200px] h-[280px] bg-green-300'>
                             <li>
                                <img src={curElement.image} className='img w-[200px] h-[170px] xl:w-[170px] md:w-[130px] lg:w-[50px] lg:h-[60px]'/>
                                
                                <li className='menu'>dsfs</li>
                                <p className=' text-[14px] grid place-items-center font-bold text-gray-500' >{curElement.name}</p>
                                <p className=' grid place-items-center'>{curElement.price}</p>
                            </li>
                        </ul> 
 
                      </div>
                      </div>
                      </NavLink>
                  )
                })
              
              }
          
              
        </div>
          
        
        </Wraper>
  )
}

export default FeatureProduct