import React from 'react'
import Header from './Components/Header'
import { useFilterContax } from './Components/FilterContax'
import SearchProduct from './Components/SearchProduct'
import { NavLink } from 'react-router-dom'


function Search() {
  const{getInputValue,getSearchValue,filters:{category,searchResult},searchProduct}=useFilterContax()
  console.log(searchResult)


  return (
    <>
    <div className=' w-full h-full'>

        <div>
            <SearchProduct product={searchProduct}/> 
        </div>
    </div>

    </>
  )
}

export default Search