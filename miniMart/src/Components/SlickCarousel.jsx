import React from 'react'
//import { useProductContax } from './ProdaxContax'
//import ProductData from './ProductData'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Star from './Star';
import Slider from "react-slick";



function SlickCarousel(props) {
  const bestSellerProduct = props.miniproduct
   //const{bestSellerProduct}=useProductContax()

   const Wraper = styled.section`

   .img{
     width: 200px ;
     height: 170px;
     z-index:1
   }
   
   
   .menu{
     height: 35px;
     visibility:hidden;
     top: 100px;
     left:0 ;
     z-index: 10;
     background-color:white;
   }
   .main:hover .menu{
    
     visibility: visible;

 
   }
   button.slick-arrow.slick-next{

  
    display:  flex;
    background-color:gray;
    width:50px;
    height: 50px;
    border-radius: 100%;
    color:red;
  
   
   }
   button{
    background-color:gray;
    width:50px;
    height: 50px;
    border-radius: 100%;
  
    
   }
   `
     var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [


        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },

        {
          breakpoint:650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    //lg:place-items-center  
   
     return (
       <Wraper>
            <div className=' w-full h-[75vh] grid place-items-center bg-white xs:mt-[150px] '>
           

                 <div className=' w-[76%] h-[80px]   mx-auto  mt-20 flex flex-col items-center justify-center  '>
                  <p className='  text-3xl font-bold text-gray-800'>BEST SELLER</p>
                 <p className='  font-bold -tracking-[-2px]  text-gray-500 '>EXCEPTEUR SINT OCCAECAT</p> 
                 </div>  
       
        <div className=' w-[1200ps] h-[53vh] flex items-center justify-center lg:w-[800px] md:w-[795px] '>
             
            <Slider {...settings} className= 'w-[90%] xl:w-[1200px] sm:w-[580px]  md:w-[600px] xs:w-[400px] lg:w-[1000px] 2xl:w-[1400px]'>
                 {
                   
                   bestSellerProduct.map((curElement)=>{
                    
                     return (
                     <NavLink to={`/singleproductpage/${curElement.id}`}>
                     <div className='w-[200p] grid place-items-center'> {/* card dov air width*/}
                         
                         <div>
                         
                          
                            <ul className='main w-[200px] h-[260px]  '>{/*card air name price air div*/}
                                <li>
                                <div>
                                   <img src={curElement.image} className=' w-[230px] h-[170px]' />
                                   </div>
                                   
                                   <li className='menu'>
                                     <div className=' flex  w-full h-full items-center '>
                                     <NavLink to='/cart'>
                                         <div className=' w-[130px] h-[35px]  border-[1px] border-gray-400 flex items-center justify-evenly hover:text-red-500 '>
                                      
                                             <div>
                                               <HiOutlineShoppingBag className=' text-[20px]'/>
                                            </div>
                                         
                                             <div>
                                               <p className=' text-sm'>Add To Cart</p>
                                             </div>
                                        
                                          
                                         </div>
                                       </NavLink>
                                       <div className=' w-[70px] h-[35px] flex justify-center items-center'>
                                       <NavLink to='/heart'>
                                           <div className=' w-9 h-[35px] grid place-items-center border-[1px] border-gray-400'> <CiHeart className=' text-[23px] hover:text-red-500 '/></div>
                                       </NavLink>
                                       <NavLink to='/dtailproduct'>
                                         <div className=' w-9 h-[35px]  grid place-items-center border-[1px] border-gray-400'><FaRegEye className=' text-[20px] hover:text-red-500 '/></div>
                                         </NavLink>
                                       </div>
                                      
                                     </div>
                                   </li>
                                   <p className=' grid place-items-center w-full h-full'>{<Star className='grid place-items-center' star={curElement.stars}/>}</p>
                                   <p className=' text-[14px] grid place-items-center font-bold text-gray-500' >{curElement.name}</p>
                                   <p className=' grid place-items-center'><span className=' flex items-center'>{curElement.price}<TbCurrencyTaka/></span></p>
                               </li>
                           </ul> 
    
                         </div>
                         </div>
                         </NavLink>
                     )
                   })
                 
                 }
              </Slider>
             
                 
           </div>
             
           </div>
         
           </Wraper>
     )
   }
   
   export default SlickCarousel