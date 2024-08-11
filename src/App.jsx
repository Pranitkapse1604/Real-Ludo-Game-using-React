import React, { useEffect, useState } from 'react'
import Player1 from '../components/Player1'
import Path1 from '../components/Path1'
import Player2 from '../components/Player2'
import Path3 from '../components/Path3'
import Winnerbox from '../components/Winnerbox'
import Path2 from '../components/Path2'
import Path4 from '../components/Path4'
import Player3 from '../components/Player3'
import Player4 from '../components/Player4'
import Roller from '../components/Roller'
import Nav from './Nav'
import { useDispatch, useSelector } from 'react-redux'
import LandingPage from './LandingPage'
import { restart } from './features/ludo/ludoSlice'

function App() {

  

  let Player1Turn = useSelector((state)=>state.ludoslice.playersTurn[0]);
  let Player2Turn = useSelector((state)=>state.ludoslice.playersTurn[1]);
  let Player3Turn = useSelector((state)=>state.ludoslice.playersTurn[2]);
  let Player4Turn = useSelector((state)=>state.ludoslice.playersTurn[3]);
  let winnedPlayer = useSelector((state)=>state.ludoslice.winnedPlayer);
  let dispatch = useDispatch();
  let [showLandingPage,setShowLandingPage]=useState(true);
  
  const restartGame=()=>{
    dispatch(restart())
  }
  return (
    
    <div  className="w-screen  h-[100vh] tablet:h-screen flex items-center justify-between  flex-col">
      <Nav showLandingPage={showLandingPage} setShowLandingPage={setShowLandingPage}/> 
      <LandingPage showLandingPage={showLandingPage} setShowLandingPage={setShowLandingPage}/>
      
     
    
      <div className={showLandingPage?"hidden":"w-screen  h-[calc(100vh-50px)] relative   tablet:h-[calc(100vh-50px)] flex flex-col items-center justify-center"}>
      <div className={(winnedPlayer===3)?"opacity-50 blur-sm fullLudoimg lgsize:bg-white  select-none pointer-events-none w-[100vw] relative box-shaddow  h-[100vmin] tablet:w-[400px]  tablet:h-[400px]  border border-black  gridview ":"w-[100vw] z-50 relative box-shaddow fullLudoimg h-[100vmin] tablet:w-[400px] tablet:h-[400px]  border border-black  gridview "}>
            <Player1 />
            <Path1 />
            <Player2 />
            <Path4 />
            <Winnerbox />
            <Path2 />
            <Player4 />
            <Path3 />
            <Player3 />

            {/* for player 1 */}
            <div className={(Player1Turn)?"absolute z-0 top-[-40px] w-[40.17%]":"opacity-[0.1] z-0 absolute user-select-none top-[-40px] w-[40.17%]"}>
            <Roller />
            </div>

            {/* for player 2 */}
            <div className={(Player2Turn)?"absolute z-0 top-[-40px] right-0 w-[40.17%]":"opacity-[0.1] z-0 absolute user-select-none top-[-40px] right-0 w-[40.17%]"}>
            <Roller />
            </div>

            {/* for player 3 */}
            <div className={(Player3Turn)?"absolute bottom-[-40px] right-0 w-[40.17%]":"opacity-[0.1] absolute user-select-none bottom-[-40px] right-0 w-[40.17%]"}>
            <Roller />
            </div>
            
            {/* for player 4 */}
            <div className={(Player4Turn)?"absolute bottom-[-40px]  w-[40.17%]":"opacity-[0.1] absolute user-select-none bottom-[-40px]  w-[40.17%]"}>
            <Roller />
            </div>
      </div>
      </div>
      <div onClick={restartGame} className={(winnedPlayer===3)?"flex justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all delay-50 duration-500":"hidden"}><button  className="px-4 py-2 bg-slate-800 text-2xl rounded-md text-white font-bold font-serif">Play Again</button></div>
      </div>
  )

}

export default App