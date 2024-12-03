import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, roleDice}) => {

  

  
  return (
    <DiceContainer>
      <div className='dice' onClick={()=>{roleDice()}}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to Roll</p>
      {currentDice}
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column ;
    margin-top: 48px;

    p{
      font-size: 24px;
    }
    .dice{
      cursor: pointer;
    }
`;