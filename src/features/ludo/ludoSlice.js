import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value1: 0,
  positionRed:[0,0,0,0],
  positionBlue:[0,0,0,0],
  positionYellow:[0,0,0,0],
  positionGreen:[0,0,0,0],
  playersTurn:[true,false,false,false],
  currPlayer:0,
  canTokenMove:false,
  winnedPlayer:0,
}

export const ludoSlice = createSlice(
{
    name:"ludo",
    initialState ,
    reducers:{
        updateval:(state,action)=>{
            state.value1=action.payload;
        },
        updatepositionRed: (state, action) => {
            const { index, value } = action.payload;
            if(value!=0){
              state.positionRed[index] += value;
            }else{
              state.positionRed[index]=0;
            }
            
          },
        updatepositionBlue:(state,action)=>{
          const {index , value} = action.payload
          if(value!=0){
            state.positionBlue[index] += value;
          }else{
            state.positionBlue[index]=0;
          }
        },
        updatepositionYellow:(state,action)=>{
          const{index , value}=action.payload;
          if(value!=0){
            state.positionYellow[index] += value;
          }else{
            state.positionYellow[index]=0;
          }
        }
        ,
        updatepositionGreen:(state,action)=>{
          const{index,value}=action.payload;
          if(value!=0){
            state.positionGreen[index] += value;
          }else{
            state.positionGreen[index]=0;
          }
        },
        changePlayersTurn:(state,action)=>{
          const {currentPlayer,nextPlayer}=action.payload;
          state.playersTurn[currentPlayer]=false;
          state.playersTurn[nextPlayer]=true;
        },
        updateCurrPlayer:(state)=>{
          if(state.currPlayer<3){
             state.currPlayer+=1;
          }else{
            state.currPlayer=0;
          }
        },
        changecanTokenMoved:(state)=>{
          state.canTokenMove=!state.canTokenMove;
        },
        restart:(state)=>{
          for(let i=0;i<4;i++){
            state.positionRed[i]=0;
            state.positionBlue[i]=0;
            state.positionYellow[i]=0;
            state.positionGreen[i]=0;
          }
          state.winnedPlayer=0;

          state.playersTurn[0]=true;
            for(let i=1;i<4;i++ ){
              state.playersTurn[i]=false;
            }
            
        },
        updateWinnedPlayer:(state)=>{
          state.winnedPlayer+=1;
        },
        
    },
})

export const {updateWinnedPlayer,restart,changecanTokenMoved,updateCurrPlayer,updateval,updatepositionRed,updatepositionBlue,updatepositionYellow,updatepositionGreen,changePlayersTurn} = ludoSlice.actions;

export default ludoSlice.reducer;