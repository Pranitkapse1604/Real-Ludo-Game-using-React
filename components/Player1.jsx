import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {updateWinnedPlayer, changePlayersTurn, changecanTokenMoved,  updatepositionRed } from '../src/features/ludo/ludoSlice';
import TokenRed from './TokenRed';

let isWinned=false;
function Player1() {
  let dispatch=useDispatch();
  let Player1Turn = useSelector((state)=>state.ludoslice.playersTurn[0]);
  let randomval=useSelector((state)=>state.ludoslice.value1);
   let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
   let positions=useSelector((state)=>state.ludoslice.positionRed);
   let winnedPlayer = useSelector((state)=>state.ludoslice.winnedPlayer);


   useEffect(()=>{
     //winnedPlayer counts no. of players wins
     
      if(winnedPlayer===0){
        isWinned=false;
      }
     

    //check winned or not
    if(isWinned===false){

      for(let position of positions){
        if(position<=56){
          return;
        }
      }
        
        dispatch(updateWinnedPlayer());
        // if(Player1Turn&&canTokenMove){
        //   dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
        //   dispatch(changecanTokenMoved());
        // }

        isWinned=true;
       }
    
   
   },[canTokenMove,positions])

   
   useEffect(()=>{
     
    if(randomval!=6){
     for(let position of positions){
       if(position>0&&position<=56){
         return;
       }
     }
     //check winned or not
     if(canTokenMove===false&&Player1Turn){
       for(let position of positions){
         if(position<=56){
           return;
         }
       }
       dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
      
     }
    
     //checking moving to next player or not
     if(canTokenMove  && Player1Turn){
       dispatch(changecanTokenMoved());
      
       if(randomval!=6){
         dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
       }
     }

    }

    if(randomval===6&&Player1Turn){
        for(let position of positions){
          if(position<=56){
            return;
          }
        }
        dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))     
      
    }
         
 },[canTokenMove,Player1Turn])


  return (
    <div className={Player1Turn?"border-[2px] relative border-white  flex items-center justify-center":"border-[2px] border-white flex relative items-center justify-center"}>
      {(isWinned&&winnedPlayer!=0)&&<div className="absolute left-0 top-[-40px] bg-slate-800  shadow-xl text-white  px-2 py-[6px] w-full text-center z-50 transition-all delay-100  font-serif font-bold">Winned</div> }
      <div className="w-[60%] h-[60%] flex flex-wrap justify-between items-center p-2 bg-white ">
        
        {
          [0,1,2,3].map((item)=>{
             return <div key={item} className="w-[34%] h-[34%] bg-red-600 m-0 rounded-[50%]  flex items-center justify-center">
               {
            (item===positions[0]&&positions[0]===0)&&(<TokenRed index={0}/>)
          }
          {           
            (item===positions[1]+1&&positions[1]===0)&&(<TokenRed index={1}/>)
          }
          {
            (item===positions[2]+2&&positions[2]===0)&&(<TokenRed index={2}/>)

          }{
            (item===positions[3]+3&&positions[3]===0)&&(<TokenRed index={3}/>)

          }
             </div>
          })
        } 
      </div>
    </div>
  )
}

export default Player1