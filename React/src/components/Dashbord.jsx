import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";


const Dashbord = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initial, final] = useState([{
    Rid: "",
    GroupName: "",
    Fname: "",
    CurrentLeader: "",
    Email: "",
    MobileNumber: "",
  }])
  const mydata = async () => {
    try {
      
      const response = await axios.get(`https://its-rgpv-nmum.vercel.app/Dashbord/${id}`);
    console.log(response);
    const registerData = response.data.data;
    registerData.map((object) => {
      final((info) => [
        ...info, {
          Rid: object._id,
          GroupName: object.GroupName,
          Fname: object.Fname,
          CurrentLeader: object.CurrentLeader,
          Email: object.Email,
          MobileNumber: object.MobileNumber,
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
    mydata();
  }, [])

  // const DeletAcount = async ()=>{
  //     // const response = await axios.delete(`http://127.0.0.1:4000/Dashbord/${id}`);
  // }

  return (
    <>
      <div className="flex w-full justify-between">
        <MainDashboardNav></MainDashboardNav>
        <div className="w-5/6  justify-center items-center">
          <div className="flex flex-col items-center justify-center bg-gray-900 py-4">
            <h1 className="text-lg text-gray-400 font-medium">
              Club and Socities
            </h1>
            <div className="flex flex-col mt-6">
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
                            GroupName
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Fname
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            CurrentLeader
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            MobileNumber
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Total :- {(initial.length - 1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((Personaldata) => {
                        {if(!Personaldata.Rid ) return null}
                        return (<>
                          <tbody className="bg-gray-800">
                            <tr className="bg-black bg-opacity-20">
                              <td className="pl-4">1</td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                <span className="ml-2 font-medium">{Personaldata.GroupName}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-xs">
                                {Personaldata.Fname}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-xs">
                                {Personaldata.CurrentLeader}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-xs">
                                {Personaldata.MobileNumber}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">{Personaldata.Email}</td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                <button onClick={async () => {
                                const con =  confirm("You have Confirm delete club id...")
                                try{
                                    if(con === true){
                                  await axios.delete(`https://its-rgpv-nmum.vercel.app/Dashbord/${Personaldata.Rid}`);
                                  toast("Successfully delete...")
                                  final((initial)=>
                                  initial.filter(e=>e.Rid!=Personaldata.Rid)
                                  )    
                                }}catch(error){
                                   toast("They have some error...")
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
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Dashbord;