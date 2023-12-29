import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";


const StudentDashbord = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initial, final] = useState([{
    Rid: "",
    Name: "",
    Email: "",
    MobileNumber: "",
    Year: "",
    Branch: "",
    College: "",
    Interest: "",
  }])
  const mydata = async () => {
    try{
    const response = await axios.get(`http://its-rgpv-backend.vercel.app/StudentDashbord/${id}`);
    const registerData = response.data.data;
    registerData.map((object) => {
      final((info) => [
        ...info, {
          Rid: object._id,
          Name: object.Name,
          Email: object.Email,
          MobileNumber: object.MobileNumber,
          Year: object.Year,
          Branch: object.Branch,
          College: object.College,
          Interest: object.Interest,
        }

      ])
    })
  }catch(error){
    if(error.response.request.status === 401){
      navigate('/errorpage');
  }
  else{
   toast("They have some error please login again...")
  }
  }
  }

  useEffect(() => {
    mydata();
  }, [])

  return (

<>
      <div className="flex w-full justify-between">
            <MainDashboardNav></MainDashboardNav>
        <div className="w-5/6  justify-center items-center">
          <div className="flex flex-col items-center justify-center bg-gray-900 py-4">
            <h1 className="text-lg text-gray-400 font-medium">
              Students Data Record UIT & SOIT Both
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
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Batch Year
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Phone
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Mail ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            College
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Branch
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Interest
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Total :- {(initial.length-1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((Personaldata) => {
                        {if(!Personaldata.Rid) return null}
                        return(<>
                      <tbody className="bg-gray-800">
                        <tr className="bg-black bg-opacity-20">
                          <td className="pl-4">1</td>
                          <td className="flex px-6 py-4 whitespace-nowrap">
                            <span className="ml-2 font-medium">{Personaldata.Name}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.Year}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.MobileNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.Email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{Personaldata.College}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{Personaldata.Branch}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{Personaldata.Interest}</td>
                          <td className="flex px-6 py-4 whitespace-nowrap">
                          <button style={{padding:'5px'}} onClick={async()=>{
                            const conformation = confirm("You have conform");
                            if(conformation===true){
                            await axios.delete(`${process.env.Server_Path}/StudentDashbord/${Personaldata.Rid}`);
                            toast("Successfully delete...")
                            final((initial)=>
                            initial.filter(e=>e.Rid!=Personaldata.Rid)
                            )}
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





export default StudentDashbord;