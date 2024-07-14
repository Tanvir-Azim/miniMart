

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
            feature:true,
            bestSeller:false,
            latest:false
        }
    }

    if(action.type==="LATEST_DATA"){
        return{
            ...state,
            feature:false,
            bestSeller:false,
            latest:true
        }
    }
    if(action.type === "BEST_SELLER"){
        return{
            ...state,
            feature:false,
            latest:false,
            bestSeller:true
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

    if(action.type === "UPDATE_LATEST_DATA"){
        const latestProduct = state.product.filter((curElement)=>{
            return curElement.latest === true  
        })

        return{
            ...state,
            latestProduct:latestProduct
        }
    
        
    }

    if(action.type === "BEST_SELLER_PRODUCT"){
        const bestSeller=state.product.filter((curElement)=>{
            return curElement.bestseller === true
        })
        console.log(bestSeller)

        return{
            ...state,
            bestSellerProduct:bestSeller
        }
    }


    return state;

}

export default ProductReducer
  