import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatepositionRed,changePlayersTurn,changecanTokenMoved,updatepositionBlue,updatepositionYellow,updatepositionGreen } from '../src/features/ludo/ludoSlice';

let TokenArray=[false,false,false,false]

function TokenYellow(props) {
 
 let randomval=useSelector((state)=>state.ludoslice.value1);
 let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
 let positionsred=useSelector((state)=>state.ludoslice.positionRed);
 let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
 let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
 let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);

 let Player3Turn = useSelector((state)=>state.ludoslice.playersTurn[2]);

   let dispatch=useDispatch();

   const canTokenAnimate=()=>{

    
    for(let i=0;i<4;i++){
      if(positionYellow[i]>0&&positionYellow[i]<=56){
       TokenArray[i]=true
     }else {
        TokenArray[i]=false
     }
    }  
  }

  useEffect(()=>{
    canTokenAnimate()
  },[positionYellow])

  const updatepositionhere =()=>{
   if(canTokenMove&&Player3Turn&&positionYellow[props.index]===0&&randomval===6){
    dispatch(updatepositionYellow({index:props.index,value:1}))
    dispatch(changecanTokenMoved());
    canTokenAnimate()
   }
   else if(canTokenMove  && Player3Turn && positionYellow[props.index]!=0&&positionYellow[props.index]<=56){
    dispatch(updatepositionYellow({index:props.index,value:randomval,}));
    dispatch(changecanTokenMoved());
    canTokenAnimate()

    if(positionYellow[props.index]+randomval!=14&&positionYellow[props.index]+randomval!=27&&positionYellow[props.index]+randomval!=40){
    // for path 1 of yellow
  if(positionYellow[props.index]+randomval<13){
    for(let i = 0;i < 4 ; i++){
      if(positionYellow[props.index]+randomval===positionsred[i]-26){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval===positionBlue[i]-13){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval===positionGreen[i]-39&&positionGreen[i]<52){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:2,nextPlayer:3}))
    }    
  }
  //for path2 for yellow
  else if(positionYellow[props.index]+randomval>=13&&positionYellow[props.index]+randomval<26){
    for(let i = 0;i < 4 ; i++){
      if(positionYellow[props.index]+randomval===positionsred[i]-26&&positionsred[i]<52){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval===positionBlue[i]-13){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval-13===positionGreen[i]&&positionGreen[i]>0){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:2,nextPlayer:3}))
    }    
  }
  //for path 3 for yellow
  else if(positionYellow[props.index]+randomval>=26&&positionYellow[props.index]+randomval<39){
    for(let i = 0;i < 4 ; i++){
      if(positionYellow[props.index]+randomval-26===positionsred[i]&&positionsred[i]>0){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval===positionBlue[i]-13&&positionBlue[i]<52){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval-13===positionGreen[i]){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:2,nextPlayer:3}))
    }    
  } //for path 4 for yellow
  else if(positionYellow[props.index]+randomval>=39&&positionYellow[props.index]+randomval<52){
    for(let i = 0;i < 4 ; i++){
      if(positionYellow[props.index]+randomval-26===positionsred[i]){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval-39===positionBlue[i]&&positionBlue[i]>0){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionYellow[props.index]+randomval-13===positionGreen[i]){
        dispatch(updatepositionGreen({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:2,nextPlayer:3}))
    }    
  }
    }
  if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:2,nextPlayer:3}))
    }
    
  }
  }
  return (
     <div className={(canTokenMove&&Player3Turn)?(randomval===6&&positionYellow[props.index]<=56)?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":(TokenArray[props.index])?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black "}>
    <div onClick={updatepositionhere} className={(canTokenMove&&Player3Turn)?(randomval===6&&positionYellow[props.index]<=56)?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-yellow-400  tablet:border-[2px] border-[1.5px] border-white":(TokenArray[props.index])?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-yellow-400  tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-yellow-400  tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-yellow-400  tablet:border-[2px] border-[1.5px] border-white"}></div>
   </div>
  )
}

export default TokenYellow