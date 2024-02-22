import { Link, useParams } from "react-router-dom";
import { Title } from "../../config/titleHeader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Input from "../../Component/Input";
import { userContext } from "../../config/UserContext";
import {AiOutlineUser} from 'react-icons/ai'
import UserIcon from "../../Component/UserIcon";
import Searchs from "../../Component/Searchs";
import { SampleLesson } from "./sampleLesson";
import { Footer } from "../../Layouts/footer";
import {VscThreeBars} from 'react-icons/vsc'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


export const LessonHome = ()=>{
    Title("Eddify || Lesson Home");
    const {id} = useParams()
    const [lesson, setLesson] = useState([])
    const [content, setContent] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [navLesson, setNavLesson] = useState(false)
    const [nav, setNav] = useState(false)
    const {user} = useContext(userContext)

    const [formData, setFormData] = useState({
        search: ""
   })
   const {search} = formData

   const handleChange = (e) =>{
    setFormData((prev) =>({
      ...prev,
      [e.target.id] : e.target.value
    }))
  }


    // console.log(id)
    // const [nav, setNav] = useState(false)
    // console.log(lesson)
    // useEffect(() => {
    //     if (user && id) {
    //         axios.get(`http://localhost:5001/course/${id}/lesson`).then(({data}) =>{
    //             setLesson(data)
    //             setContent(lesson[0].content)
    //            console.log(data)
          
    //           })
    //     } else {
    //         setLesson(SampleLesson)
    //         setContent(SampleLesson[0].content)
    //     }
    // }, [])
    
    function handleClick(){
        setNav((p) => !p)
      }
      useEffect(() => {
        if (user && id) {
            axios.get(`http://localhost:5001/course/${id}/lessons`)
                .then(({ data }) => {
                    setLesson(data);

                    if (data.length > 0) {
                        setContent(data[0].content);
                        setTitle(data[0].title);
                       setDescription(data[0].description);
                    }
                })
                .catch(error => {
                    console.error("Error fetching lessons:", error);
                });
        } else {
            setLesson(SampleLesson);
            console.log(lesson)
            if (SampleLesson.length > 0) {
                setContent(SampleLesson[0].content);
                setTitle(SampleLesson[0].title);
                setDescription(SampleLesson[0].description);
               
            }
        }
    }, [id, user]);

    function handleContent(content, title, description) {
        setContent(content);
        setTitle(title);
        setDescription(description);
    }

      function handleLesson(){
        setNavLesson((p) => !p)
      }
      function handleClick(){
        setNav((p) => !p)
      }
    return(
        <div className="">
           
            <div className="flex justify-between items-center w-full " >
            <h1>Lesson</h1>
            <UserIcon onHandle={handleClick}/>

            </div>
            <div className="bottom-border"></div>
            <div className= {nav ? 'w-[100%] block absolute' : 'hidden' }><MobileSideBar/></div>



                    
            <div className="pt-8 flex">
                <div className="flex justify-cente">
                
               
                <div className={`flex flex-col w-[200px]  ${navLesson ? "hidden" : "block"}`}>
                
                
                <div className={`flex items-center justify-between`}>
                <h2 className="font-normal">Modules</h2>
                
                </div>

                <div className={`h-auto w-full `}>
                   <ul className="flex flex-col h-[200px] mt-4 justify-between">
                    {lesson.map((lessonItem) => {
                        return <li key={lessonItem.id} onClick={() => 
                        handleContent(lessonItem.content, lessonItem.title, lessonItem.description)}>
                        {lessonItem.title}
                    </li>
                    })}
                    </ul>
                </div>


                 
                </div>
                {navLesson ? (
                     <FaChevronRight
                    onClick={handleLesson}/>
                ) : 
                     <FaChevronLeft   onClick={handleLesson}/>
                }
                </div>

                <div className={` flex-1`}>
                    
                 <iframe 
                     width="100%"
                     height="515"
                     src={`https://www.youtube.com/embed/${content}`} 
                     frameBorder="0"
                     allow="accelerator; autoplay; clipboard-wrte; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen>
                                    
                 </iframe>

                <div className="mt-4">
                    <h1>{title}</h1>
                    <h2>{description}</h2>ss
                </div>
                  
                 
                </div>
            </div>

            <Footer/>
        </div>
    )
    
};