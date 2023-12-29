import React, { useState,useEffect } from "react";
import Hero from "./Hero";
import Ourapp from "./Ourapp";
import Partners from "./Partners";
import Cards from "./Cards";
import SportsGroup from "./SportsGroup.jsx";
import Fest from "./Fest.jsx";
import Nss from './Nss'
import Team from "./Team";
import Footer from "./Footer";
import Inzio from "./Inzio";
import MemoriesGlimpses from "./MemoriesGlimpses.jsx";
import Placement from "./Placement.jsx";
import DepartmentalClubs from "./DepartmentalClubs";
import Navbar from './Navbar.jsx'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EventData from "./EventData.jsx"
import StartupsSection from "./StartupsSection.jsx";
import DepartmentsSection from "./DepartmentsSection.jsx";

const Home = () => {
  const navigate = useNavigate();

  const co =document.cookie.split('=');
  const token = co[1];
  

  const getdata =async(e)=>{
    try{
    const responce = await axios.get(`http://its-rgpv-nmum.vercel.app/${token}`)
    const data = responce.data;
    const Mid = data.id;
    const Email = data.Email;
    const HostEmail1= data.HostEmail1;
    const HostEmail2 = data.HostEmail2;
    if(Email===HostEmail1 ||Email===HostEmail2 ){
    axios.defaults.headers.common["Authorization"] = token;
    navigate(`/maindashboard/${Mid}`)
   }else{
    axios.defaults.headers.common["Authorization"] = token;
    navigate(`/personalpage/${Mid}`)
    }
  }catch(error){
    alert("They have some error please login again...")
    navigate("/")
  }
}
   
console.log(token)
  //  if(token !=='undefined'){
  //   useEffect(() => {
  //     getdata();
  //   },[])
  //  }

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
      <Fest></Fest>
      <EventData/>
      <Cards></Cards>
      <Inzio></Inzio>
      {/* <Nss></Nss> */}
      <Ourapp></Ourapp>
      <DepartmentalClubs></DepartmentalClubs>
      <MemoriesGlimpses></MemoriesGlimpses>
      <StartupsSection/>
      <SportsGroup></SportsGroup>
      <Partners></Partners>
      <DepartmentsSection/>
      <Placement></Placement>
      <Team></Team>
      <Footer></Footer>
    </>
  );
   
};

export default Home;
