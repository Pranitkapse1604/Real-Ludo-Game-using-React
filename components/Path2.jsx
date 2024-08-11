

import React from 'react'
import { useSelector } from 'react-redux';
import TokenRed from './TokenRed.jsx';
import TokenBlue from './TokenBlue.jsx';
import TokenYellow from './TokenYellow.jsx';
import TokenGreen from './TokenGreen.jsx';
function Path2() {
  let positionRed=useSelector((state)=>state.ludoslice.positionRed);
   let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
   let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
   let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);
  return (
    <div className=' gridviewPath2 border border-black border-l-0 border-r-0'>
      {
        [19,20,21,22,23,24,
          99,98,97,96,95,25,
          31,30,29,28,27,26].map((item)=>{
          return <div key={item} className=" flex items-center justify-center flex-wrap">
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
          
          {/* bluetokes */}

          {
            (item===(positionBlue[0]+13))&&<TokenBlue index={0} />
           
          } 
          { (item===(positionBlue[1]+13))&&<TokenBlue index={1}/>}
          {
             (item===(positionBlue[2]+13))&&<TokenBlue index={2} />
          }
          {
             (item===(positionBlue[3]+13))&&<TokenBlue index={3} />
          }

{
            (positionYellow[0]>51)?(item===positionYellow[0]+43)&&<TokenYellow index={0} />:(positionYellow[0]>39)?(item===positionYellow[0]-26)&&<TokenYellow index={0} />:(item===positionYellow[0]+26&&positionYellow[0]>0)&&<TokenYellow index={0} />

          } 
          {
            (positionYellow[1]>51)?(item===positionYellow[1]+43)&&<TokenYellow index={1} />:(positionYellow[1]>39)?(item===positionYellow[1]-26)&&<TokenYellow index={1} />:(item===positionYellow[1]+26&&positionYellow[1]>0)&&<TokenYellow index={1} />
          }
            {
            (positionYellow[2]>51)?(item===positionYellow[2]+43)&&<TokenYellow index={2} />:(positionYellow[2]>39)?(item===positionYellow[2]-26)&&<TokenYellow index={2} />:(item===positionYellow[2]+26&&positionYellow[2]>0)&&<TokenYellow index={2} />
            
            }
          {
            (positionYellow[3]>51)?(item===positionYellow[3]+43)&&<TokenYellow index={3} />:(positionYellow[3]>39)?(item===positionYellow[3]-26)&&<TokenYellow index={3} />:(item===positionYellow[3]+26&&positionYellow[3]>0)&&<TokenYellow index={3} />
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

export default Path2