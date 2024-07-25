import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProdaxContax from './Components/ProdaxContax.jsx'
import Text from './Text.jsx'
import CartContax from './Components/CartContax.jsx'
import FilterContax from './Components/FilterContax.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProdaxContax>
        <FilterContax>
          <CartContax>
            <App />
         </CartContax>
       </FilterContax>
    </ProdaxContax>
    
  </React.StrictMode>,
)
