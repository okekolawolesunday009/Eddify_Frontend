// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import SignUp from "./pages/signup";
import Course from "./pages/course";
import  {Login } from "./pages/login";
import Profile from "./pages/profile/Profile";
import {  LessonLinks, ProfileLinks} from "./config/links";
import { ProfileHome, ProfilePayment, ProfileDashboard, ProfileCourse, ProfileHelp, ProfileLogOut } from "./pages/profile/ProfilePage";
import Lesson from "./pages/Lesson/Lesson";
import { LessonHome } from "./pages/Lesson/LessonPages";
import { UserContextProvider } from "./config/UserContext";
function App() {
  return (
    <>
     {/* // profiledashboard:"/profile",
    // profilehome:"/profile/profilehome",
    // profilepayment:"/profile/profilepayment",
    // profileCourse:"/profile/profilecourse",
    // profileHelp:"/profile/profilehelp",
    // profieLogOut:"/profile/profilelogout" */}
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/api/v1/users/signup" element={<SignUp/>}></Route>
        <Route path="/api/v1/users/login" element={<Login/>}></Route>
        {/* <Route path="/user/enrolled-course:id" element={<Course/>}></Route> */}
        
        <Route path="/api/v1/profile" element={<Profile/>}>
           <Route path="/api/v1/profile" element={<ProfileDashboard/>}/>
           <Route path={ProfileLinks.profilehome} element={<ProfileHome/>}/>
           <Route path={ProfileLinks.profilepayment} element={<ProfilePayment/>}/>
           <Route path={"/api/v1/profile/courses"} element={<ProfileCourse/>}/>
           <Route path={ProfileLinks.profileHelp} element={<ProfileHelp/>}/>
           <Route path={"/api/v1/profile/logout"} element={<ProfileLogOut/>}/>
       
           
        </Route>
        <Route path="/courses:id/lessons" element={<Lesson/>}>
              <Route path={"/courses:id/lessons"} element={<LessonHome/>}/>
        </Route>

    </Routes>
    </UserContextProvider>


      
    </>
  );
}

export default App;
