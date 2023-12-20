import React, { useEffect, useState, useRef  } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Axios from 'axios';
import emailjs from '@emailjs/browser';
import MainDashboardNav from "./MainDashboardNav";
import axios from "axios";

const Register = ()=>{
const navigate = useNavigate();
const {id} = useParams();
const form = useRef();

const [initial,final] = useState({
   GroupName:"",
   Fname:"",
   CurrentLeader:"",
   Email:"",
   MobileNumber:"",
   Password:"",
   Cpassword:"",
   secretkey:"",
})

const RegData = (event)=>{
    const {name,value} =  event.target;
    final((data)=>{
        return{
            ...data,
            [name]:value
        }
    })
}
// const form = useRef();
   const RegSubmit = async (event)=>{
    event.preventDefault();
      const { GroupName,Fname,CurrentLeader, Email, MobileNumber,Password,Cpassword,secretkey} = initial;
      try {
        const response = await Axios.post(`http://its-rgpv-2m34.vercel.app/registration/${id}`,{
            GroupName,Fname,CurrentLeader, Email, MobileNumber,Password,Cpassword,secretkey
         })
         alert("Club have sucessfully register..")
         navigate(`/maindashboard/${id}`)
         emailjs.sendForm(process.env.ServiceId,process.env.TemplateId, form.current, process.env.PublicKey )
          .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
        );
    } catch (error) {
      if(error.response.request.status === 401){
        navigate('/errorpage');
    }
    else{
      alert("They have some error please register again...")
    }
    } 
}

 const getrequest = async()=>{
  try {
   const resp =  await Axios.get(`http://its-rgpv-2m34.vercel.app/registration/${id}`);
  } catch (error) {
    if(error.response.request.status === 401){
      navigate('/errorpage');
  }
  else{
  alert(error);
  }
  }
 }
  useEffect(()=>{
    getrequest();
  },[])

    return(
        <>
      <div className="flex w-full justify-between">
            <MainDashboardNav></MainDashboardNav>
            <div className="w-5/6  justify-center items-center">
        <form ref={form}
        className="px-16 py-16 event-form text-white"
        onSubmit={RegSubmit}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text" // Change the input type to "date"
            name="GroupName"
            value={initial.GroupName}
            onChange={RegData}
            id="floating_date"
            className="block py-2.5 px-0 w-full text-sm event-input bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="floating_date"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Group Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Fname"
            value={initial.Fname}
            onChange={RegData}
            id="floating_password"
            className=" event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Founder Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="CurrentLeader"
            value={initial.CurrentLeader}
            onChange={RegData}
            id="floating_repeat_password"
            className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Current Leader
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="Email"
              value={initial.Email}
              onChange={RegData}
              id="floating_first_name"
              className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="MobileNumber"
              value={initial.MobileNumber}
              onChange={RegData}
              id="floating_last_name"
              className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Number
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Password"
              value={initial.Password}
              onChange={RegData}
              id="floating_first_name"
              className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Cpassword"
              value={initial.Cpassword}
              onChange={RegData}
              id="floating_last_name"
              className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Conform Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="secretkey"
              value={initial.secretkey}
              onChange={RegData}
              id="floating_last_name"
              className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Secret Key
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="message"
              value={"Hello Hy name is shreyash jain Currentaly i am persuing BTech from UIT RGPV"}
              id="floating_last_name"
              className="hidden event-input  py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
          </div>
        </div>
        <input type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

        </input>
      </form>
      </div>
      {/* <div className="px-12 flex g-4">
       {renderTask}
      </div> */}
            </div>
        </>
    )
}
export default Register;