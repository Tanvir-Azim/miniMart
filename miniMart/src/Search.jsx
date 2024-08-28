import React from 'react'
import Header from './Components/Header'
import { useFilterContax } from './Components/FilterContax'
import SearchProduct from './Components/SearchProduct'


function Search() {
  const{getInputValue,getSearchValue,filters:{category,searchResult},searchProduct}=useFilterContax()
  console.log(searchResult)


  return (
    <>
    <Header/>
    <div className=' w-full h-full'>
        <div className=' w-[80%] mx-auto'>
          <div className=' flex place-content-center w-[60%] mx-auto'>
            <input type='text' placeholder='Search Product...' onChange={getInputValue} className='w-[82%] h-10 border-[1px] border-red-500 outline-none rounded-l-[3px] p-4' />
            <button onClick={()=>{getSearchValue()}} className=' cursor-pointer text-lg w-[105px] h-[40px] p-1 grid place-content-center bg-red-500 text-white rounded-r-[3px] hover:bg-white hover:text-red-500 hover:border-red-500 hover:border-[1px] hover:border-l-0 placeholder:p-7'>Search</button>
          </div>
        </div>

        <div>
            <SearchProduct product={searchProduct}/>
         
        </div>
    </div>

    </>
  )
}

export default Search