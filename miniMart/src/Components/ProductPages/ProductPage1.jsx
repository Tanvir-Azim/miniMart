import React from 'react'
import Header from '../Header'
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import GridView from '../GridView';
import ListView from '../ListView';
import { useFilterContax } from '../FilterContax';

function ProductPage1() {
  const{ActiveGrid,ActiveList,gridview,listview}=useFilterContax()
  return (
    <>
        <Header/>
      <div className='w-[75%] h-[100vh] bg-red-300 mx-auto grid grid-cols-[1fr,3fr]'>
          <div className=' bg-gray-500'>
            filter Section
          </div>
          <div className=' bg-green-400'>
            <BsFillGridFill onClick={()=>{ActiveGrid()}}/>
            <BsList  onClick={()=>{ActiveList()}}/>
            {gridview&&<GridView/>}
            {listview&&<ListView/>}
          </div>
      </div>
    </>
  )
}

export default ProductPage1