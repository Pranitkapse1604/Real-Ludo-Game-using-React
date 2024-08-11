import React from 'react'
import TokenRed from './TokenRed.jsx';
import TokenBlue from './TokenBlue.jsx';
import TokenYellow from './TokenYellow.jsx';
import TokenGreen from './TokenGreen.jsx';
import { useSelector } from 'react-redux';

function Winnerbox() {
  let positionRed=useSelector((state)=>state.ludoslice.positionRed);
  let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
  let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
   let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);

  return (
    <div className="flex flex-wrap box-shaddow ">
      <div className="w-1/3 h-1/3 "></div>
      <div className="w-1/3 h-1/3  user-select-none flex-wrap  flex items-center justify-center">
      {
        positionBlue[0]>56&&<TokenBlue index={0}/>
      }
      {
        positionBlue[1]>56&&<TokenBlue index={1}/>
      }
      {
        positionBlue[2]>56&&<TokenBlue index={2}/>
      }
      {
        positionBlue[3]>56&&<TokenBlue index={3}/>
      }
      </div>
      <div className="w-1/3 h-1/3 "></div>
      <div className="w-1/3 h-1/3  user-select-none flex-wrap flex items-center justify-center">
        {
          (positionRed[0]>56)&&<TokenRed index={0}/>
        }
        {
          (positionRed[1]>56)&&<TokenRed index={1}/>
        }
        {
          (positionRed[2]>56)&&<TokenRed index={2}/>
        }
        {
          (positionRed[3]>56)&&<TokenRed index={3}/>
        }
      </div>
      <div className="w-1/3 h-1/3 "></div>
      <div className="w-1/3 h-1/3  flex flex-wrap items-center justify-center">
      { 
        positionYellow[0]>56&&<TokenYellow index={0}/>
      }
       { 
        positionYellow[1]>56&&<TokenYellow index={1}/>
      }
       { 
        positionYellow[2]>56&&<TokenYellow index={2}/>
      }
       { 
        positionYellow[3]>56&&<TokenYellow index={3}/>
      }
      </div>
      <div className="w-1/3 h-1/3 "></div>
      <div className="w-1/3 h-1/3 flex flex-wrap items-center justify-center">
      {
        positionGreen[0]>56&&<TokenGreen index={0}/>
      }
      {
        positionGreen[1]>56&&<TokenGreen index={1}/>
      }
      {
        positionGreen[2]>56&&<TokenGreen index={2}/>
      }
      {
        positionGreen[3]>56&&<TokenGreen index={3}/>
      }
      </div>
      <div className="w-1/3 h-1/3 "></div>
    </div>
  )
}

export default Winnerbox