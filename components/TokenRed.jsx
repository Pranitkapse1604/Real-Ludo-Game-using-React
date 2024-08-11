import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatepositionRed,changePlayersTurn,changecanTokenMoved,updatepositionBlue,updatepositionYellow,updatepositionGreen } from '../src/features/ludo/ludoSlice';

let TokenArray=[false,false,false,false]

function TokenRed(props) {
 let randomval=useSelector((state)=>state.ludoslice.value1);
 let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
 let Player1Turn = useSelector((state)=>state.ludoslice.playersTurn[0]);
 let positionsred=useSelector((state)=>state.ludoslice.positionRed);
 let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
 let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
 let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);

 

   let dispatch=useDispatch();
const canTokenAnimate=()=>{

  for(let i=0;i<4;i++){
    if(positionsred[i]>0&&positionsred[i]<=56){
     TokenArray[i]=true
   }else {
      TokenArray[i]=false
   }
  }  
}

useEffect(()=>{
  canTokenAnimate()
},[positionsred])

  const updatepositionhere =()=>{

   if(canTokenMove&&Player1Turn&&positionsred[props.index]===0&&randomval===6){
    dispatch(updatepositionRed({index:props.index,value:1}))
    dispatch(changecanTokenMoved());
    canTokenAnimate();
   }
   else if(canTokenMove && Player1Turn&&positionsred[props.index]!=0&&positionsred[props.index]<=56){
    dispatch(updatepositionRed({index:props.index,value:randomval,}));
    dispatch(changecanTokenMoved());
    canTokenAnimate();
    // new code
   
// for path 1
if(positionsred[props.index]+randomval!=14&&positionsred[props.index]+randomval!=27&&positionsred[props.index]+randomval!=40){
  if(positionsred[props.index]+randomval<13){
    for(let i = 0;i < 4 ; i++){
      if(positionsred[props.index]+randomval===positionBlue[i]-39&&positionBlue[i]<52){

         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval===positionYellow[i]-26){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval===positionGreen[i]-13){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
    }    
  }
  //for path2
  else if(positionsred[props.index]+randomval>=13&&positionsred[props.index]+randomval<26){
    for(let i = 0;i < 4 ; i++){
      if(positionsred[props.index]+randomval-13===positionBlue[i]&&positionBlue[i]>0){

         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval===positionYellow[i]-26&&positionYellow[i]<52){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval===positionGreen[i]-13){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
    }     
  }
  //for path 3
  else if(positionsred[props.index]+randomval>=26&&positionsred[props.index]+randomval<39){
    for(let i = 0;i < 4 ; i++){
      if(positionsred[props.index]+randomval-13===positionBlue[i]){

         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval-26===positionYellow[i]&&positionYellow[i]>0){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval===positionGreen[i]-13&&positionGreen[i]<=52){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } }
    
 if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
    }    
    
  } //for path 4
  else if(positionsred[props.index]+randomval>=39&&positionsred[props.index]+randomval<52){
    for(let i = 0;i < 4 ; i++){
      if(positionsred[props.index]+randomval-13===positionBlue[i]){

         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval-26===positionYellow[i]){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionsred[props.index]+randomval-39===positionGreen[i]&&positionGreen[i]>0){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
    }    
  }

}
  if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:0,nextPlayer:1}))
    }
    

   }
  }
  return (
    <div className={(canTokenMove&&Player1Turn)?(randomval===6&&positionsred[props.index]<=56)?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":(TokenArray[props.index])?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black "}>
     <div onClick={updatepositionhere} className={(canTokenMove&&Player1Turn)?(randomval===6&&positionsred[props.index]<=56)?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-red-500  tablet:border-[2px] border-[1.5px] border-white":(TokenArray[props.index])?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-red-500  tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-red-500  tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-red-500  tablet:border-[2px] border-[1.5px] border-white"}></div>
    </div>
  )
}

export default TokenRed