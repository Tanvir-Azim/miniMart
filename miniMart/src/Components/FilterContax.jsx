import React, { createContext, useContext, useEffect, useReducer,useState } from 'react'
import reducer from './FilterReducer'
import { useProductContax } from './ProdaxContax'
import FilterColor from './FilterColor'
import { AiFillLayout } from 'react-icons/ai'
import Header from './Header'

const FilterAppContax = createContext()

const initialState={
    gridview:true,
    listview:false,
    filterProduct:[],
    all_product:[],
    searchProduct:[],
    shorting_value:'',
        filters: {
        text:"",
        category:"",
        company:"",
        color:"",
        maxPrice:0,
        price:0,
        minPrice:0,
        searchResult:'',
        
        
    },
    home:true,
    about:false,
    contact:false,
    product:false,
    blog:false,
    pages:false,

    
}
function FilterContax({children}) {
    const[loading,isLoading]=useState(false)
    const{product}=useProductContax()


    const[state,dispatch]=useReducer(reducer,initialState)
    
  const [values, setValues] = useState(0)

  const handleChange=(e)=>{
    const value = e.target.value
    setValues(value)
    dispatch({
        type:"HANDEL_RANGE",
        payload:values
    })
  }

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
    
    useEffect(()=>{ 
        dispatch({
            type:'LOAD_PRODUCT',
            payload:product,

        })
    },[product])

    const handelTable=(e)=>{
        const event = e.target.value
        dispatch({
            type:"HANDEL_TABLE",
            payload:event
        })
      
      }
      useEffect(()=>{
            dispatch({
                type:"GET_COLORS"
            })
      },[])

      const findColor=(e)=>{
        const value=e.target.value
         dispatch({
             type:"FIND_COLOR",
             payload:value
          })
   }

    
const handelCompany=(e)=>{
    const value=e.target.value
    dispatch({
        type:"HANDEL_COMPANY",
        payload:value
    })


}

const handelSeleteBox=(e)=>{
    const value=e.target.value
    dispatch({
        type:"HANDEL_SELLETEBOX",
        payload:value
    })

}

useEffect(()=>{
    dispatch({
        type:"NEW_FILTER",
        payload:product
    })
},[product,state.filters])

useEffect(()=>{
    dispatch({
        type:"UPDATE_SHORTIG",
        payload:product
    })
},[product,state.shorting_value])

useEffect(()=>{
    dispatch({
        type:"GET_MAX_PRICE",
        payload:product
    })
    isLoading(true)
    setTimeout(()=>{
        isLoading(false)
    },2000)
    
    
},[product])

const getInputValue=(e)=>{
    const value=e.target.value
    dispatch({
        type:"SET_SEARCH_VALUE",
        payload:value
    })
}

const getSearchValue=()=>{
    dispatch({
        type:"setAllData",
        payload:product
     })
}


const toggleHome=()=>{
    dispatch({
        type:'HOME'
    })
}
const toggleAbout=()=>{
    dispatch({
        type:'ABOUT'
    })
}
const toggleBlog=()=>{
    dispatch({
        type:'BLOG'
    })
}
const togglePages=()=>{
    dispatch({
        type:'PAGES'
    })
}

const toggleContact=()=>{
    dispatch({
        type:'CONTACT'
    })

}
const toggleProducts=()=>{
    dispatch({
        type:'PRODUCTS'
    })
}


    
  return (
    <FilterAppContax.Provider value={{...state,ActiveGrid,ActiveList,handelTable,FilterColor,findColor,handelCompany,handelSeleteBox,handleChange,values,getInputValue,getSearchValue,loading,toggleHome,togglePages,toggleAbout,toggleBlog,toggleProducts,toggleContact}}>
        {children}
    </FilterAppContax.Provider>
  )
}

export const useFilterContax=()=>{

    return useContext(FilterAppContax)
}

export default FilterContax