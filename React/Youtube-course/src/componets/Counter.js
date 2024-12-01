import React, { useCallback, useMemo,useState } from 'react';


function Counter() {

  const fibFx = useCallback(function fib(n){
        if(n===1 || n===2){
          return 1;
      }
      return fib(n-1)+fib(n-2);
  },[])
    
    // function fib(n){
    //     if(n===1 || n===2){
    //         return 1;
    //     }
    //     return fib(n-1)+fib(n-2);
    // }
    const[ number, setNumber] = useState(1);
    const fibMemo = useMemo(()=>fibFx(number),[number])
    function handleClick(){
        setNumber (number+1);
        console.log(number);
    }

  return (
    <>
    <h1>{number} :  {fibMemo}</h1>
    <button onClick={handleClick}>Add Number</button>
    </>
  )
}

export default Counter