import React, { useState } from 'react'
import './play.css'

export default function Playbutton({children,onPause,onPlay}) {
    const [playing,setPlaying] =useState(false);
    function handlePlay(e){
        e.stopPropagation();
        if(playing) onPause()
            else onPlay();
        setPlaying(!playing);
    }

  return (
    <div className='play' onClick={handlePlay}>{children} {playing? "▶️ play":"⏸️ pause"}</div>
  )
}
console.log(helo);