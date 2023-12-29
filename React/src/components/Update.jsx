import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Update = () => {
  const [initial, final] = useState([
    {
      Rid:"",
      EventName: "",
      HostName: "",
      Discreption: "",
      EDate: "",
      Place: "",
      Time: "",
      Link:"",
      Image:""
    },
  ]);
  
  // const co =document.cookie.split('=');
  // const token = co[1];

  const allupdate = async () => {
    try {
      const response = await axios.get(`http://its-rgpv-nmum.vercel.app/events`);
      console.log(response.status);
      const data = response.data.data;
      data.map((object) => {
        final((sdata) => [
          ...sdata,
          {
            Rid:object._id,
            EventName: object.EventName,
            HostName: object.Name,
            Discreption: object.Discreption,
            EDate: object.EDate,
            Place: object.Place,
            Time: object.Time,
            Link: object.RegLink,
            Image:object.image
          },
        ]);
      });
    } catch (error) {
      console.log(error)
      // alert("They have some error please relode page...")
      alert(error.message)
    }
  };

  useEffect(() => {
    allupdate();
  },[]);

  return (
    <>

            <main className="flex mb-10 flex-1 w-full flex-row items-center justify-center text-center px-4 sm:mt-12 mt-20">
            <NavLink to='/' className="ml-0 mt-3 max-[10rem] mx-auto border-2  text-white rounded-lg px-2 py-1 font-medium">
                    Home<span className="ml-2 "><i className="ri-home-8-line"></i></span>
              </NavLink> 
              <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-4xl">
                Upcoming
                <span className="relative whitespace-nowrap text-pink-700">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative ml-4">Events</span>
                </span>
              </h1>
            </main>
      <div className="flex flex-wrap-reverse  justify-center pt-2">
      {initial.map((info) => {
            console.log(info.Image)
          if(!info.Rid) return null;
        return (
          <>
              <div className="max-w-2xl mt-4 h-auto mx-auto p-4 sm:px-6 border-4 border-white ">
                <article className=" max-w-[22rem] mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">

                  <figure 
                  // className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out"
                  >
                 { console.log(info.Image)}
                    <img
                      className="h-[17rem] md:h-72 "
                      // className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src={`http://its-rgpv-nmum.vercel.app/images/`+info.Image}
                      width="540"
                      height="303"
                      alt="Blog post"
                    />
                  </figure>
                  <div className="max-w-xl" >
                    <header>
                      <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              On- {info.EDate}
                            </a>
                          </li>
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Time- {info.Time}
                            </a>
                          </li>
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Mode : Online
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <a
                          className="hover:text-gray-100 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          {info.EventName}
                        </a>
                      </h3>
                    </header>
                    <p className="text-lg  text-gray-400">
                     {/* {info.Discreption} */}
                    </p>
                    <p className="text-sm pt-1 text-blue-400 ">
                      Venue : {info.Place}
                    </p>
          
                    <p className="text-sm pt-1 text-blue-400 hover:cursor-pointer ">
                      Link : <a href={info.Link}>{info.Link}</a>
                    </p>
          
                    <footer className="flex items-center mt-4">
      
                      <div>
                        <a
                          className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Host By : {info.HostName}
                        </a>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            
          </>
        )
      })}
      </div>
    </>
  );
};
export default Update;
