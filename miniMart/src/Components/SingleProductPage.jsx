import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContax } from './ProdaxContax'

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
console.log(aimg)
  return (
    <>
      <img src={aimg}/>
      <img src={bimg}/>
      <img src={cimg}/>
      <img src={dimg}/>
   
    </>
  )
}

export default SingleProductPage