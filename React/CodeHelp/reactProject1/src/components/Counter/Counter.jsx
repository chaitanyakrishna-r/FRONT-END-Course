import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    function handleClick(){
        setCount((prev)=>prev+1);
    }
  return (
    <div>
        <h1>{count}</h1>
       <button onClick={handleClick}>Click here</button>
    
    </div>
    
  )
}

export default Counter