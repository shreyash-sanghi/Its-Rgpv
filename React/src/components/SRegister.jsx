import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate ,NavLink} from "react-router-dom";
import Axios from 'axios';

const SRegister =()=>{
const navigate = useNavigate();
const [initial,final] = useState({
        Name:"",
        Email:"",
        Year:"",
        Branch:"",
        MobileNumber:"",
        StuPassword:"",
        College:"",
        Interest:""
})
const StuData = (event)=>{
    const {name,value} = event.target;
    console.log(name,value);
  final((finalValue)=>{
    return{
        ...finalValue,
        [name]:value
    }
  })
}


const StuReg = async (event)=>{
    event.preventDefault();
    const { Name, Email, MobileNumber,Year,Branch,StuPassword,Interest,College} = initial;
      try {
        const response = await Axios.post("http://its-rgpv-nmum.vercel.app/Sregister",{
          Name, Email, MobileNumber,Year,Branch,StuPassword,Interest,College
         })
         toast("Successfully registered...")
         setTimeout(()=>{
           navigate("/")
         },2000)
    }catch (error){
      toast("Student have already registered....")
      navigate("/")
    } 
}
return (
  <>
     <form onSubmit={StuReg} method="POST" className="min-w-screen  stu-form xl:h-[100vh] flex items-center justify-center px-5 py-5">
      <div
        className="rounded-3xl student-div shadow-xl w-full  overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex ">
          {/* <div className="hidden md:block w-1/2 studentreg-gif  py-10 px-10"></div> */}
          <div className="w-full pt-6 md:w-full  form-div-container px-5 md:px-10">
            <div className="text-center mb-4">
              <h1 className="font-bold text-3xl">STUDENT REGISTER</h1>
              <p className="mt-4">Enter your information to register</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Full Name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-lg"></i>
                    </div>
                    <input
                      type="text" name="Name" onChange={StuData} autocomplete="off"
                      className="w-full -ml-10 pl-2 py-1 pr-2 text-gray-800 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Phone Number
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline  text-lg"></i>
                    </div>
                    <input
                      type="text" name="MobileNumber" onChange={StuData} autocomplete="off"
                      className="w-full -ml-10 text-gray-800  pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Batch Year
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-lg"></i>
                    </div>
                    <input
                      type="text" name="Year"
                      className="w-full -ml-10 pl-2 py-1 pr-2 text-gray-800 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="2022-2026"
                      onChange={StuData} autocomplete="off"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Branch
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline  text-lg"></i>
                    </div>
                    <input
                      type="text" name="Branch"
                      className="w-full -ml-10 text-gray-800  pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Computer Science Engineering"
                      onChange={StuData} autocomplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label for="" className="text-xs  font-semibold px-1">
                    Email Address
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-lg"></i>
                    </div>
                    <input
                      type="email" name="Email" onChange={StuData} autocomplete="off"
                      className="w-full -ml-10 pl-2 pr-2 py-1 text-gray-800  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-4 mb-5">
                  <div className="radio-group">
                    <label for="">
                      College Name : 
                      <input className="ml-4"
                        type="radio"
                        name="College"
                        value="uitrgpc"
                        onChange={StuData} autocomplete="off"
                      />
                      <span className="radio-custom"></span>
                      UIT Rgpv
                    </label>
                    <label>
                      <input className="ml-4"
                        type="radio"
                        name="College"
                        value="soitrgpv"
                        onChange={StuData} autocomplete="off"
                      />
                      <span className="radio-custom"></span>
                      SOIT Rgpv
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                  Interest, Skills, Hobbies
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-lg"></i>
                    </div>
                    <textarea
                      type="text"
                      name="Interest"
                      onChange={StuData} autocomplete="off"
                      className="w-full text-gray-800  -ml-10 pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Enter your Hobbies or Skills or Interest"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label for="" className="text-xs font-semibold px-1">
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-lg"></i>
                    </div>
                    <input
                      type="password"
                       name="StuPassword"
                      className="w-full -ml-10 pl-2 text-gray-800  pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Enter Strong Password"
                      onChange={StuData} autocomplete="off"
                  
                    />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <input type="submit" value={"Register"} className="block w-full max-w-xs mx-auto register-btn-student focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"/>
                   
                  
                </div>
              </div>
              <div className="flex -mx-3 text-center">
                <div className="w-full px-3 mb-5">
                <NavLink to='/' className="block w-full max-w-xs mx-auto register-btn-student2 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    Back to home<span className="ml-2 "><i className="ri-home-8-line"></i></span>
                  </NavLink>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <ToastContainer/>
  </>
);
}
export default SRegister;

