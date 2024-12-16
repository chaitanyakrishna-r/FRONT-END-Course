import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const Stopwatch = () => {

    const [timer, setTimer] =useState(0);
    let timerRef = useRef(null);

    function handleStart(){
         timerRef.current = setInterval(()=>{
            setTimer((prev)=>prev+1);
        },500)
    }

    function handleStop(){
        clearInterval(timerRef.current);
        timerRef.current = null;
        
    }
    function handleReset(){
        handleStop();
        setTimer(0);
    }

  return (
    <div>
        <div>
            <h1>Stop watch : {timer}Seconds</h1>
            <br /><br />
            <button onClick={handleStart}>START</button>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}

export default Stopwatch