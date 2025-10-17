import React, { useEffect, useState } from 'react'
import lightmod from "../assets/img/light.jpg"
import Darktmod from "../assets/img/dark.jpg"


function DarkMode() {
    const [Theme , setTheme] = useState(localStorage.getItem("Theme") ? localStorage.getItem("Theme"):"light");

    const element = document.documentElement;
    console.log(element);
    
    useEffect(() => {
        localStorage.setItem("Theme" , Theme);
        if(Theme === "dark") {
            element.classList.add("dark");
            element.classList.add("dark");
        }else{
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    })
  return (
    <div className='relative'>
        <img onClick={() => setTheme(Theme === "dark" ? "light" : "dark")} src={lightmod} alt="" className={`w-12 cursor-pointer absolute right-0 z-10 ${Theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`} />
        <img onClick={() => setTheme(Theme === "dark" ? "light" : "dark")} src={Darktmod} alt="" className={`w-12 cursor-pointer`} />

    </div>
  )
}

export default DarkMode