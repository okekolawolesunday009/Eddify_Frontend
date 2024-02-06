import { FaHome } from "react-icons/fa"
import { BsChatDotsFill } from "react-icons/bs"
import { BiPhoneCall } from "react-icons/bi"
import { FcSettings } from "react-icons/fc"
import { CgProfile} from "react-icons/cg"
import "./profile.css";
// import profile from "../../../assets/profilepage/profile.svg";
// import profilecall from "../../../assets/profilepage/profilecall.svg";
// import profilechat from "../../../assets/profilepage/profilechat.png";
// import profilesetting from "../../../assets/profilepage/profilesetting.svg";
// import profilehome from "../../../assets/profilepage/profilehome.svg";


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
        // icon:<BsChatDotsFill/>,
        // icon:<img className="profile-icons" src={}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Home",
        path:"/profile/profilehome",
        // icon:<BsChatDotsFill/>,
        // icon:<img className="profile-icons" src={profilechat}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Payment",
        path:"/profile/profilepayment",
        // icon:<BiPhoneCall/>,
        // icon:<img className="profile-icons" src={profilecall}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Course",
        path:"/profile/profilecourse",
        // icon:<FcSettings/>,
        // icon:<img className="profile-icons" src={profilesetting}/>,

        cName:"profile-nav-item"

    },      
    {
        title:"Help",
        path:"/profile/profilehelp",
        // icon:<BsChatDotsFill/>,
        // icon:<img className="profile-icons" src={}/>,

        cName:"profile-nav-item"

    },
    {
        title:"Logout",
        path:"/profile/profilelogout",
        // icon:<BsChatDotsFill/>,
        // icon:<img className="profile-icons" src={profilechat}/>,

        cName:"profile-nav-item"

    }
]