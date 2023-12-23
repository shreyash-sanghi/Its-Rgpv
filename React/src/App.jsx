import React,{useState,useEffect} from 'react'
import Navbar from './components/MiainFile'
import axios from 'axios';
// import Eventadd from '../../React/EventX/src/components/Eventadd'

const App = () => {
  axios.defaults.withCredentials = true;
  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
