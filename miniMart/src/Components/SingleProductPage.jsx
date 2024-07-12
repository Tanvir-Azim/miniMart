import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContax } from './ProdaxContax'
import Star from './Star'
import { PiShareNetworkFill } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function SingleProductPage() {
  const {featureProduct}=useProductContax()
  const{id}=useParams()
  const singleproduct = featureProduct.filter((curElement)=>{
    return curElement.id === id
  })

  const a = singleproduct.map((curElement)=>{
    return(curElement.images[0])

    })
    

  const b = singleproduct.map((curElement)=>{
    return(curElement.images[1])
  })
  const c = singleproduct.map((curElement)=>{
    return(curElement.images[2])
  })
  const d = singleproduct.map((curElement)=>{
    return(curElement.images[3])
  })

  const e = singleproduct.map((curElement)=>{
    return(curElement.images[3])
  })
  const f = singleproduct.map((curElement)=>{
    return(curElement.images[4])
  })

  const g = singleproduct.map((curElement)=>{
    return(curElement.images[4])
  })
//img section filter

  const gimg = f.map((curElement)=>{
    return curElement.url
  })
  
  const fimg = f.map((curElement)=>{
    return curElement.url
  })
  
  const eimg = e.map((curElement)=>{
    return curElement.url
  })
console.log(eimg[0])

const aimg = a.map((curElement)=>{
  return curElement.url
})
const bimg = b.map((curElement)=>{
  return curElement.url
})
const cimg = c.map((curElement)=>{
  return curElement.url
})
const dimg = d.map((curElement)=>{
  return curElement.url
})

  return (
    <>
     <div className=' w-[100%] h-[90vh] b-red-300 grid grid-cols-2 grid-rows-1'>
        <di className='bg-white'>
        <div  className=' grid place-items-center'><img src={aimg[0]} className=' w-[530px]'/></div>
        <div className=' flex justify-between'>
          <img src={bimg[0]} className=' w-[100px] h-[80px]'/>
          <img src={cimg[0]} className=' w-[100px] h-[80px]'/>
          <img src={dimg[0]} className=' w-[100px] h-[80px]'/> 
          <img src={gimg[0]} className=' w-[100px] h-[80px]'/>
          <img src={fimg[0]} className=' w-[100px] h-[80px]'/>
          <img src={eimg[0]} className=' w-[100px] h-[80px]'/>
        

        
         
        </div> 
        </di>
        <div className=' bg-orange-30'>
          <div className=' w-[70%] h-full bg-white '>
            {
              singleproduct.map((curElement)=>{
              const {id,name,price,reviews,share,stars,stock,like,description,comment,colors,category ,description2,discount}=curElement
              return(
                <>
                <div className=' '>
                    <div className=' w-[200px] h-[50px] text-gray-500 flex items-center '><h1 className='hover:text-red-500 cursor-pointer'>{category}</h1> {'>'}Product</div>
                   </div>
                    <h1 className=' text-3xl uppercase tracking-wider font-semibold '>{name}</h1>
                    <div className=' mt-3'>
                     <p className=' flex'><Star star={stars}/><span className=' ml-2 text-gray-500'>Reviews({reviews})</span></p>
                    </div>

                    <div className=' w-[90%] h-14  flex items-center text-gray-500 cursor-pointer'>
                        <div className=' flex w-[100px] h-full items-center '><PiShareNetworkFill className=' text-[19px] mr-2'/> <p className=' text-[13px]'>SHARE</p></div>
                        <div className=' flex w-[100px] h-full items-center  justify-center'><MdCompareArrows className=' text-[19px] mr-2'/> <p className=' text-[13px]'>COMPARE</p></div>
                        <NavLink to='/heart'>
                          <div className=' flex w-[150px] h-full items-center  justify-center'><IoMdHeart className=' text-[19px] mr-2'/><p className=' text-[13px]'>TO WISH LIST</p> </div>
                        </NavLink>
                        
                    </div>
                    <hr className=' text-gray-500'/>
                    <div className=' w-full h-32 flex items-center'>
                      <p className=' text-gray-500'>{description}</p>
                    </div>

                    <div className=' w-full h-32 flex items-center'>
                      <p className=' text-gray-500'>{description2}</p>
                    </div>
                    <hr className=' text-gray-500'/>

                    <div className=' w-full h-[60px] flex items-center'>
                      <div className=' flex items-center'>
                            <TbCurrencyTaka className=' text-3xl'/>
                            <p className='  text-2xl'>{price}</p>
                            <p className=' line-through text-[22px] font-thin ml-2 text-gray-500'>{discount}</p>

                      </div>
                    </div>

                    <div className='flex w-[400px] h-[100px]  items-center justify-around'>

                      QTY 
                      <div className=' flex items-center bg-white border-[1px] border-gray-500 cursor-pointer'>
                          <div className=' w-10 h-8  grid place-items-center border-r-2 border-gray-400'><FaMinus/></div>
                          <div className=' w-10 h-8  grid place-items-center'>01</div>
                          <div className='w-10 h-8  grid place-items-center border-l-2 border-gray-400 '><FaPlus/></div>

                      </div>
                      <div>
                         <NavLink to='/cart'><button className=' w-40 h-9 bg-red-400 font-bold text-white rounded-3xl hover:bg-black'> ADD TO CART</button></NavLink> 
                      </div>
                    </div>
                </>
              )

    })
            }
          </div>
        </div>
     </div>
       
    </>
   
  )
}

export default SingleProductPage