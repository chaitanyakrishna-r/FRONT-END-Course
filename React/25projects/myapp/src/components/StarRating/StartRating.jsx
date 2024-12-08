import React, { useState } from 'react'
import  './startRating.css'
import { FaStar } from "react-icons/fa";

const StartRating = ({noOfStar=5}) => {
    const [rating, setRating]=useState(0);
    const [hover, setHover] = useState(0);

    function handClick(i){
       
        setRating(i)
    }
    function handMouseMove(i){
        setHover(i)
    }
    function handMouseLeave(i){
        setHover(rating)
    }
  return (
    <div className='container'>
        {[...Array(noOfStar)].map((_,index)=>{
            index +=1

            return(
              <FaStar
              size={30}
              key={index}
              className={index <= (hover||rating)? 'acitve':'inactive'}
              onClick={()=>{handClick(index)}}
              onMouseMove={()=>{handMouseMove(index)}}
              onMouseLeave={()=>{handMouseLeave()}}/>  

            )
    })}
    </div>
  )
}

export default StartRating