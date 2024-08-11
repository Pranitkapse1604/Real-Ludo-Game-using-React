import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatepositionRed,changePlayersTurn,changecanTokenMoved,updatepositionBlue,updatepositionYellow,updatepositionGreen } from '../src/features/ludo/ludoSlice';

let TokenArray=[false,false,false,false]

function TokenGreen(props) {
  let randomval=useSelector((state)=>state.ludoslice.value1);
  let canTokenMove = useSelector((state)=>state.ludoslice.canTokenMove);
  let positionsred=useSelector((state)=>state.ludoslice.positionRed);
  let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
  let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
  let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);

 let Player4Turn = useSelector((state)=>state.ludoslice.playersTurn[3]);

   let dispatch=useDispatch();

   const canTokenAnimate=()=>{

    for(let i=0;i<4;i++){
      if(positionGreen[i]>0&&positionGreen[i]<=56){
       TokenArray[i]=true
     }else {
        TokenArray[i]=false
     }
    }  
  }

  useEffect(()=>{
    canTokenAnimate()
  },[positionGreen])

  const updatepositionhere =()=>{
   if(canTokenMove&&Player4Turn&&positionGreen[props.index]===0&&randomval===6){
    dispatch(updatepositionGreen({index:props.index,value:1}))
    dispatch(changecanTokenMoved());
    canTokenAnimate();
   }
   else if(canTokenMove  && Player4Turn&&positionGreen[props.index]!=0&&positionGreen[props.index]<=56){
    dispatch(updatepositionGreen({index:props.index,value:randomval,}));
    dispatch(changecanTokenMoved());
    canTokenAnimate();

    if(positionGreen[props.index]+randomval!=14&&positionGreen[props.index]+randomval!=27&&positionGreen[props.index]+randomval!=40){
  // for path 1 of green
  if(positionGreen[props.index]+randomval<13){
    for(let i = 0;i < 4 ; i++){
      if(positionGreen[props.index]+randomval===positionsred[i]-39&&positionsred[i]<52){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval===positionBlue[i]-26){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval===positionYellow[i]-13){
        dispatch(updatepositionYellow({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
    }   
  }
  //for path2 for green
  else if(positionGreen[props.index]+randomval>=13&&positionGreen[props.index]+randomval<26){
    for(let i = 0;i < 4 ; i++){

      if(positionGreen[props.index]+randomval-13===positionsred[i]&&positionsred[i]>0){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval===positionBlue[i]-26&&positionBlue[i]<52){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval===positionYellow[i]-13){
        dispatch(updatepositionYellow({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
    }    
  }
  //for path 3 for yellow
  else if(positionGreen[props.index]+randomval>=26&&positionGreen[props.index]+randomval<39){
    for(let i = 0;i < 4 ; i++){
      if(positionGreen[props.index]+randomval-13===positionsred[i]){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval-26===positionBlue[i]&&positionBlue[i]>0){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval===positionYellow[i]-13&&positionYellow[i]<52){
        dispatch(updatepositionYellow({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
    }    
  } //for path 4 for green 
  else if(positionGreen[props.index]+randomval>=39&&positionGreen[props.index]+randomval<52){
    for(let i = 0;i < 4 ; i++){
      if(positionGreen[props.index]+randomval-13===positionsred[i]){

         dispatch(updatepositionRed({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval-26===positionBlue[i]){
        
         dispatch(updatepositionBlue({index:i,value:0}));
         return;

      }else if(positionGreen[props.index]+randomval-39===positionYellow[i]&&positionYellow[i]>0){
        dispatch(updatepositionYellow({index:i,value:0}));
        return;
      } 
    }
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
    }    
  }
    }
 
    if(randomval!=6){
      dispatch(changePlayersTurn({currentPlayer:3,nextPlayer:0}))
    } 
   }
  }
  return (
    <div className={(canTokenMove&&Player4Turn)?(randomval===6&&positionGreen[props.index]<=56)?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":(TokenArray[props.index])?"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black border-dashed animate-scaler ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black ":"w-[40%] h-[40%] rounded-[50%] tablet:border-[1.5px] border-[1px] border-black "}>
    <div onClick={updatepositionhere} className={(canTokenMove&&Player4Turn)?(randomval===6&&positionGreen[props.index]<=56)?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-green-400  tablet:border-[2px] border-[1.5px] border-white":(TokenArray[props.index])?"cursor-pointer animate-spin w-full h-full border-dashed  rounded-[50%] bg-green-400  tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-green-400   tablet:border-[2px] border-[1.5px] border-white":"cursor-pointer  w-full h-full  rounded-[50%] bg-green-400   tablet:border-[2px] border-[1.5px] border-white"}></div>
   </div>
  )
}

export default TokenGreen