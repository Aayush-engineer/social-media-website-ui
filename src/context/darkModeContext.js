import { createContext, useEffect, useState } from "react";

// here i am creating a context api
export const DarkModeContext = createContext();

// to use this context we need context provider
export const DarkModeContextProvider = ({children})=>{

    const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);

    // using this function we change darkmode
    const toggle = () =>{
        setDarkMode(!darkMode);
    }

    useEffect(()=>{
        //   here we are set the darkmode
        localStorage.setItem("darkMode",darkMode);

    },[darkMode]);

    return(
        <DarkModeContext.Provider value={{ darkMode,toggle}}>{children}</DarkModeContext.Provider>
    )
};