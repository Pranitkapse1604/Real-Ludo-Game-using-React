import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';

import { changePlayersTurn, changecanTokenMoved, updateCurrPlayer, updateval } from '../src/features/ludo/ludoSlice';


function Roller() {
    let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
    const dispatch=useDispatch();
    let currPlayer=useSelector((state)=>state.ludoslice.currPlayer);

  
   let [randomval,setrandomval] = useState(0);
   const generateRandom=()=>{
     if(canTokenMove)
       {
         return;
       }
     let randomvalue=Math.random()*10;
     randomvalue=Math.round(randomvalue)%6;
     if(randomvalue===0){
       randomvalue=6;
     }
     setrandomval(randomvalue);
     dispatch(updateval(randomvalue));
     dispatch(changecanTokenMoved());
        
   }

  return (
    <div className="w-[100%]  transition delay-500 border-[5px] border-slate-800 rounded-sm h-[40px]  gap-1 bg-slate-800 flex ">
        <div onClick={generateRandom} className="w-[50%]  text-gray-800 bg-white cursor-pointer h-full flex items-center justify-center rounded-sm  font-bold font-serif">{canTokenMove?"Move":"Roll"}</div>
        <div className={ (canTokenMove)?"w-[50%] h-full rounded-sm flex justify-center items-center bg-pink-500 text-black  font-bold text-2xl":"w-[50%] h-full rounded-sm flex justify-center items-center bg-gray-800 text-white font-bold text-2xl"}>{randomval}</div>
    </div>
  )
}

export default Roller