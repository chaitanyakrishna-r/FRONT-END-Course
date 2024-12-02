import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <div>
       < Container>
        <div>
            <img src="/images/dices 1.png" alt="dices" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button 
            onClick={toggle}>Play Now</Button>
        </div>
       </Container>
    </div>
  )
}

export default StartGame

const Container = styled.div`
    max-width:1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    padding: 10px 18px;
    background: #000;
    border-radius: 5px;
    color: white;
    min-width: 220px;
    border: none;
    font-size: 16px;
    font-family: "Poppins",sans-serif;
    border:1px solid transparent;
    transition: 0.3s background ease-in;

    &:hover{
        cursor: pointer;
        background-color:white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;