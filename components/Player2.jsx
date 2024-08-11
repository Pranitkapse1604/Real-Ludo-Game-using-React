
import React, { useEffect } from 'react'
import {updateWinnedPlayer,  updatepositionBlue,changePlayersTurn,changecanTokenMoved } from '../src/features/ludo/ludoSlice';
import { useDispatch , useSelector } from 'react-redux';
import TokenBlue from './TokenBlue';
let isWinned=false;

function Player2() {

  let dispatch=useDispatch();
  let Player2Turn = useSelector((state)=>state.ludoslice.playersTurn[1]);
  let randomval=useSelector((state)=>state.ludoslice.value1);
  let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
  let positions=useSelector((state)=>state.ludoslice.positionBlue);
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
      // if(Player2Turn&&canTokenMove){
      //   dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
      //   dispatch(changecanTokenMoved());
      // }       
      
      dispatch(updateWinnedPlayer());
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

     if(canTokenMove===false&&Player2Turn){
      for(let position of positions){
        if(position<=56){
          return;
        }
      }
      dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
     
    
    }

     if(canTokenMove  && Player2Turn){
       dispatch(changecanTokenMoved());    
       if(randomval!=6){
        dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
      }    
     }
    }
      
    if(randomval===6&&Player2Turn){
      for(let position of positions){
        if(position<=56){
          return;
        }
      }
      dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))      
    }
 },[canTokenMove,Player2Turn])

  return (
    <div className={Player2Turn?" relative border-[2px] border-white flex items-center justify-center":"relative border-[2px] border-white flex items-center justify-center"}>
            {(isWinned&&winnedPlayer!=0)&&<div className="absolute left-0 top-[-40px] bg-slate-800  shadow-xl text-white  px-2 py-[6px] w-full text-center z-50 transition-all delay-100  font-serif font-bold">Winned</div> }

       <div className="w-[60%] h-[60%] flex flex-wrap justify-between items-center p-2 bg-white">
    
{
        [0,1,2,3].map((item,index)=>{
          return <div key={item} className="w-[34%] h-[34%] bg-sky-500 m-0 rounded-[50%]  flex items-center justify-center">
          {
            (item===positions[0]&&positions[0]===0)&&(<TokenBlue index={0}/>)
          }
          {           
            (item===positions[1]+1&&positions[1]===0)&&(<TokenBlue index={1}/>)
          }
          {
            (item===positions[2]+2&&positions[2]===0)&&(<TokenBlue index={2}/>)

          }{
            (item===positions[3]+3&&positions[3]===0)&&(<TokenBlue index={3}/>)

          }
          </div>
        })
      }
    
    </div></div>
  )
}

export default Player2

