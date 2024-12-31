import React, { useEffect, useState } from 'react'
import './style.css'


function Square({value,onclick}){
   return <button onClick={onclick} className='square'>
    {value}
   </button>
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXturn,setIsXturn] = useState(true);
    const [stauts, setStatus] = useState(null);
    console.log(squares);

    function getWinner(squares){
        const winnerPatter = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
        ];

        for(let i= 0 ;i < winnerPatter.length; i++ ){
            const [x, y, z] = winnerPatter[i];

            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
                return squares[x];
            }
        }
        return null;
    }

    function handleClick(getCurrentSquare){
        let cpySquares = [...squares];
        if(getWinner(squares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXturn? "X" : "O";
        setIsXturn(!isXturn);
        setSquares(cpySquares);
        
    }
    function handleRestart(){
        setIsXturn(true);
        setSquares(Array(9).fill(""));
    }
    useEffect(()=>{
        if(!getWinner(squares) && squares.every((item) => item !== "")){
            setStatus("This is a draw! Please Resart the Game");
        }else if(getWinner(squares)){
            setStatus(`Winner is ${getWinner(squares)}. Please restart the Game`)
        }else{
            setStatus(`Next player is ${isXturn ? "X": "O"}`);
        }
    },[isXturn,squares])

  return (
    <div className='ticContainer'>
        <div className='rows'>
            <Square value={squares[0]} onclick={()=>handleClick(0)}/>
            <Square  value={squares[1]} onclick={()=>handleClick(1)}/>
            <Square  value={squares[2]} onclick={()=>handleClick(2)}/>
        </div>
        <div className='rows'>
            <Square  value={squares[3]} onclick={()=>handleClick(3)}/>
            <Square  value={squares[4]} onclick={()=>handleClick(4)}/>
            <Square  value={squares[5]} onclick={()=>handleClick(5)}/>
        </div>
        <div className='rows'>
            <Square  value={squares[6]} onclick={()=>handleClick(6)}/>
            <Square  value={squares[7]} onclick={()=>handleClick(7)}/>
            <Square  value={squares[8]} onclick={()=>handleClick(8)}/>
        </div>
        <h1>{stauts}</h1>
        <button onClick={handleRestart}>Restart</button>
        
    </div>
  )
}

export default TicTacToe