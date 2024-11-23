import React, {useEffect, useRef, useState } from 'react'
import "./Addvideo.css"
// import VideoDispatch from '../context/VideoDispatch';
import useVidoeDispatch from '../hooks/vidoeDispatch';


const initVideo = {
 
    channel:"Media Master",
    time:"2 year ago",
    verified:true,
    title:'',
    views:'',
};

export default function Addvideo({editableVideo}) {

  //  const dispatch = useContext(VideoDispatch);
   const dispatch = useVidoeDispatch();
   const [video,setVideo]= useState(initVideo)
   let inputRef = useRef(null);

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
      inputRef.current.focus();

      // bad way to animating
      // "Chaitanyakrishna".split('').forEach((chara,i )=> {
      //   setTimeout(() => {
      //     console.log(inputRef.current.placeholder=inputRef.current.placeholder+chara);
      //   }, 299*i);
      // });
    
    },[editableVideo])
    
  return (
    <>
        <form >
            <input ref={inputRef} placeholder='Title' type="text"  onChange={handleChange} name="title" value={video.title}></input>
            <input type="text" placeholder='Views' onChange={handleChange} name="views" value={video.views}></input>
            <button onClick={handleSubmit}>{editableVideo?'Edit Video' : 'Add video'}</button>
        </form>
    </>
  )
}
