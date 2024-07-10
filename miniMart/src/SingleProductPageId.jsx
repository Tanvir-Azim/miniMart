import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from './data.json'
//import Data from './Product.json'

function SingleProductPageId() {
const [data,setData]=useState([])



  
 
  const{id}=useParams()

  const singleproduct = Data.filter((curElement)=>{
    return curElement.id === id
  })

    
  
   
  
   const miniImg=singleproduct.map((curElement)=>{
    return( curElement.images[1])
   })

   
       
   

   useEffect(()=>{
    setData(singleproduct)
   },[])


    
   
  return (
    <>
      {
        miniImg.map((curElement)=>{
          return <img src={curElement.url}/>
        })
      }
      
      <img src="/images/HomePage1/h1feature2.jpg"/>
    <img src='/images/HomePage1/h1feature2mini1.jpg'/>
    <img src='/images/HomePage1/h1feature2mini2.jpg'/>
    <img src='/images/HomePage1/h1feature2mini3.jpg'/>
    </>
  )
}

export default SingleProductPageId