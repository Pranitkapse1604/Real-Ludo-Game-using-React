

import React, { useEffect } from 'react'
import {updateWinnedPlayer,  updatepositionGreen,changePlayersTurn,changecanTokenMoved } from '../src/features/ludo/ludoSlice';
import { useDispatch, useSelector } from 'react-redux';
import TokenGreen from './TokenGreen';
let isWinned=false;

function Player4() {

  let dispatch=useDispatch();
  let Player4Turn = useSelector((state)=>state.ludoslice.playersTurn[3]);
  let randomval=useSelector((state)=>state.ludoslice.value1);
  let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
  let positions=useSelector((state)=>state.ludoslice.positionGreen);
  let winnedPlayer = useSelector((state)=>state.ludoslice.winnedPlayer);

  useEffect(()=>{
   
      if(winnedPlayer===0){
        isWinned=false;
      }
     

    if(isWinned===false){
      for(let position of positions){
        if(position<=56){
          return;
        }
      }
      // if(Player4Turn&&canTokenMove){
      //   dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
      //   dispatch(changecanTokenMoved());
      // }

        dispatch(updateWinnedPlayer());
        isWinned=true;
       }
    
   
   },[canTokenMove])

  useEffect(()=>{
     
    if(randomval!=6){
     for(let position of positions){
       if(position>0&&position<=56){
         return;
       }
     }
    
     if(canTokenMove===false&&Player4Turn){
      for(let position of positions){
        if(position<=56){
          return;
        }
      }
      dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
      
    }
     if(canTokenMove  && Player4Turn){     
       dispatch(changecanTokenMoved());
      if(randomval!=6){
        dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
      } 
     }
    }

    if(randomval===6&&Player4Turn){
      for(let position of positions){
        if(position<=56){
          return;
        }
      }
      dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))     
     }
         
 },[canTokenMove,Player4Turn])

  return (
    <div className={Player4Turn?"relative border-[2px] border-white flex items-center justify-center":"border-[2px] border-white flex relative items-center justify-center"}>
     {(isWinned&&winnedPlayer!=0)&&<div className="absolute left-0 bottom-[-40px] bg-slate-800  shadow-xl text-white  px-2 py-[6px] w-full text-center z-50 transition-all delay-100  font-serif font-bold">Winned</div> }

    <div className="w-[60%] h-[60%] flex flex-wrap justify-between items-center p-2 bg-white">
     
     {
       [0,1,2,3].map((item)=>{
          return <div key={item} className="w-[34%] h-[34%] m-0 bg-green-600 rounded-[50%]  flex items-center justify-center">
        {
            (item===positions[0]&&positions[0]===0)&&(<TokenGreen index={0}/>)
          }
          {           
            (item===positions[1]+1&&positions[1]===0)&&(<TokenGreen index={1}/>)
          }
          {
            (item===positions[2]+2&&positions[2]===0)&&(<TokenGreen index={2}/>)

          }{
            (item===positions[3]+3&&positions[3]===0)&&(<TokenGreen index={3}/>)

          }
          </div>
        })
      }
    </div>
    </div>
  )
}
export default Player4