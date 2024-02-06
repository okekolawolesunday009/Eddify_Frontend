import '../css/footer.css';
import { Link } from "react-router-dom";
import {
    AppLinks, CompanyLinks, InformationLinks, LegalLinks,
    MainLinks, ProductLinks, SocialLinks, SupportLinks
} from '../config/links';
import Images from "../Images/images"
import { Emails } from '../config/emails.js';
import eddify from "../assets/eddify.svg"

export const Footer = () => {
    var getTime = new Date().getHours;
    var getGreeting = () => {
        if(getTime < 12) {
            return "It's a new day. Let's make the most of it.";
        } else if(getTime === 12 && getTime < 18) {
            return "The day is not over. We can always start now.";
        }else if (getTime <= 21) {
            return "It's not over until you say it's over. Go all in now!";
        }else {
            return "Rest is as always important as your life is.";
        }
    }
    return (
        <footer className="footer mt-[20px] px-[100px]">
              <div className='w-[1000%]'>
               <Link to={ MainLinks.home }><img alt='' src={eddify && eddify} /></Link>
               </div>
                   
            {/* <div className="logo ">
                <div className="greeting">
                    <h3  style={{color:"white"}}>{`${getGreeting()}`}</h3>
                </div>
                <Link to={ MainLinks.home }><img alt='' src={ Images && Images.serchLogoName } /></Link>
            </div>
            */}
            <div className='footerlist'>
                <div className='company'>
                <h2 className='font-bolder'>Eddify</h2>
                            
                  <p>Lorem ipsum dolor sit amet consectetur. Et aenean rutrum diam proin nullam nec in.</p>  
                    
                </div>
                <div className='product'>
                    <h2>Pupolar Courses</h2>
                    <Link to={ ProductLinks.business } className="pageLink">Digital Marketing</Link>
                    <Link to={ ProductLinks.request } className="pageLink">Graphics Design</Link>
                    <Link to={ ProductLinks.provide } className="pageLink">Software Engineering</Link>
                </div>
                <div className='pricing'>
                    <h2>Contact Us</h2>
                    <Link to={ InformationLinks.docs } className="pageLink">Address: ALx address</Link>
                    <Link to={ InformationLinks.safety } className="pageLink">Email</Link>
                    <Link to={ InformationLinks.payment } className="pageLink">Phone Numbers</Link>
                </div>
                
            </div>
            <div className='footerlinks'>
                {/* <div className='app'>
                    <a href={AppLinks.playStore}><img alt='' src={ Images.playStore } /> </a>
                    <a href={AppLinks.appleStore}><img alt='' src={ Images.appleStore } /> </a>
                </div>
                <div className='socialmedia'>
                    <a href={ SocialLinks.twitter }><img alt='' src={ Images.twitter } /> </a>
                    <a href={ SocialLinks.facebook }><img alt='' src={ Images.facebook } /> </a>
                    <a href={ Emails.help }><img alt='' src={ Images.gmail } /> </a>
                    <a href={ SocialLinks.instagram }><img alt='' src={ Images.instagram } /> </a>
                    <a href={ SocialLinks.linkedIn }><img alt='' src={ Images.linkedIn } /> </a>
                </div> */}
            </div>
            <div className='footerbottom'>
                <div className='policy'>
                    <Link to={ LegalLinks.privacyPolicy } className="pageLink">Privacy </Link>
                    <Link to={ LegalLinks.termsAndConditions } className="pageLink">Terms</Link>
                    <Link to={ LegalLinks.accessibility } className="pageLink">Accessibility</Link>
                </div>
                <div className='bottom'>
                    <p>2024 Eddify Inc. Tech.</p>
                </div>
            </div>
        </footer>
    );
}