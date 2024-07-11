

const ProductReducer=(state,action)=>{

    if(action.type === "ADD_JSON_DATA"){
        return{
            ...state,
            product:action.payload
        }
    }
    if(action.type==="FEATURE_VALUE"){
        return{
            ...state,
            feature:true
        }
    }

    if(action.type === "UPDATE_FEATURE_DATA"){
        const featureProduct = state.product.filter((curElement)=>{
            return curElement.featured === true
        })
        return{
            ...state,
            featureProduct:featureProduct
        }
    }

    return state;

}

export default ProductReducer
  