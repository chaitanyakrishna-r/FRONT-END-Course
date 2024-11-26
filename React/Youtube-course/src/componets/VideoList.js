
import Videos from './Videos'
import Playbutton from './Playbutton';
// import useVidoes from '../hooks/Videos';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function VideoList({editVideo}) {
  
  const url ='https://my.api.mockaroo.com/videos.json?key=3b4f37b0';
  const [videoDB,setVideoDB] = useState([]);

  async function handleApi(){
    console.log("get Video")
    const response = await axios.get(url);
    console.log(response);
    setVideoDB(response.data);
  }
  useEffect(()=>{
      handleApi();
  },[])
  // const videoDB = useVidoes();
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
       
        editVideo={editVideo}
        
        >
        <Playbutton
        onPlay ={()=>{console.log('playing',video.title)}}
        onPause ={()=>{console.log('Paused')}}
        >{video.title}</Playbutton>    

        </Videos>))
      }
      <button onClick={handleApi}>Get Vidoes</button>
    </>
  )
}
