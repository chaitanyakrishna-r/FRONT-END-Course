import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/CounterSlicer';


const Counter = () => {

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();


    function handleIncrement(){
        dispatch(increment())
    }
  return (
    <div>
        <div>{count}</div>
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={()=>{
                dispatch(decrement())
            }}>Decrement</button>
            <button>Reset</button>
        </div>
    </div>


  )
}

export default Counter;


