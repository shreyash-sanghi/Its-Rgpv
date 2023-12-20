import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams} from "react-router-dom";
import PersonalPageNav from "./PersonalPageNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [initial, final] = useState([{
    id: "",
    EventName: "",
    HostName: "",
    Discreption: "",
    EDate: "",
    Place: "",
    Time: ""
  }]);

  const getdata = async () => {
    try {
      
      const response = await Axios.get(`http://127.0.0.1:4000/PersonalPage/${id}`,
      {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': "http://localhost:4000",
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json'
        }
      }
    );
    const data = response.data.data;
    data.map((object) => {
      final((sdata) => [
        ...sdata, {
          id: object._id,
          EventName: object.EventName,
          HostName: object.Name,
          Discreption: object.Discreption,
          EDate: object.EDate,
          Place:object. Place,
          Time: object.Time
        }

      ])
    })

  } catch (error) {
  if(error.response.request.status === 401){
      navigate('/errorpage');
  }
  else{
 alert(error);
  }
  }
  }
  useEffect(() => {
    getdata();
  }, [])

  //for Edit
  const Editdata = (e)=>{
    console.log(e.id)
  }
   


  <button id="AddEventButton2" style={{ border: "2px solid white", padding: "10px" }}><Link to={`/AddEvent/${id}`}>Add Event</Link></button>

  return (
    <>
      <div className="flex w-full justify-between">
        <PersonalPageNav/>
          {/* <div  id="slider" className=" lg:justify-center lg:m-auto  flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"> */}
          <div className="w-5/6  justify-center items-center">
            <div className="flex flex-col items-center justify-center bg-gray-900 py-4">
              <div className="-my-2 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block  sm:px-6 lg:px-8">
                  <div className="shadow sm:rounded-lg">
                    <table className=" text-sm text-gray-400">
                      <thead className="bg-gray-800 text-xs uppercase font-medium">
                        <tr>
                          <th></th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                           EVENT NAME
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                           HOST NAM
                          </th>
             
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            EVENT DATE
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                           EVENT PLACE
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            EVENT TIME
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Total :- {(initial.length-1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((info) => {
                        if(!info.id) return null;
                        return(<>
                      <tbody className="bg-gray-800">
                        <tr className="bg-black bg-opacity-20">
                          <td className="pl-4">1</td>
                          <td className="flex px-6 py-4 whitespace-nowrap">
                            <span className="ml-2 font-medium">{info.EventName}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {info.HostName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {info.EDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{info.Place}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{info.Time}</td>
                          <td className="flex px-6 py-4 whitespace-nowrap cursor-pointer">
                          <i className="ri-edit-2-fill mx-4" onClick={async()=>{
                              navigate(`/edit/${info.id}`)
                             }}></i>
                          <button style={{padding:'5px'}} onClick={
                            async()=>{
                              
                          const con =  confirm("You have conform delete a event... ");
                           try {
                            if(con === true){
                            await Axios.delete(`http://127.0.0.1:4000/PersonalPage/${info.id}`);
                            toast("Successfully delete...")
                            final((initial)=>
                            initial.filter(e=>e.id != info.id)
                             )
                            }
                           }catch (error) {
                            toast("They have some error")
                            }
                             }}>
                            <svg
                              className="w-4 fill-current text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      </>)
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <ToastContainer/>
    </>
  )
}
export default PersonalPage;