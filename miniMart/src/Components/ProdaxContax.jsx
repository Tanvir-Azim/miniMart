import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Data from '../Product.json'
import reducer from './ProductReducer'

const initialState={
    product:[],
    featureProduct:[]
}



const AppContax=createContext()
function ProdaxContax({children}) {

    useEffect(()=>{
        dispath({
            type:"ADD_JSON_DATA",
            payload:Data
        })
    },[])
    const[state,dispath]=useReducer(reducer,initialState)
  return (
    <>
        <AppContax.Provider value={{...state}}>
            {children}
        </AppContax.Provider>
    </>
   
  )
}
export const useProductContax=()=>{
    return useContext(AppContax)
}

export default ProdaxContax