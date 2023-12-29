import React, { useState,useRef } from "react";
import {useNavigate ,NavLink} from "react-router-dom";
import Axios from 'axios';
import emailjs from '@emailjs/browser';

const SRegister =()=>{
const navigate = useNavigate();
const form = useRef();
const [initial,final] = useState({
        Name:"",
        CompEmail:"",
        Year:"",
        Branch:"",
        MobileNumber:"",
        ComAbout:"",
        College:"",
        ComDiscribe:"",
        Suggestion:""
})
const StuData = (event)=>{
    const {name,value} = event.target;
  final((finalValue)=>{
    return{
        ...finalValue,
        [name]:value
    }
  })
}


const StuReg = async (event)=>{
    event.preventDefault();
    const date =  new Date();
    const PostDate = `${date} `;
    const { Name, CompEmail, MobileNumber,Year,Branch,ComDiscribe,ComAbout,College,Suggestion} = initial;

      try {
        const response = await Axios.post(`${process.env.Server_Path}/Complaint`,{
            Name, CompEmail, MobileNumber,Year,Branch,ComDiscribe,ComAbout,College,Suggestion,PostDate
         })
         alert("Your Complain have been send sucessfully...")
         navigate("/")
         emailjs.sendForm(process.env.ServiceId,process.env.TemplateId, form.current, process.env.PublicKey)
         .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       }
       );
    }catch (error){
      alert(error)
      navigate("/")
    } 
}

return (
  <>
     <form ref={form} onSubmit={StuReg} method="POST" className="min-w-screen mt-36 xl:h-[100vh] flex items-center justify-center px-5 py-5">
      <div
        className="rounded-3xl student-div shadow-xl w-full  overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex ">
          {/* <div className="hidden md:block w-1/2 studentreg-gif  py-10 px-10"></div> */}
          <div className="w-full pt-6 md:w-full  form-div-container px-5 md:px-10">
            <div className="text-center mb-4">
              <h1 className="font-bold text-3xl">Complaint Form</h1>
              {/* <p className="mt-4">Enter your information to register</p> */}
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
                      placeholder="Vedansh Jain"
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
                      placeholder="8415984253"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Semister
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-lg"></i>
                    </div>
                    <input
                      type="text" name="Year"
                      className="w-full -ml-10 pl-2 py-1 pr-2 text-gray-800 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="2nd"
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
                      <i className="mdi mdi-CompEmail-outline text-lg"></i>
                    </div>
                    <input
                      type="email" name="CompEmail" onChange={StuData} autocomplete="off"
                      className="w-full -ml-10 pl-2 pr-2 py-1 text-gray-800  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="vedansh.rgpv.cse@gmail.com"
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
                        value="UIT RGPV"
                        onChange={StuData} autocomplete="off"
                      />
                      <span className="radio-custom"></span>
                      UIT Rgpv
                    </label>
                    <label>
                      <input className="ml-4"
                        type="radio"
                        name="College"
                        value="SOIT RGPV"
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
                   Complaint Recarding 
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-CompEmail-outline text-lg"></i>
                    </div>
                    <input
                      type="text"
                      name="ComAbout"
                      onChange={StuData} autocomplete="off"
                      className="w-full text-gray-800  -ml-10 pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Enter your Complaint"
                    />
                  </div>
                </div>
              </div>     
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                   Complaint
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-CompEmail-outline text-lg"></i>
                    </div>
                    <textarea
                      type="text"
                      name="ComDiscribe"
                      onChange={StuData} autocomplete="off"
                      className="w-full h-[7rem] sm:h-[10rem] text-gray-800  -ml-10 pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Discribe your Complain"
                    />
                  </div>
                </div>
              </div>     
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                  Suggestion
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-CompEmail-outline text-lg"></i>
                    </div>
                    <textarea
                      type="text"
                      name="Suggestion"
                      onChange={StuData} autocomplete="off"
                      className="w-full h-[7rem] sm:h-[10rem] text-gray-800  -ml-10 pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Your Suggestion"
                    />
                  </div>
                </div>
              </div>
              {/* Host email */}
              <input value = {"itsrgpv@gmail.com"} name="Email" className="hidden"></input> 

               <div className="flex justify-center items-center w-full">
              <div className="flex ">
                <div className="w-full px-3 mb-5">
                  <input type="submit" value={"Send"} className="block w-full max-w-xs mx-auto register-btn-student focus:bg-indigo-700 text-white rounded-lg px-10 py-3 font-semibold"/>
                   
                  
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
      </div>
      
    </form>
  </>
);
}
export default SRegister;

