import React, { useContext } from 'react'
import { CountContext } from './CounterContext'

const Childb = () => {
    const [follow , setFollow] =useContext(CountContext);

    function handleClick(){
        setFollow(follow+5);
    }

    function handleClear(){
        setFollow(0);
    }
  return (
    <div >Childb
        {follow}
        <div>
            <button onClick={handleClick}>follow</button>
            <button onClick={handleClear}>clear</button>
        </div>
    </div>
  )
}

export default Childb