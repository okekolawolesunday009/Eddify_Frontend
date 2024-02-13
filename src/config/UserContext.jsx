import axios from "axios";
import { createContext, useEffect, useState } from "react";
import{ jwtDecode} from 'jwt-decode';
import { useParams } from "react-router-dom";

export const userContext = createContext({});

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [cookies, setCookies] = useState("");
    const [ready, setReady] = useState(false);




    useEffect(() =>{
        
        const user = localStorage.getItem('user');
        console.log(user)

        if (user != null) {
            console.log(user)
          const tokenKey = localStorage.getItem('token');
          console.log(tokenKey)

       
            axios.get(`http://localhost:5001/api/v1/auth`,  {
                headers: {'Content-Type': 'application/json', "x-access-token": tokenKey}
            })
            .then(({data}) =>{

                setUser(data.user.first_name)
                setProfile(data.user)
          
              })
            .catch((error) => {
                console.log(error)
            })

        }
        
        
        
        
    }, [user])

    
    // useEffect(() => {
       
    //     const token = localStorage.getItem('token');
    //     console.log(userString, "found")
       
    //     if (token) {
    //         // Decode the token to extract user information
    //         const decodedToken = decodeToken(token);
    //         console.log(decodeToken)
    //         setUser(decodedToken);
           
    //     }
    // }, []);

    // const decodeToken = (token) => {
    //     try {
    //         const decoded = jwtDecode(token);
    //         return decoded;
    //     } catch (error) {
    //         console.error('Error decoding token:', error);
    //         return null;
    //     }
    // };

    return(
        <userContext.Provider value={{user, setUser, ready, profile}}>
            {children}
        </userContext.Provider>
    )
}

