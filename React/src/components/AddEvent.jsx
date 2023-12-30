import React, { useState,useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const AddEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useRef();
  const [initial, final] = useState({
   
    EventName: "",
    Discreption: "",
    Place: "",
    EDate: "",
    Time: "",
    Name: "",
    MobileNumber: "",
    RegLink: "",
    EventBanner: "",
    ReqEmail: "",
    Password: "",
  })
 const [initialhost1 ,finalhost1] =useState("");
 const [initialhost2 ,finalhost2] =useState("");
 const [initialfile,finalfile] = useState();


  const EventData = (e) => {
    const image = e.target.files;
    const { name, value } = e.target;

    if (name === "") {
      return {
        EventName: initial.EventName,
        Discreption: initial.Discreption,
        Place: initial.Place,
        EDate: initial.EDate,
        Time: initial.Time,
        Name: initial.HostName,
        MobileNumber: initial.MobileNumber,
        RegLink: initial.Prize,
        EventBanner: image[0],
        ReqEmail: initial.ReqEmail,
        Password: initial.Password,
      }
    }
    else {
      final((Edata) => {
        return {
          ...Edata,
          [name]: value
        }
      })
    }
  }
  const myform = document.getElementById("form");
  const EventSave = async (event) => {
    event.preventDefault();
    try {
    const formdata = new FormData(myform);
    const { EventBanner,EventName, Discreption, Place, ReqEmail, EDate, Password, Time, Name,MobileNumber,RegLink } = initial;
    formdata.append('file',initialfile);
    formdata.append('data', {EventBanner,EventName, Discreption, Place, ReqEmail, EDate, Password, Time, Name,MobileNumber,RegLink} );
      const response = await axios.post(`https://its-rgpv-nmum.vercel.app/uplodeData`
      ,formdata,
      { headers: {'Content-Type': 'multipart/form-data'}})

      const HostEmail1 = response.data.HostEmail1;
      const HostEmail2 = response.data.HostEmail2;
      finalhost1(HostEmail1);
      finalhost2(HostEmail2);
      if (ReqEmail === HostEmail1 || ReqEmail ===  HostEmail2  ) {
        toast("Event have successfully add...")
        navigate(`/maindashboard/${id}`)
      } else {
        toast("Event Request have been send successfully after verification it will added and show in your Dashboard ")
        setTimeout(()=>{ navigate(`/PersonalPage/${id}`)},5000)
        try {
        emailjs.sendForm(process.env.ServiceId,process.env.TemplateId, form.current, process.env.PublicKey)  
        }catch (error) {
          toast(error)
         }
      }
    } catch (error) {
      toast("Please Enter Correct Email and Password ");
      if (ReqEmail === initialhost1 || ReqEmail === initialhost2 ) {
        navigate(`/AddEvent/${id}`)
      } else {
        navigate(`/AddEvent/${id}`)
      }
    }
  }
  return (
      <>
        <form
          className="px-16 py-16 event-form text-white"
          onSubmit={EventSave}
          ref={form}
          id="form"
        >
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="text" // Change the input type to "date"
              name="EventName"
              value={initial.EventName}
              onChange={EventData}
              id="floating_date"
              className="block py-2.5 px-0 w-full text-sm event-input bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              autoComplete="off"
            />
            <label
              for="floating_date"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name of the event
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Discreption"
              value={initial.Discreption}
              onChange={EventData}
              autoComplete="off"
              id="floating_password"
              className=" event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_password"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event Description
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Place"
              value={initial.Place}
              onChange={EventData}
              autoComplete="off"
              id="floating_repeat_password"
              className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Venue
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="EDate"
                value={initial.EDate}
                onChange={EventData}
                autoComplete="off"
                id="floating_first_name"
                className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="time"
                name="Time"
                value={initial.Time}
                onChange={EventData}
                autoComplete="off"
                id="floating_last_name"
                className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Time
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="MobileNumber"
                value={initial.MobileNumber}
                onChange={EventData}
                autoComplete="off"
                id="floating_first_name"
                className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="RegLink"
                value={initial.RegLink}
                onChange={EventData}
                autoComplete="off"
                id="floating_last_name"
                className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Registration Link
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Name"
                value={initial.Name}
                onChange={EventData}
                autoComplete="off"
                id="event-input floating_phone"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 event-input focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Hosted By
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="file"
                onChange={(ev)=>{finalfile(ev.target.files[0])}}
                className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                for="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Event Banner (Landscape)
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="ReqEmail"
                value={initial.ReqEmail}
                onChange={EventData}
                autoComplete="off"
                id="event-input floating_phone"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 event-input focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Register Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="Password"
                value={initial.Password}
                //   accept="image/*"
                autoComplete="off"
                onChange={EventData}
                id="floating_company"
                className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <input value={"itsrgpv@gmail.com"} name="Email" className="hidden"></input>
              <label
                for="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
          </div>
          <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          </input>

        </form>
        <ToastContainer/>
      </>
  )
}
export default AddEvent;