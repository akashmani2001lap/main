import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './Components/Day_18/provider/UserProvider'
import ProductProvider from './Components/Day_18/provider/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <UserProvider>
        <ProductProvider>
        <App />
        </ProductProvider>
     
    </UserProvider>
   
    </BrowserRouter>

)
