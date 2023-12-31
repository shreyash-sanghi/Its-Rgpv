import React, { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
// import Router from './Router';
import SRegister from './SRegister';
import Cookie from "js-cookie";
import logo from '../assets/logo6.png'

function Navbar() {
  
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginmodal,setLoginModal] = useState(false)
  const [registermodal,setRegisterModal] = useState(false)

  const toggleLogin = () => {
    setLoginModal(!loginmodal)
  }
  const toggleRegister = () => {
    setRegisterModal(!registermodal)
  }
  if(loginmodal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <>

  
  

   <div className="px-12 pt-6 navbar flex flex-col justify-center">
      <nav className="px-4 py-4 flex justify-between items-center  relative">
      <a className="text-4xl font-bold leading-none" href="#">
          <img src={logo} alt="" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
            <h1 className='text-2xl text-white'><i className="ri-menu-3-line"></i></h1>
          </button>
        </div>
        <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
        <li>
            <NavLink to="/" id="home">Home</NavLink>
          </li>
          <li>
          <NavLink to="/Update" className="events">New Events</NavLink>
          </li>  
          <li>
          <NavLink to="/start-ups" className="events">Start-ups</NavLink>
          </li>   
          <li>
          <NavLink to="/photogallery" className="events">Photo Gallery</NavLink>
          </li>
          
          <li>
          <NavLink to="/request" id="login" className="login">Request Events</NavLink>
          </li>
          
        </ul>
        <NavLink className="hidden btnnav lg:inline-block cursor-pointer lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-white font-bold transition duration-200" to='/sregister'>Register</NavLink>
        <NavLink className="hidden btnnav lg:inline-block cursor-pointer py-2 px-6 text-sm text-white font-bold transition duration-200" to='/login'>Login</NavLink>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-black opacity-25" onClick={toggleMenu}></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6  max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
          <div className="flex items-center mb-8">
          <a className="text-4xl mr-auto font-bold leading-none" href="#">
          <h1 className='logoname'>UIT - SOIT</h1>
        </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <h1 className='text-2xl'><i className="ri-close-fill"></i></h1>
            </button>
          </div>
          <div >
          <ul className='flex flex-col'>
          <li className='my-3'>
            <NavLink to="/" className="events">Home</NavLink>
          </li>
          <li className='my-3'>
          <NavLink to="/Update" className="events">New Events</NavLink>
          </li>   
          <li className='my-3'>
            <NavLink to="/start-ups" className="events">Start-ups</NavLink>
          </li>
          <li className='my-3'>
            <NavLink to="/photogallery" className="events">Photo Gallery</NavLink>
          </li>
          <li className='my-3'>
            <NavLink to="/request" className="events">Request</NavLink>
          </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <NavLink className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-slate-700 hover-bg-gray-100 rounded-xl " to="/sregister">Register</NavLink>
              <NavLink className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover-bg-blue-700 rounded-xl" to="/login">Login</NavLink>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
    {loginmodal && (
      <Login/>
    )}
    {registermodal && (
      <SRegister/>
    )}
  </>
    
  );
}

export default Navbar;