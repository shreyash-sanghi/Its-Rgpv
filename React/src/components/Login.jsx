import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from "react-router-dom";
import Axios from 'axios';
import './Login.css'


const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [initialerror,finalerror] =useState("");

   const alertid = document.getElementById('LoginContoll') ;


    const loginData = async (e) => {
      e.preventDefault();
      
       const Email = email;
       const Password = pass;
        try {
           Axios.create({
              baseURL:"http://its-rgpv-nmum.vercel.app",
              withCredentials:true
          })  

          const response = await Axios.post("http://its-rgpv-nmum.vercel.app/login",{
               Email,Password
              },
              {
                withCredentials: true,
                credentials: 'include',
                headers: {
                  'Access-Control-Allow-Origin':"http://its-rgpv-nmum.vercel.app",
                  'Access-Control-Allow-Credentials':true,
                   'Content-Type': 'application/json'    
                }
              }
              )
          const token = response.data.token;
          console.log(response);
          Axios.defaults.headers.common["Authorization"] = token;
          const Email2 = response.data.Email;
          const id = response.data.id;
          const HostEmail1 = response.data.HostEmail1;
          const HostEmail2 = response.data.HostEmail2;

          if(Email2 ===HostEmail1 || Email2 === HostEmail2 ){
            navigate(`/maindashboard/${id}`);
          }
          else{
          navigate(`/personalpage/${id}`)
          }
      } 
      catch (error) {
         toast(error.message)
          navigate(`/login`)
         } 
      }
  return (
    <>
    <div className='justify-center align-middle m-auto pt-1.5 w-full hidden h-10 z-20 mt-0 bg-green-500' id='LoginContoll'>{initialerror}</div>
    <div className="login">
    <div src="assets/img/login-bg.png" alt="image" className="login__bg"/>
    <form   method="post" onSubmit={loginData} className="login__form">
       <h1 className="login__title">Login</h1>

       <div className="login__inputs">
          <div className="login__box">
             <input type="email"
                autoComplete='off'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}} name="email"
             placeholder="Email ID" required className="login__input"/>
             <i className="ri-mail-fill"></i>
          </div>

          <div className="login__box">
             <input type="password"
             autoComplete='off'
                  name="password"
                  value={pass}
                  onChange={(e) => {setPass(e.target.value);}}
             placeholder="Password" required className="login__input"/>
             <i className="ri-lock-2-fill"></i>
          </div>
       </div>

       <div className="login__check">
          <div className="login__check-box">
             <input type="checkbox" className="login__check-input" id="user-check"/>
             <label for="user-check" className="login__check-label">Remember me</label>
          </div>

          <a href="#" className="login__forgot">Forgot Password?</a>
       </div>

       <button type="submit" className="login__button">Login</button>

       <div className="login__register">
          Don't have an account? <a href="#">Register</a>
       </div>
    </form>
    </div>
    <ToastContainer />
 </>
  )
}

export default Login