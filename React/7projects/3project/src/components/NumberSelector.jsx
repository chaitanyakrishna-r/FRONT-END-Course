import React from 'react'
import styled from 'styled-components'



const NumberSelector = ({selectedNum,setSelectedNum,error,setError}) => {
    const arrNumber=[1,2,3,4,5,6];
    
    const numberSelectorHandler = (value)=>{
        setSelectedNum(value);
        setError("")
    }

    
  return (
    <NumberContainer>
        <p className='error'>{error}</p>
        <div className="flex">
            {arrNumber.map((value,index)=>(
                <Box
                isSelected ={value==selectedNum}
                onClick={()=>{numberSelectorHandler(value)}}
                key={index}>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumberContainer>
  )
}

export default NumberSelector

const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
        padding: 10px;
    }
    .error{
        color: red;
    }
`
const Box = styled.div`
    height: 72px;
    width: 72px;
    border:1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700px;
   
   background-color: ${(props)=>props.isSelected?"black":"white"};
   color: ${(props)=>props.isSelected?"white":"black"};
`