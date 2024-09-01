import React from 'react'
import "./Addvideo.css"

export default function Addvideo() {
    function handleChange(){}
    function handleSubmit(e){
      e.stopPropagation();
      e.preventDefault();
    }
    
  return (
    <>
        <form >
            <input type="text" placeholder='Title' onChange={handleChange}></input>
            <input type="text" placeholder='Views'></input>
            <button onClick={handleSubmit}>AddVideo</button>
        </form>
    </>
  )
}
