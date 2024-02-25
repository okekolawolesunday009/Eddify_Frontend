// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import SignUp from "./pages/signup";
import  {Login } from "./pages/login";
import Profile from "./pages/profile/Profile";
import {  LessonLinks, ProfileLinks} from "./config/links";
import { ProfileHome, ProfilePayment, ProfileDashboard, ProfileCourse, ProfileHelp, ProfileLogOut, CourseEnroll } from "./pages/profile/ProfilePage";
import Lesson from "./pages/Lesson/Lesson";
import { LessonHome } from "./pages/Lesson/LessonPages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from "./config/UserContext";
function App() {
  return (
    <>
  
    <UserContextProvider>
      <Routes>
        <Route path={"/"} element={<Layout/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/user/enrolled-course:id" element={<Course/>}></Route> */}
        
        <Route path="/profile" element={<Profile/>}>
           <Route path="/profile" element={<ProfileDashboard/>}/>
           <Route path={ProfileLinks.profilehome} element={<ProfileHome/>}/>
           <Route path={ProfileLinks.profilepayment} element={<ProfilePayment/>}/>
           <Route path={"/profile/courses"} element={<ProfileCourse/>}/>
           <Route path={"/profile/course/:id"} element={<CourseEnroll/>}/>
           <Route path={ProfileLinks.profileHelp} element={<ProfileHelp/>}/>
           <Route path={"/profile/logout"} element={<ProfileLogOut/>}/>
       
           
        </Route>
        <Route path="/course/:id/lessons" element={<Lesson/>}>
              <Route path={"/course/:id/lessons"} element={<LessonHome/>}/>
        </Route>

    </Routes>
    </UserContextProvider>
    <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
         />


      
    </>
  );
}

export default App;
