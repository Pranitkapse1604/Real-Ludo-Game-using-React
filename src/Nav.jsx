import React from 'react'
import logo from '../components/imgs/logo.png'

function Nav({showLandingPage,setShowLandingPage}) {
  const changeShowLandingPage=()=>{
    setShowLandingPage(!showLandingPage)
  }
  return (
    <div className="h-[50px]   shadow-lg w-screen flex items-center justify-between py-2 mdsize:px-20 llgsize:px-40 px-4">
      <div className="h-full   flex items-center gap-2 "><img className="h-full" src={logo} alt="" /> <span className="text-xl font-serif font-medium">My Project</span></div>
      <div onClick={changeShowLandingPage} className={"h-full cursor-pointer flex justify-center items-center"}><i className={showLandingPage?"ri-arrow-right-circle-line text-3xl":"ri-arrow-left-circle-line text-3xl "}></i></div>
    </div> 
  )
}

export default Nav