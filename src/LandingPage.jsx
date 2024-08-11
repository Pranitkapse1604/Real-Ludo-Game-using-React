import React, { useState } from 'react'
import frontImg from '../components/imgs/Front-Ludo-removebg-preview.png'

function LandingPage({showLandingPage,setShowLandingPage}) {
  const changeShowLandingPage=()=>{
    setShowLandingPage(!showLandingPage)
  }

 


  return (
    <>
    
    <div className={showLandingPage?"w-screen   h-[100vh-50px] flex flex-col pt-5 gap-10 mdsize:px-20 llgsize:px-40":"hidden"}>
       <div className="flex flex-col gap-6 lgsize:flex-row items-center "> 
        <div className="lgsize:w-[50%] llgsize:px-2">
        <h2 className=' llgsize:text-left  text-4xl font-bold  py-2 font-serif text-center'>PRANIT-LUDO Project</h2>
           <p className="font-serif text-center llgsize:px-1 llgsize:text-left">Using ReactJS + Tailwind CSS</p>
          </div>
        <div className="w-full  lgsize:w-[50%]">
          <img    src={frontImg} alt="" /></div>
       </div>
        <div className="flex justify-center"><button onClick={changeShowLandingPage} className="px-4 py-2 bg-slate-800 text-2xl rounded-md text-white font-bold font-serif">Lets Play</button></div>
         <div className="flex justify-center"> 
          <div className="flex gap-5">
           <a className="iconstyle transition-all duration-[0.4s] delay-[0.1s] border-cyan-300  border-[2px] text-cyan-300 hover:border-[3px] hover:bg-cyan-300 hover:text-slate-900" href="https://linkedin.com/in/pranit-kapse-864451246"><i className="ri-linkedin-box-fill"></i></a>
           <a className="iconstyle transition-all duration-[0.4s] delay-[0.1s] border-cyan-300 border-[2px] text-cyan-300 hover:border-[3px] hover:bg-cyan-300 hover:text-slate-900" href="https://github.com/Pranitkapse1604"><i className="ri-github-fill"></i></a>
           <a className="iconstyle transition-all duration-[0.4s] delay-[0.1s] border-cyan-300 border-[2px] text-cyan-300 hover:border-[3px] hover:bg-cyan-300 hover:text-slate-900" href="https://www.instagram.com/pranitkapse_16"><i className="ri-instagram-fill"></i></a>
           <a className="iconstyle transition-all duration-[0.4s] delay-[0.1s] border-cyan-300 border-[2px] text-cyan-300 hover:border-[3px] hover:box-shaddow hover:bg-cyan-300 hover:text-slate-900" href="mailto:pranitkapse2003@gmail.com" ><i className="ri-mail-fill"></i></a>
         </div>
        </div>
        <div className="text-center font-serif">Created by Pranit @ 2024</div>
      </div>
      </>
  )
}

export default LandingPage