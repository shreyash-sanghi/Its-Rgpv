import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";
import {ref,getStorage ,getDownloadURL} from "firebase/storage";

const MainDashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navId = document.getElementById('NavLinkId');

  const [initial, final] = useState([{
    id: "",
    EventName: "",
    Discreption: "",
    Place: "",
    EDate: "",
    Time: "",
    HostName: "",
    Eligibility: "",
    Prize: "",
    EventBanner: "",
    Email: "",
    Image:""
  }])
  const [initial_url,final_url] = useState("");
  const getdata = async () => {
    try {
      const response = await axios.get(`https://its-rgpv-nmum.vercel.app/MainDashbord/${id}`);
      toast("Successfully...");
      const requestData = response.data.request;
      requestData.map((object) => {
        console.log(object.image);
        const storage = getStorage();
        const imgref = ref(storage,`files/${object.image}`);
        getDownloadURL(imgref)
        .then((url) => {
          final_url(url)
        })
      final((info) => [
        ...info, {
          id: object._id,
          EventName: object.EventName,
          Discreption: object.Discreption,
          Place: object.Place,
          EDate: object.EDate,
          Time: object.Time,
          Name: object.Name,
          RegLink: object.RegLink,
          EventBanner: object.EventBanner,
          Email: object.ReqEmail,
          MobileNumber: object.MobileNumber,
          Image: initial_url,
        }
      ])
    })
  } catch (error) {
  if(error.response.request.status === 401){
      navigate('/errorpage');
  }
  else{
    toast("They have some error please Login again..");
  }
  }
  }
  useEffect(() => {
    getdata();
  }, [])

  return (
    <>
      <div className="flex w-full justify-between ">
        <MainDashboardNav></MainDashboardNav>
      

        <div className=" w-5/6  justify-center items-center   ">
          <div className="flex  whitespace-nowrap overflow-auto scrollbar-hide flex-col items-center justify-center bg-gray-900 py-4">
            <h1 className="text-lg text-gray-400 font-medium">
              Event Request
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
                            className="px-5 py-3 text-left tracking-wider"
                          >
                            EventBanner
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            EventName
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            HostName
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            EDate
                          </th>
                          <th
                            scope="col"
                            className="px-8 py-3 text-left tracking-wider"
                          >
                            Email
                          </th>
              

                          <th
                            scope="col"
                            className="px-1 py-3 text-left tracking-wider"
                          >
                            Total :- {(initial.length - 1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((reqData) => {
              
                        if(!reqData.id) return null;
                        return (<>
                          <tbody className="bg-gray-800">
                            <tr className="bg-black bg-opacity-20 align-middle my-auto ">
                              <td className="pl-4">1</td>
                              <td className="px-2 py-4 whitespace-nowrap">
                                <img  src={reqData.Image} className="w-20 h-10"/> </td>
                              <td className="flex px-4 py-4 whitespace-nowrap">
                                <span className="ml-1 pt-2 font-medium">{reqData.EventName}</span></td>
                              <td className="px-4 py-4 whitespace-nowrap">{reqData.Name}</td>
                              <td className="px-4 py-4 whitespace-nowrap text-xs">{reqData.EDate}</td>
                              <td className="px-4 py-4 whitespace-nowrap">{reqData.Email}</td>
                              <td className="flex px-2 py-4 whitespace-nowrap">
                                <Link to={`/VerifyEvent/${reqData.id}/${id}/`}>
                                  <svg
                                    className="mx-2 w-4 fill-current text-green-600 cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </Link>

                                <button id="deletebutton" onClick={async () => {
                                  try{
                                  const response = await axios.delete(`https://its-rgpv-nmum.vercel.app/Request/${reqData.id}`);
                                 toast("Request have been delete...")
                                  final((initial)=>
                                    initial.filter(e=>e.id!=reqData.id)
                                  )
                                  }catch(error){
                                    console.log(error);
                                  }
                                }}>
                                  <svg
                                    className="mx-2 w-4 fill-current text-red-500 curs"
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
export default MainDashboard;
