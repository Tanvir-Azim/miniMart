import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProdaxContax from './Components/ProdaxContax.jsx'
import Text from './Text.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProdaxContax>
       <App />
    </ProdaxContax>
    
  </React.StrictMode>,
)
