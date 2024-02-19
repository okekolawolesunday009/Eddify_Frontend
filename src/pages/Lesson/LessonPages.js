import { Link, useParams } from "react-router-dom";
import { Title } from "../../config/titleHeader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Input from "../../Component/Input";
import { userContext } from "../../config/UserContext";
import {AiOutlineUser} from 'react-icons/ai'
import UserIcon from "../../Component/UserIcon";
import Searchs from "../../Component/Searchs";


export const LessonHome = ()=>{
    Title("Eddify || Lesson Home");
    const {id} = useParams()
    const [lesson, setLesson] = useState([])
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


    console.log(id)
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5001/course/${id}/lesson`).then(({data}) =>{
                setLesson(data)
               console.log(data)
          
              })
        }
    }, [])
    const [nav, setNav] = useState(false)

    function handleClick(){
        setNav((p) => !p)
      }
    return(
        <div className="">
           
            <div className="flex justify-between items-center w-full " >
            <h1>Lesson</h1>

            <Searchs/>

            <UserIcon onHandle={handleClick}/>



            </div>
            <div className="pt-8">
                <div className="flex">
                  <Link to={"/profile/courses"}>
                    <p className="font-bold">course/</p>
                </Link>

                <p className="font-bold"> Lesson</p>
                </div>

                
            {lesson && (
                lesson.map((lesson) => {
                    return <iframe width="100%" height="515"  src={`https://www.youtube.com/embed/ZhULGD5hNQs`} frameBorder="0"
                            allow="accelerator; autoplay; clipboard-wrte; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                                
                           </iframe>
                })
                
           )}
            </div>
        </div>
    )
    
};