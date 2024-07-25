import React, { createContext, useContext, useReducer,useEffect } from 'react'
import reducer from './CartReducer'


const CardContax=createContext()

const getLocalStorage=()=>{
 let updateCart= localStorage.getItem('cartdata')
 if(updateCart==[]){
  return []
 }else{
  return JSON.parse(updateCart)
 }
}

const getLocalStorageWish=()=>{
  let updateCart= localStorage.getItem('wishdata')
  if(updateCart==[]){
   return []
  }else{
   return JSON.parse(updateCart)
  }
 }
const initialState={
    //cart:[],
    cart:getLocalStorage(),
    wish:getLocalStorageWish(),
    viewProduct:[],
}
function CartContax({children}) {

    const[state,dispatch]=useReducer(reducer,initialState)

    const AddToCart=(product,quantity,color)=>{
        dispatch({
            type:"ADD_TO_CART",
            payload:{product,quantity,color}
        })
        
    }
    const AddCartData=(product,quantity,color)=>{
      dispatch({
        type:"ADD_CART",
        payload:{product,quantity,color}
    })
    }
    const AddToWish=(product)=>{
      dispatch({
        type:"ADD_To_Wish",
        payload:product
    })
    }
    const viewButton=(product)=>{
      dispatch({
        type:"VIEW_BUTTON",
        payload:product
    })
    }

    const WistToCart=(product,quantity,color)=>{
      dispatch({
        type:"WISH_TO_CART",
        payload:{product,quantity,color}
    })

    }

    const RemoveWish=(id)=>{
      dispatch({
        type:"REMOVE_WISH",
        payload:id
    })
    }

    const RemoveCartData=(id)=>{
      dispatch({
        type:"REMOVE_CART",
        payload:id
    })
    }

    useEffect(()=>{
        localStorage.setItem('cartdata',JSON.stringify(state.cart))
    },[state.cart])

    useEffect(()=>{
      localStorage.setItem('wishdata',JSON.stringify(state.wish))
  },[state.wish])

  const Increment=(id)=>{
    dispatch({
      type:"INCREMENT",
      payload:id
    })
    
  }

  const Decrement=(id)=>{
    dispatch({
      type:"DECREMENT",
      payload:id
    })
  }
  return (
    <CardContax.Provider value={{...state,AddToCart,AddCartData,AddToWish,viewButton,WistToCart,RemoveWish,RemoveCartData,Increment,Decrement}}>
            {children}
    </CardContax.Provider>
  )

}


export const useCardContax=()=>{
    return useContext(CardContax)
  }


export default CartContax