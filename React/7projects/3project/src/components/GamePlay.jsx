import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutLineButton } from '../styled/Button'
import Rule from './Rule'

const GamePlay = () => {
    const [selectedNum,setSelectedNum]= useState('');
    const [currentDice, setCurrentDice]  = useState(1);
    const [score,setScore] = useState(0);
    const [error,setError] = useState("");
    const [showRules,setShowRules] =useState(false);

 

    const genRandomNumber =(max, min) =>{
        return Math.floor(Math.random()*(max - min) + min);
      }
      
    const roleDice = () =>{
        if(!selectedNum) {
            setError("You have not Selected any number")
            return
        };
        
    const randomNumber = genRandomNumber(1,7); 
        setCurrentDice(randomNumber);


     if(selectedNum === randomNumber){
            setScore((prev)=>prev+2);
        }else{
            setScore((prev)=>prev - 2);
        }
        setSelectedNum('');
      }

  return (
   <MainContainer>
           <div className="top_section">
               <TotalScore score={score}/>
               <NumberSelector
               selectedNum={selectedNum} setSelectedNum={setSelectedNum} 
               error={error} setError={setError}/>
               
           </div>
           <div>
            <RollDice currentDice={currentDice} roleDice={roleDice}/>
           </div>
           <div className="btns">
            <Button onClick={()=>setScore(0)}>Reset</Button>
            <OutLineButton onClick={()=>{setShowRules((prev)=>!prev)}}>{showRules?'Hide ':'Show '}Rules</OutLineButton>
           </div>
           {showRules && <Rule/>} 
   </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`