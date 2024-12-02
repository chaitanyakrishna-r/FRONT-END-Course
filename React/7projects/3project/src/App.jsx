import { useState } from 'react';
import './App.css'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';




function App() {
  
  const [isGameOn,setIsGameOn]=useState(true);

  const toggleGamePlay =()=>{
    setIsGameOn(!isGameOn);
  }

  return (
    <>
    {isGameOn ? <GamePlay/> : <StartGame
    toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
