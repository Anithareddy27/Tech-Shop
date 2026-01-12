import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import { SearchProvider } from './Context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <SearchProvider>
    <App />
    </SearchProvider>
    </BrowserRouter>
 
)
