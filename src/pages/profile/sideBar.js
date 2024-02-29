import { FaHome } from "react-icons/fa"
import { BsChatDotsFill } from "react-icons/bs"
import { BiPhoneCall } from "react-icons/bi"
import { FcSettings } from "react-icons/fc"
import { CgProfile} from "react-icons/cg"
import "./profile.css";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { FaBookBookmark } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

export const SideBar = [
    // profiledashboard:"/profile",
    // profilehome:"/profile/profilehome",
    // profilepayment:"/profile/profilepayment",
    // profileCourse:"/profile/profilecourse",
    // profileHelp:"/profile/profilehelp",
    // profieLogOut:"/profile/profilelogout"
      
    {
        title:"Profile",
        path:"/profile",
        icon:<FaUser className="text-xl" />,
        cName:"profile-nav-item"

    },    
    

    {
        title:"Home",
        path:"/profile/home",
        icon:<IoMdHome className="text-2xl"/>,
        cName:"profile-nav-item"

    }, 
   
    {
        title:"Payment",
        path:"/profile/payment",
        icon:<CiCreditCard2 className="text-2xl "
         />,
        cName:"profile-nav-item"

    },
    {
        title:"Course",
        path:"/profile/courses",
        icon:<FaBookBookmark  className="text-2xl" />,
        // icon:<img className="profile-icons" src={profilesetting}/>,

        cName:"profile-nav-item"

    },

    

    {
        title:"Help",
        path:"/profile/help",
        icon:<IoIosHelpCircleOutline  className="text-2xl " />,
        cName:"profile-nav-item"

    },
   
    {
        title:"Logout",
        path:"/profile/logout",
        icon:<CiLogout  className="text-2xl "/>,

        // icon:<img className="profile-icons" src={profilechat}/>,

        cName:"profile-nav-item"

    }
]