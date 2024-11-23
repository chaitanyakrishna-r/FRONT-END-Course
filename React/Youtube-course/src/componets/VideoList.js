
import Videos from './Videos'
import Playbutton from './Playbutton';
import useVidoes from '../hooks/Videos';

export default function VideoList({editVideo}) {
 
  const videoDB = useVidoes();
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
    </>
  )
}
