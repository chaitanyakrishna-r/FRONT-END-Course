

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset,incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount ,setAmount] =useState(0);
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  
  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());

  }
  function handleReset(){
    dispatch(reset());
  }
  function handleAmountIncrement(){
    dispatch(incrementByAmount(amount));
  }

  return (
    
    <>
      <div className='container'>
        <div className='wrapper'>
          <button onClick={handleIncrementClick}>+</button>
          <p> Count: {count}</p>
          <button onClick={handleDecrementClick}>-</button>
        </div>
        <br />
        <div>
          <button onClick={handleReset}>Reset</button>
          <input type="text" value={amount} placeholder='enter amount'
          onChange={(e)=>{setAmount(e.target.value)
            console.log(amount)
          }} />
          <button onClick={handleAmountIncrement}>Add</button>
        </div>
      </div>
    </>
  )
}

export default App
