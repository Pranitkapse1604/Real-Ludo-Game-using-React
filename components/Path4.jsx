
    
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
      <div className=" gridviewPath2 border border-black border-l-0 border-r-0">
      {
        [52,1,2,3,4,5,
        51,95,96,97,98,99,
          50,49,48,47,46,45].map((item)=>{
          return <div key={item} className='  flex items-center justify-center flex-wrap'>
         {
           (positionRed[0]>51)?(item===positionRed[0]+43)&&<TokenRed index={0} />:(item===positionRed[0])&&<TokenRed index={0} />
           
          } 
          { 
           (positionRed[1]>51)?(item===positionRed[1]+43)&&<TokenRed index={1} />:(item===positionRed[1])&&<TokenRed index={1} />
          } 
          {
           (positionRed[2]>51)?(item===positionRed[2]+43)&&<TokenRed index={2} />:(item===positionRed[2])&&<TokenRed index={2} />
         }
          {
           (positionRed[3]>51)?(item===positionRed[3]+43)&&<TokenRed index={3} />:(item===positionRed[3])&&<TokenRed index={3} />
         }
           
          
          {
           (positionBlue[0]<=39) ?(item===(positionBlue[0]+13))&&<TokenBlue index={0} />:(item===(positionBlue[0]-39)&&<TokenBlue index={0}/>)
           
          } 
          {
           (positionBlue[1]<=39) ?(item===(positionBlue[1]+13))&&<TokenBlue index={1} />:(item===(positionBlue[1]-39)&&<TokenBlue index={1}/>)
          }{
            (positionBlue[2]<=39) ?(item===(positionBlue[2]+13))&&<TokenBlue index={2} />:(item===(positionBlue[2]-39)&&<TokenBlue index={2}/>)
          }
          {
           (positionBlue[3]<=39) ?(item===(positionBlue[3]+13))&&<TokenBlue index={3} />:(item===(positionBlue[3]-39)&&<TokenBlue index={3}/>)
          }

{
            (positionYellow[0]<=26) ?(item===(positionYellow[0]+26))&&<TokenYellow index={0} />:(item===(positionYellow[0]-26)&&<TokenYellow index={0}/>)

           
          } 
          { 
            (positionYellow[1]<=26) ?(item===(positionYellow[1]+26))&&<TokenYellow index={1} />:(item===(positionYellow[1]-26)&&<TokenYellow index={1}/>)
          }
          {
            (positionYellow[2]<=26) ?(item===(positionYellow[2]+26))&&<TokenYellow index={2} />:(item===(positionYellow[2]-26)&&<TokenYellow index={2}/>)
          }
          {
            (positionYellow[3]<=26) ?(item===(positionYellow[3]+26))&&<TokenYellow index={3} />:(item===(positionYellow[3]-26)&&<TokenYellow index={3}/>)       }
      

          {
            (positionGreen[0]<=13) ?(item===(positionGreen[0]+39))&&<TokenGreen index={0} />:(item===(positionGreen[0]-13))&&positionGreen[0]<56&&<TokenGreen index={0}/>
          }
          {
            (positionGreen[1]<=13) ?(item===(positionGreen[1]+39))&&<TokenGreen index={1} />:(item===(positionGreen[1]-13))&&positionGreen[1]<56&&<TokenGreen index={1}/>
          }
          {
            (positionGreen[2]<=13) ?(item===(positionGreen[2]+39))&&<TokenGreen index={2} />:(item===(positionGreen[2]-13))&&positionGreen[2]<56&&<TokenGreen index={2}/>
          }
          {
            (positionGreen[3]<=13) ?(item===(positionGreen[3]+39))&&<TokenGreen index={3} />:(item===(positionGreen[3]-13))&&positionGreen[3]<56&&<TokenGreen index={3}/>

          }
         </div>
        })
      }
    </div>
  )
}

export default Path2