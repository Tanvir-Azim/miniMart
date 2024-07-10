

const ProductReducer=(state,action)=>{

    if(action.type === "ADD_JSON_DATA"){
        return{
            ...state,
            product:action.payload
        }
    }

    return state;

}

export default ProductReducer
  