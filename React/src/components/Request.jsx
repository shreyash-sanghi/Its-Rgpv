import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './Request.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Request = () => {
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
    ReqEmail: "",
  })
  const [initialfile, finalfile] = useState();
  

  const ReqData = (item) => {
    const { name, value } = item.target;
    final((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }

  const myform = document.getElementById("form");
  const ReqSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData(myform);
    const { ReqEmail, EventName, Discreption, Place, EDate, Time, Name, MobileNumber, RegLink } = initial;
    try {
      formdata.append('file', initialfile);
      formdata.append('data', { ReqEmail, EventName, Discreption, Place, EDate, Time, Name, MobileNumber, RegLink});
      const response = await axios.post(`http://its-rgpv-nmum.vercel.app/request`, formdata,
      )
      if (response.status === 202) {
        toast("Thank You for request after verification it will we a up comming event..")
        setTimeout(()=>{navigate(`/`)},4000)
        
        try {
          emailjs.sendForm(process.env.ServiceId,process.env.TemplateId, form.current, process.env.PublicKey)
        } catch (error) {
          toast(error)
        }
      }
    } catch (error) {
      toast(error.message);
    }
  }
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>REQUEST FOR</span>
                  <span>AN EVENT</span>
                </div>
                <div className="app-contact">CONTACT US : 9129872138</div>
                <NavLink to='/' className="ml-0 mt-3 max-[10rem] mx-auto border-2  text-white rounded-lg px-2 py-1 font-medium">
                  Back to home<span className="ml-2 "><i className="ri-home-8-line"></i></span>
                </NavLink>
              </div>
              <form id="form" ref={form} onSubmit={ReqSubmit}>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" autocomplete="off" placeholder="EventName *" name="EventName" onChange={ReqData} />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" autocomplete="off" type="date" placeholder="EDate *" name="EDate" onChange={ReqData} />
                    </div>

                    <div className="app-form-group">
                      <input className="app-form-control" autocomplete="off" type="time" placeholder="Time *" name="Time" onChange={ReqData} />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" autocomplete="off" placeholder="Place *" name="Place" onChange={ReqData} />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" autocomplete="off" placeholder="Descreption *" name="Discreption" onChange={ReqData} />
                    </div>
       
                    <div className="app-form-group">
                      <input className="app-form-control" autocomplete="off" type="text" placeholder="Registration Link" name="RegLink" onChange={ReqData} />
                    </div>
                    <div className="">
                      <input className="app-form-control" autocomplete="off" type="text" placeholder="Hosted By*" name="Name" onChange={ReqData} />
                    </div>
                    <div className="">
                      <input className="app-form-control" autocomplete="off" type="email" placeholder="ReqEmail *" name="ReqEmail" onChange={ReqData} />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" autocomplete="off" placeholder="Mobile Number *" name="MobileNumber" onChange={ReqData} />
                    </div>
                    <div className="app-form-group my-5 border-2 align-middle m-auto flex flex-col justify-center border-white">
                      <label
                  for="floating_password"
                  className=" text-white justify-center flex"
                  >
                       Uplode Event Banner
                         </label>
                      <input className="app-form-control px-2 " autocomplete="off" type="file"   placeholder="EventBanner"  onChange={(ev) => { finalfile(ev.target.files[0]) }}></input>
                    </div>
                    <input name="Email" value={"itsrgpv@gmail.com"} className="hidden"></input>
                    <div className="app-form-group buttons">
                      <input type="submit" value={"SEND"} className="app-form-button"></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Request;