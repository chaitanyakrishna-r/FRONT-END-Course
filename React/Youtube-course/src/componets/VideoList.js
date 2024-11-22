import React from 'react';
import Videos from './Videos'
import Playbutton from './Playbutton';

export default function VideoList({videoDB,deleteVideo,editVideo,dispatch}) {
  return (
    <>
    {
        videoDB.map((video) => (<Videos
        key={video.id}
        title ={video.title}
        channel = {video.channel}
        views = {video.views}
        time = {video.time}
        verfied = {video.verfied}
        id = {video.id}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        dispatch={dispatch}
        >
        <Playbutton
        onPlay ={()=>{console.log('playing',video.title)}}
        onPause ={()=>{console.log('Paused')}}
        >{video.title}</Playbutton>    

        </Videos>))
      }
    </>
  )
}
