import React, { useState } from 'react'

const Home = () => {
    const [title,setTitle] = useState('');
  return (
    <div>
        
        <input  
        className='p-2 rounded-2xl mt-5'
        type="text" 
        placeholder='Enter Title Here'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
    </div>
  )
}

export default Home