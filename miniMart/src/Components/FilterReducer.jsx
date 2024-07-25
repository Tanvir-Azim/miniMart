import React from 'react'

function FilterReducer(state,action) {
    if(action.type === "ACTIVE_GRID"){
        return{
            ...state,
            gridview:true,
            listview:false
        }
    }
    if(action.type === "ACTIVE_LIST"){
        return{
            ...state,
            gridview:false,
            listview:true,
        }
    }
  return state
}

export default FilterReducer