import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let x = useRef(0);

  let bntRef = useRef();
  const handleClick =()=>{
    setCount((prev)=>prev+1);
    x.current = x.current+1
  }
  const ChangeColor =()=>{
    bntRef.current.style.backgroundColor = 'red'
  }

  useEffect(()=>{

    console.log("I will run every render");
    console.log("value: ", x);
  })
  return (
    <>
    <button 
    ref={bntRef}
    onClick={handleClick}>Increment</button>
    <br />
    <button onClick={ChangeColor}>Click to change the color of above button</button>
    <div>
      count: {count}
    </div>
    </>
  )
}

export default App
