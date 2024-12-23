import React, { useState } from 'react'
import Test1 from './Test1';
import Test2 from './Test2';

const Master = () => {

    const [follow, setFollow]= useState(0);
  return (
    <div>
        <Test1 follow={follow} setFollow={setFollow}/>
        <Test2  follow={follow} setFollow={setFollow}/>
    </div>
  )
}

export default Master