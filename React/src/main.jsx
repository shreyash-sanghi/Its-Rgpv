import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'; 
import App from './App.jsx'
import './index.css'


{/* <meta http-equiv="Content-Security-Policy" content="upgrad
e-insecure-requests"></meta> */}

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <App/>
   </BrowserRouter>

)
