import React, {useEffect, useState } from 'react'
import "./Addvideo.css"


const initVideo = {
 
    channel:"Media Master",
    time:"2 year ago",
    verified:true,
    title:'',
    views:'',
};

export default function Addvideo({dispatch,editableVideo,updateVideo}) {

   const [video,setVideo]= useState(initVideo)

    function handleChange(e){
     e.stopPropagation();
      setVideo({...video,
        [e.target.name]: e.target.value
    })
      
    }
    function handleSubmit(e){
      e.preventDefault();
      if(editableVideo){
        dispatch({type:'UPDATE',playload:video})
        
      }else{
        dispatch({type:'ADD' ,playload:video});
      }
      
    
      setVideo(initVideo);
    }

    useEffect(()=>{
      if(editableVideo){
        setVideo(editableVideo)
        
      }
    
    },[editableVideo])
    
  return (
    <>
        <form >
            <input type="text" placeholder='Tittle' onChange={handleChange} name="title" value={video.title}></input>
            <input type="text" placeholder='Views' onChange={handleChange} name="views" value={video.views}></input>
            <button onClick={handleSubmit}>{editableVideo?'Edit Video' : 'Add video'}</button>
        </form>
    </>
  )
}
