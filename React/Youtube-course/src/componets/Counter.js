import React, { useState } from 'react';


function Counter() {
    
    function fib(n){
        if(n===1 || n===2){
            return 1;
        }
        return fib(n-1)+fib(n-2);
    }

    const[ number, setNumber] = useState(10);
    function handleClick(){
        setNumber (number+1);
        console.log(number);
    }

  return (
    <>
    <h1>{number} :  {fib(number)}</h1>
    <button onClick={handleClick}>Add Number</button>
    </>
  )
}

export default Counter