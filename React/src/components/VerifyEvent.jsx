import axios from 'axios';
import React, { useState, useEffect,useRef } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const VarifyEvent = () => {
    const { id, Mid } = useParams();
    const navigate = useNavigate();
    const form = useRef();

    const [initial1, initial2] = useState({
        EventName: "",
        Discreption: "",
        Place: "",
        EDate: "",
        Time: "",
        Name: "",
        RegLink: "",
        Email: "",
        Image:""
    })

    const [ini, fin] = useState("");

    const EventData = (event) => {
        const { name, value } = event.target;
        fin((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }
   



    const getdata = async () => {
        const response = await axios.get(`http://its-rgpv-backend.vercel.app/VerifyEvent/${id}`);
        const resdata = response.data;
        console.log(resdata);
        initial2((info) => {
            info.EventName = resdata.EventName
            info.Discreption = resdata.Discreption
            info.Place = resdata.Place
            info.EDate = resdata.EDate
            info.Time = resdata.Time
            info.Name = resdata.Name
            info.RegLink = resdata.RegLink
            info.Email = resdata.Email
            info.Image = resdata.Image
  
        })
        fin(initial1);
    }
    
    useEffect(() => {
        getdata();
    }, [])

    const PostEvent = async(e)=>{
        try {
        e.preventDefault();
        const {EventName,Discreption,Place,EDate,Time,Name,RegLink,Image, Email} = ini;
        const ReqEmail = Email;
        const responce = await axios.post(`http://its-rgpv-backend.vercel.app/VerifyEvent/${id}`,{
            EventName,Discreption,Place,EDate,Time,Name,RegLink,Image, ReqEmail
        })
           await axios.delete(`http://its-rgpv-backend.vercel.app/Request/${id}`);
          navigate(`/maindashboard/${Mid}`)
          emailjs.sendForm('service_edl04xe','template_nok8by1', form.current, 'fA8kcfAFIvcziEYcA')
          .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    } catch (error) {
        alert(error);    
    }
    }

    return (
        <>
            <form
                className="px-16 py-16 event-form text-white"
                onSubmit={PostEvent} ref={form}
            >
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text" // Change the input type to "date"
                        name="EventName"
                        value={ini.EventName}
                        onChange={EventData}
                        id="floating_date"
                        className="block py-2.5 px-0 w-full text-sm event-input bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                    />
                    <label
                        for="floating_date"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enent Name
                    </label>
                </div>
         

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="Discreption"
                        value={ini.Discreption}
                        onChange={EventData}
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
                        value={ini.Place}
                        onChange={EventData}
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
                            value={ini.EDate}
                            onChange={EventData}
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
                            value={ini.Time}
                            onChange={EventData}
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
                    <div className="relative mt-14 z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="Name"
                            value={ini.Name}
                            onChange={EventData}
                            id="floating_last_name"
                            className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Name
                        </label>
                    </div>
                    <div className="hidden relative z-0 w-full mb-6 group">
                        <input 
                            type="text"
                            name="Image"
                            value={ini.Image}
                            onChange={EventData}
                            id="event-input floating_phone"
                            className="py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 event-input focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="floating_phone"
                            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            EventBanner
                        </label>
                    </div>
                    <div className="px-2 py-4 whitespace-nowrap">
                   <img  src={`http://its-rgpv-backend.vercel.app/images/`+ini.Image} className="w-[13rem] h-[12rem]"/> </div>
                   </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="RegLink"
                            value={ini.RegLink}
                            onChange={EventData}
                            id="event-input floating_phone"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 event-input focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="floating_phone"
                            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Registration Link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="Email"
                            value={ini.Email}
                            // accept="image/*"
                            onChange={EventData}
                            id="floating_company"
                            className="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Email
                        </label>
                    </div>
                    {/* <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="message"
                            value={ini.Discreption}
                            // accept="image/*"
                            onChange={EventData}
                            id="floating_company"
                            className="hidden event-input py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="floating_company"
                            className="hidden peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Message
                        </label>
                    </div> */}
                </div>
           
                
                 <div className='flex justify-between'>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit 
                </button>


                <button id="deletebutton" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={async () => {
                                  const response = await axios.delete(`http://its-rgpv-backend.vercel.app/Request/${id}`);
                                 toast("Request have been delete...")
                              setTimeout(()=>{
                              navigate(`/maindashboard/${Mid}`)
                              },2000)
                                }}>
                                   Delete  
                                </button>   
                    </div>   
            </form>
             

            {/* <div className="px-12 flex g-4">
                {renderTask}
            </div> */}
        </>
    )
}
export default VarifyEvent;