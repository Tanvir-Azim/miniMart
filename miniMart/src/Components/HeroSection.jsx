import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wraper = styled.section`

.carousel .control-dots .dot{
 
  
  width: 16px;
  height: 16px;
  border: 2px solid black;
  background: none;

}
`

function HeroSection() {
  return (
    <>

      <Wraper>

        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={0.1}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          className=' absolute z-10'       
                >
              
                    <div>
                        <img src='/images/hero1.jpeg'/>
                    
                    </div>
                   <div>
                      <img src='/images/homepage/hero2.jpeg'/>
                 
                    </div>
                  <div>
                      <img src='/images/hero3.jpeg'/>
                    
                  </div>
                 
                </Carousel>
              </Wraper> 
                  <NavLink to='/product'>
                    <div className=' relative w-[170px] h-10  left-[720px] z-20 top-[480px]  grid place-content-center hover:text-red-500  xl:left-[660px] xl:top-[400px]  lg:top-[320px] lg:left-[450px]  md:left-[370px] md:top-[240px] sm:left-[330px] sm:top-[200px]  xs:left-[105px] xs:top-[100px] '>
                      <button className=' w-full h-full flex place-items-center hover:text-red-500 font-bold text-gray-500'> <div className=' w-7 h-[1px] bg-black mr-2'></div>  SHOP NOW <div className=' w-7 h-[1px] bg-black ml-2'></div></button>
                    </div>
                  </NavLink>

                   
    </>
  )
}

export default HeroSection