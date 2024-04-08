import React, { useState } from 'react'

function UseStateEx3() {
    const [timer,setTimer]=useState(20)

    const startTimer=()=>{
      

  setInterval(()=>{
  setTimer(prevTime=>prevTime-1)
  
  },1000)

    }
  return (
    <div>
        <button onClick={startTimer} >Start timer</button>
        <h4 style={
            {
                color: timer<=10 ? "red":"black"
            }
        } >{timer}</h4>
        {
            timer<=10 && <h3>Exam about to end</h3> 
        }
    </div>
  )
}

export default UseStateEx3