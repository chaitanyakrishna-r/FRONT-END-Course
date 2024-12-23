import React, { useContext } from 'react'
import { CountContext } from './CounterContext'

import Childb from './Childb';

const ChildA = () => {
    const[count, setCount] = useContext(CountContext);
  return (
    <div>
        {count}
    <div>
        <Childb/>
    </div>
    </div>
  )
}

export default ChildA