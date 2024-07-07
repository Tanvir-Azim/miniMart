import React, { useContext, useState } from 'react'
import styled from 'styled-components'


function ProfilePage({getData}) {



  

  const Wraper = styled.section`
  @keyframes identifier {

    0%{
      top:20px;
      top: 0px;
      left:0px;
   
    right:0px ;

    }
    100%{
      top:20px;
    left: -200px;
    right:-24px ;

    }
    
  }
 

  .main{
    background-color:gray;
    position: absolute;
    top:18px;
    left: -370px;
    right:-24px ;
    width: 445px;
    height: 200px;
    animation-name:identifier;
    animation-duration:0.5s;
    
  }
  
  `
  //absolute  top-6 left-[-200px] right-[-24] w-[300px] bg-green-300 h-[200px]
  return (
    <>
    <Wraper>
    <div className='  relative'>
    
      <div className='main'>
      <button onClick={()=>{getData()}}>kkkk</button>
        
      </div>
    </div>
    </Wraper>
    
    
    </>

  )
}

export default ProfilePage