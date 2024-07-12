import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Data from '../Product.json'
import reducer from './ProductReducer'
import FeatureProduct from './FeatureProduct'

const initialState={
    product:[],
    featureProduct:[],
    feature:true,
}



const AppContax=createContext()
function ProdaxContax({children}) {

 
    const[state,dispath]=useReducer(reducer,initialState)

    useEffect(()=>{
        dispath({
            type:"ADD_JSON_DATA",
            payload:Data
        })
    },[])

const getFeatureData=()=>{
  dispath({
    type:"FEATURE_VALUE"
  })
}

useEffect(()=>{
    dispath({
        type:"UPDATE_FEATURE_DATA",
        payload:Data
    })
},[])

console.log(FeatureProduct)
  return (
    <>
        <AppContax.Provider value={{...state,getFeatureData,FeatureProduct}}>
            {children}
        </AppContax.Provider>
    </>
   
  )
}
export const useProductContax=()=>{
    return useContext(AppContax)
}

export default ProdaxContax