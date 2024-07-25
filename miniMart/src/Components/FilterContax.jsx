import React, { createContext, useContext, useReducer } from 'react'
import reducer from './FilterReducer'
import ListView from './ListView'


const FilterAppContax = createContext()

const initialState={
    gridview:true,
    listview:false
}
function FilterContax({children}) {

    const[state,dispatch]=useReducer(reducer,initialState)

    const ActiveGrid=()=>{
        dispatch({
            type:"ACTIVE_GRID"
        })
    }

    const ActiveList=()=>{
        dispatch({
            type:"ACTIVE_LIST"
        })
    }
  return (
    <FilterAppContax.Provider value={{...state,ActiveGrid,ActiveList}}>
        {children}
    </FilterAppContax.Provider>
  )
}

export const useFilterContax=()=>{
    return useContext(FilterAppContax)
}

export default FilterContax