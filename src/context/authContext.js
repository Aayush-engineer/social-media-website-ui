import { createContext, useEffect, useState } from "react";

// here i am creating a context api
export const AuthContext = createContext();

// to use this context we need context provider
export const AuthContextProvider = ({children})=>{

    const [currentUser, setCurrentUser] = useState( JSON.parse(localStorage.getItem("user")) || null);


    // using this function we change darkmode
    const login = () =>{

        setCurrentUser({

            id:1,
            name:"john doe",
            profilePic: " https://images.unsplash.com/photo-1489730955284-365747312681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        });
        
    }

    useEffect(()=>{
        //   here we are set the darkmode
        localStorage.setItem("user",JSON.stringify(currentUser));

    },[currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    )
};