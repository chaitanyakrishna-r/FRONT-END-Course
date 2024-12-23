import React, { createContext, useState } from 'react'

const CountContext = createContext();

const CounterContext = ({children}) => {
    const [ counter, setCounter] = useState(10);
  return (
    <>
  
    <CountContext.Provider value={[counter, setCounter]}>
    {children}
    </CountContext.Provider>
    </>
  )
}

export default CounterContext
export {CountContext}