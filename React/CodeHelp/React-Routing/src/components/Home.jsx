import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function HandleClick(){
        navigate ('/about')
        }
  return (
    <div>
      Home
      <button onClick={HandleClick}>Move to about</button>
    </div>
  )
}

export default Home
