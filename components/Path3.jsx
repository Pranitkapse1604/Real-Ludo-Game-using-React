
import React from 'react'
import { useSelector } from 'react-redux';
import TokenRed from './TokenRed.jsx';
import TokenBlue from './TokenBlue.jsx';
import TokenYellow from './TokenYellow.jsx';
import TokenGreen from './TokenGreen.jsx';

function Path3() {
  let positionRed=useSelector((state)=>state.ludoslice.positionRed);
   let positionBlue=useSelector((state)=>state.ludoslice.positionBlue);
   let positionYellow=useSelector((state)=>state.ludoslice.positionYellow);
  let positionGreen=useSelector((state)=>state.ludoslice.positionGreen);
  return (
    <div className=" gridviewPath1 border border-black border-t-0 border-b-0">
      {
        [44,99,32,
        43,98,33,
        42,97,34,
        41,96,35,
        40,95,36,
        39,38,37].map((item)=>{
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
            (item===(positionYellow[0]+26))&&<TokenYellow index={0} />
           
          } 
          { (item===(positionYellow[1]+26))&&<TokenYellow index={1}/>}
          {
             (item===(positionYellow[2]+26))&&<TokenYellow index={2} />
          }
          {
             (item===(positionYellow[3]+26))&&<TokenYellow index={3} />
          }

         {
           
            (positionGreen[0]>51)?(item===positionGreen[0]+43)&&<TokenGreen index={0} />:(positionGreen[0]>39)?(item===positionGreen[0]-13)&&<TokenGreen index={0} />:(item===positionGreen[0]+39&&positionGreen[0]>0)&&<TokenGreen index={0} />

          } 
          { 
          (positionGreen[1]>51)?(item===positionGreen[1]+43)&&<TokenGreen index={1} />:(positionGreen[1]>39)?(item===positionGreen[1]-13)&&<TokenGreen index={1} />:(item===positionGreen[1]+39&&positionGreen[1]>0)&&<TokenGreen index={1} />

          }
          
          {
            (positionGreen[2]>51)?(item===positionGreen[2]+43)&&<TokenGreen index={2} />:(positionGreen[2]>39)?(item===positionGreen[2]-13)&&<TokenGreen index={2} />:(item===positionGreen[2]+39&&positionGreen[2]>0)&&<TokenGreen index={2} />
          }
          {
            (positionGreen[3]>51)?(item===positionGreen[3]+43)&&<TokenGreen index={3} />:(positionGreen[3]>39)?(item===positionGreen[3]-13)&&<TokenGreen index={3} />:(item===positionGreen[3]+39&&positionGreen[3]>0)&&<TokenGreen index={3} />
          }
         </div>
        })
      }
    </div>
  )
}

export default Path3