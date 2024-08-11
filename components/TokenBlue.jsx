import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatepositionRed,changePlayersTurn,changecanTokenMoved,updatepositionBlue,updatepositionYellow,updatepositionGreen } from '../src/features/ludo/ludoSlice';

let TokenArray=[false,false,false,false]

function TokenBlue(props) {
 let Player2Turn = useSelector((state)=>state.ludoslice.playersTurn[1]);
 

 let randomval=useSelector((state)=>state.ludoslice.value1);
 let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
 let positionsred=useSelector((state)=>state.ludoslice.positionRed);
 let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
 let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
 let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);

   let dispatch=useDispatch();

   const canTokenAnimate=()=>{

    for(let i=0;i<4;i++){
      if(positionBlue[i]>0&&positionBlue[i]<=56){
       TokenArray[i]=true
     }else {
        TokenArray[i]=false
     }
    }  
  }

  useEffect(()=>{
    canTokenAnimate()
  },[positionBlue])

  
  const updatepositionhere =()=>{
   if(canTokenMove&&Player2Turn&&positionBlue[props.index]===0&&randomval===6){
    dispatch(updatepositionBlue({index:props.index,value:1}))
    dispatch(changecanTokenMoved());
    canTokenAnimate()
   }
   else if(canTokenMove  && Player2Turn && positionBlue[props.index]!=0&&positionBlue[props.index]<=56){
    dispatch(updatepositionBlue({index:props.index,value:randomval,}));
    dispatch(changecanTokenMoved());
    canTokenAnimate()

       if(positionBlue[props.index]+randomval!=14&&positionBlue[props.index]+randomval!=27&&positionBlue[props.index]+randomval!=40){
// for path 1 of blue
  if(positionBlue[props.index]+randomval<13){
    for(let i = 0;i < 4 ; i++){
      if(positionBlue[props.index]+randomval===positionsred[i]-13){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval===positionYellow[i]-39&&positionYellow[i]<52){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval===positionGreen[i]-26){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
    }   
  }
  //for path2 for blue
  else if(positionBlue[props.index]+randomval>=13&&positionBlue[props.index]+randomval<26){
    for(let i = 0;i < 4 ; i++){
      if(positionBlue[props.index]+randomval===positionsred[i]-13){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval-13===positionYellow[i]&&positionYellow[i]){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval===positionGreen[i]-26&&positionGreen[i]<=52){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
    }    
  }
  //for path 3 for blue
  else if(positionBlue[props.index]+randomval>=26&&positionBlue[props.index]+randomval<39){
    for(let i = 0;i < 4 ; i++){
      if(positionBlue[props.index]+randomval===positionsred[i]-13&&positionsred[i]<52){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval-13===positionYellow[i]){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval-26===positionGreen[i]){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
    }    
  } //for path 4
  else if(positionBlue[props.index]+randomval>=39&&positionBlue[props.index]+randomval<52){
    for(let i = 0;i < 4 ; i++){
      if(positionBlue[props.index]+randomval-39===positionsred[i]){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval-13===positionYellow[i]){
        
         dispatch(updatepositionYellow({index:i,value:0}));
         return;

      }else if(positionBlue[props.index]+randomval-26===positionGreen[i]){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
    }    
  }
       }
  if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:1,nextPlayer:2}))
    }
    
   }
  }
  return (
    <div className={(canTokenMove&&Player2Turn)?(randomval===6&&positionBlue[props.index]<=56)?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":(TokenArray[props.index])?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black "}>
    <div onClick={updatepositionhere} className={(canTokenMove&&Player2Turn)?(randomval===6&&positionBlue[props.index]<=56)?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-sky-500  tablet:border-[2px] border-[1.5px] border-white":(TokenArray[props.index])?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-sky-500  tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-sky-500  tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-sky-500  tablet:border-[2px] border-[1.5px] border-white"}></div>
   </div>
  )
}

export default TokenBlue