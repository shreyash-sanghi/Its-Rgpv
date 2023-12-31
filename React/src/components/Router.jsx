import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Update from "./Update";
import SRegister from "./SRegister";
import Login from "./Login";
import PersonalPage from "./PersonalPage";
import AddEvent from "./AddEvent";
import Edit from "./Edit";
import Dashbord from "./Dashbord";
import MainDashboard from "./MainDashboard";
import Request from "./Request";
import LogOut from "./LogOut";
import Hod from "./Hod.jsx";
import VCMessage from "./VCMessage";
import DirectorsMessage from './DirectorsMessage'
import StudentDashbord from "./StudentDashbord.jsx";
import MainDashboardNav from "./MainDashboardNav.jsx";
import Hostel from "./Hostel.jsx";
import VerifyEvent from "./VerifyEvent.jsx";

import AllEventDashbord from "./AllEventDashbord.jsx";
import DepartmentalClubs from "./DepartmentalClubs.jsx";
import FullEvent from "./FullEvent.jsx";
import ComplaintForm from './ComplaintForm.jsx';
import ComplaintDashboard from "./ComplaintDashboard.jsx";
import PastEventDashboard from "./PastEventDashboard.jsx";
import Error from "./Error.jsx";
import PhotoGaller from "./PhotoGaller.jsx";
import Startups from "./Startups.jsx";
import NssNcc from "./NssNcc.jsx";
import ClubSocities from './ClubSocities.jsx';
import CollegeFest from './CollegeFest.jsx';
import Placement from './FooterPlacment.jsx';
import Team from "./FooterTeam.jsx";
import Scholarships from "./Scholarships.jsx";

const Router = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/Update" Component={FullEvent}></Route>
          {/* <Route exact path="/registration" Component={Register}></Route> */}
          <Route exact path="/registration/:id" Component={Register}></Route>
          <Route exact path="/sregister" Component={SRegister}></Route>
          <Route exact path="/AddEvent/:id" Component={AddEvent}></Route>
          <Route exact path="/personalpage/:id"Component={PersonalPage}></Route>
          <Route exact path="/edit/:id" Component={Edit}></Route>
          <Route exact path="/dashbord/:id" Component={Dashbord}></Route>
          <Route exact path="/maindashboard/:id" Component={MainDashboard}></Route>
          <Route exact path="/request" Component={Request}></Route>
          <Route exact path="/LogOut" Component={LogOut}></Route>
          <Route exact path="/library" Component={Library}></Route>
          <Route exact path="/vice-chancellor-message" Component={VCMessage}></Route>
          <Route exact path="/director-message" Component={DirectorsMessage}></Route>
          <Route exact path="/head-of-departments" Component={Hod}></Route>
          <Route exact path="/StudentDashbord/:id" Component={StudentDashbord}></Route>
          <Route exact path='/MainDashboardNav' Component={MainDashboardNav}></Route>
          <Route exact path="/hostel-info" Component={Hostel}></Route>
          <Route exact path="/VerifyEvent/:id/:Mid" Component={VerifyEvent}></Route>
          <Route exact path="/AllEventDashbord/:id" Component={AllEventDashbord}></Route>
          <Route exact path="/PastEventDashboard/:id" Component={PastEventDashboard}></Route>
          <Route exact path="/ComplaintDashboard/:id" Component={ComplaintDashboard}></Route>
          <Route exact path="/DepartmentalClubs" Component={DepartmentalClubs}></Route>
          <Route exact path="/ComplaintForm" Component={ComplaintForm}></Route>
          <Route exact  path="/photogallery" Component={PhotoGaller}></Route>
          <Route exact path="/start-ups" Component={Startups}></Route>
          <Route exact path="/NssNcc" Component={NssNcc}></Route>
          <Route exact path="/ClubSocities" Component={ClubSocities}></Route>
          <Route exact path="/CollegeFest" Component={CollegeFest}></Route>
          <Route exact path="/Placement" Component={Placement}></Route>
          <Route exact path="/Team" Component={Team}></Route>
          <Route path="/errorpage" Component={Error}></Route>
          <Route path="/scholarships" Component={Scholarships}></Route>
        </Routes>

    </>
  );
};
export default Router;
