import axios from "axios";
import {React,useEffect,useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,useParams } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";
const AllEventDashbord =()=>{
    const { id } = useParams();
    const navigate = useNavigate();
  
    const [initial, final] = useState([{
      Rid: "",
      EventName: "",
      Discreption: "",
      Place: "",
      EDate: "",
      Time: "",
      Name: "",
      Prize: "",
      EventBanner: "",
    }])
    const [inicount,fincount] = useState(0);

    const mydata = async () => {
      try {
        
        const response = await axios.get(`https://its-rgpv-nmum.vercel.app/AllEventDashbord/${id}`);
        const registerData = response.data.data;
        registerData.map((object) => {
          final((info) => [
            ...info, {
              Rid: object._id,
            EventName: object.EventName,
            Discreption: object.Discreption,
            Place: object.Place,
            EDate: object.EDate,
            Time: object.Time,
            Name: object.Name,
            RegLink: object.RegLink,
            EventBanner: object.image,
          }
  
        ])
      })
  
    } catch (error) {
      if(error.response.request.status === 401){
        navigate('/errorpage');
    }
    else{
      toast("They have some error please login again...");
    }
    }
    }
  
    useEffect(() => {
      mydata();
    }, [])
 
    // const date = new Date;
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let day = date.getDate();
    // let min = date.getMinutes();
    // let hour = date.getHours();
    // // console.log(hour);
    // // if(hour>12){
    // //   hour = hour-12;
    // // }
    // if(day<10){
    //   day = `0${day}`
    // }
    // if(month<10){
    //   month=`0${month}`
    // }
    // if(hour<10){
    //   hour=`0${hour}`
    // }
    // if(min<10){
    //   min=`0${min}`
    // }
    // const eventdate = `${year}-${month}-${day}`;  //current date
    // const eventtime =`${hour}:${min}`;            //current time

 
   
    // initial.map((info)=>{
    //   const eventdatesplate = info.EDate.split('-');
    //   const currentdatesplate = eventdate.split('-');
    //    const eventyear =  eventdatesplate[0] - currentdatesplate[0]
    //   //  const eventmonth =  eventdatesplate[1] - currentdatesplate[1]
    //    const eventday =  eventdatesplate[2] - currentdatesplate[2]
    //      const  eventmonth = -3;
    //     if(Math.sign(eventmonth)===-1 && eventyear>1){
    //       eventmonth = -eventmonth;
    //       if(eventmonth>1){
    //         for(let i=1;i<eventmonth;i++){
    //           eventmonth = i*30;
    //         }
    //       }
    //     }
    //     else if(Math.sign(eventmonth)===1){
    //       if(eventmonth>1){
    //         for(let i=1;i<eventmonth;i++){
    //           eventmonth = i*30;
    //         }
    //       }
    //     }

    //     if(Math.sign(eventday)===-1 && eventmonth===1 ){
    //        eventday=-eventday;
    //     }   
    //     else if(Math.sign(eventday)===-1){
    //       eventday = -eventday + eventmonth
    //     }
    //     else{
    //       eventday = eventday;
    //     }
    //   // console.log(info.Time +"  "+info.EDate.split('-')[0])
    //   // console.log(info.EDate-info.eventdate)
    //   id
    //   if(info.EDate === eventdate && info.Time === eventtime){
    //     const autodelete=async()=>{
    //      await axios.delete(`http://127.0.0.1:4000/PersonalPage/${info.Rid}`);
    //    }
    //    autodelete();
    //   }
    // })

    // const countEvent = ()=>{
    //     fincount =inicount+1; 
    // }
  


  return(
    <>
     <div className="flex w-full justify-between overflow-x-scroll over scrollbar-hide lg:overflow-x-hidden">
            <MainDashboardNav></MainDashboardNav>
        <div className="lg:w-5/6  justify-center items-center ">
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
                            EventBanner
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            EventName
                          </th>
                          {/* <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Discreption
                          </th> */}
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            Place
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left tracking-wider"
                          >
                            EDate
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
                            Total :- {(initial.length-1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((Personaldata) => {
                        {if(!Personaldata.Rid) return null}
                        return(<>
                      <tbody className="bg-gray-800">
                        <tr className="bg-black bg-opacity-20">
                          <td className="pl-4">{inicount}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <img  src={`https://its-rgpv-nmum.vercel.app/images/`+Personaldata.EventBanner} className="w-20 h-10"/>
                            </td>
                          <td className="flex px-6 py-4 whitespace-nowrap">
                            <span className="ml-2 font-medium">{Personaldata.EventName}</span>
                          </td>
                          {/* <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.Discreption}
                          </td> */}
                          <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.Place}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.EDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{Personaldata.Name}</td>
                          <td className="flex px-6 py-4 whitespace-nowrap">
                          <button style={{padding:'5px'}} onClick={async()=>{
                            const conformation = confirm("You have conform");
                            if(conformation===true){
                            await axios.delete(`https://its-rgpv-nmum.vercel.app/PersonalPage/${Personaldata.Rid}`);
                            toast("Sucsessfully Delete...")
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
      <ToastContainer/>
    </>
  )
}

export default AllEventDashbord;