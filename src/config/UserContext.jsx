import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext({});

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);
    const [cookies, setCookies] = useState("");
    const [ready, setReady] = useState(false);

    useEffect(() =>{
        
        const user = localStorage.getItem('user');

        
            console.log(user, "user")
            const tokenKey = localStorage.getItem('token');
            axios.get(`https://eddify-i4ft.onrender.com/auth`,  {
                headers: {'Content-Type': 'application/json', "x-access-token": tokenKey}
            })
            .then(({data}) =>{

                setUser(data.user)
                setId(data.user.id)
          
              })
            .catch((error) => {
                console.log(error)
            })

        
    },[])


    return(
        <userContext.Provider value={{user, setUser, ready, id}}>
            {children}
        </userContext.Provider>
    )
}

