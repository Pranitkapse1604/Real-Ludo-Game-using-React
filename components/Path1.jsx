
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import TokenRed from './TokenRed.jsx';
import TokenBlue from './TokenBlue.jsx';
import TokenYellow from './TokenYellow.jsx';
import TokenGreen from './TokenGreen.jsx';

function Path1() {
  let positionRed=useSelector((state)=>state.ludoslice.positionRed);
  let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
  let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
   let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);
   
  return (
    <div className=" gridviewPath1 border border-black border-t-0 border-b-0">
      {
        [11,12,13,
          10,95,14,
          9,96,15,
          8,97,16,
          7,98,17,
          6,99,18].map((item)=>{
          return <div key={item} className=' flex items-center justify-center flex-wrap'>
        
          {
            (item===positionRed[0])&&<TokenRed index={0} />
           
          } 
          { (item===positionRed[1])&&<TokenRed index={1}/>}
          {
             (item===positionRed[2])&&<TokenRed index={2} />
          }
          {
             (item===positionRed[3])&&<TokenRed index={3} />
          }
          
          {
           
            (positionBlue[0]>51)?(item===positionBlue[0]+43)&&<TokenBlue index={0} />:(positionBlue[0]>39)?(item===positionBlue[0]-39)&&<TokenBlue index={0} />:(item===positionBlue[0]+13&&positionBlue[0]>0)&&<TokenBlue index={0} />

          } 
          { 
            (positionBlue[1]>51)?(item===positionBlue[1]+43)&&<TokenBlue index={1} />:(positionBlue[1]>39)?(item===positionBlue[1]-39)&&<TokenBlue index={1} />:(item===positionBlue[1]+13&&positionBlue[1]>0)&&<TokenBlue index={1} />
          }
          {
            (positionBlue[2]>51)?(item===positionBlue[2]+43)&&<TokenBlue index={2} />:(positionBlue[2]>39)?(item===positionBlue[2]-39)&&<TokenBlue index={2} />:(item===positionBlue[2]+13&&positionBlue[2]>0)&&<TokenBlue index={2} />

          }
          {
            (positionBlue[3]>51)?(item===positionBlue[3]+43)&&<TokenBlue index={3} />:(positionBlue[3]>39)?(item===positionBlue[3]-39)&&<TokenBlue index={3} />:(item===positionBlue[3]+13&&positionBlue[3]>0)&&<TokenBlue index={3} />
          }

{
            (item===(positionYellow[0]-26))&&<TokenYellow index={0} />
           
          } 
          { (item===(positionYellow[1]-26))&&<TokenYellow index={1}/>}
          {
             (item===(positionYellow[2]-26))&&<TokenYellow index={2} />
          }
          {
             (item===(positionYellow[3]-26))&&<TokenYellow index={3} />
          }

{
            (item===(positionGreen[0]-13))&&<TokenGreen index={0} />
           
          } 
          { (item===(positionGreen[1]-13))&&<TokenGreen index={1}/>}
          {
             (item===(positionGreen[2]-13))&&<TokenGreen index={2} />
          }
          {
             (item===(positionGreen[3]-13))&&<TokenGreen index={3} />
          }
          </div>
        })
      }
    </div>
  )
}

export default Path1