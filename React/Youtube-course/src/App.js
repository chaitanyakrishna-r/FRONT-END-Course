
import './App.css';
import VideoList from './componets/VideoList';
import Addvideo from './componets/Addvideo'; 
import data from './data/data';
import { useReducer, useState } from 'react';


function App() {

  // const[videos, setVidoes]=useState(data);
  const[editableVideo,setEditableVideo] = useState(null);


  function videoReducer(videos,action ){
    switch(action.type){
      case 'ADD':
        return [...videos,{...action.playload,
          id:videos.length+1}];
      case 'DELETE':
        return videos.filter((video)=>video.id!==action.playload)  ; 
      case 'UPDATE':
        const index =videos.findIndex(v=>v.id=== action.playload.id);
    
        let newVideo = [...videos];
        newVideo.splice(index,1,action.playload)
        setEditableVideo(null);
        return newVideo;   
      default :
      return videos;
    }
  }
  const[videos,dispatch] =useReducer(videoReducer,data); 

  
  // function addVideo(video){
  //   dispatch({type:'ADD' ,playload:video});
  //   // action: {type:'ADD' ,playload:video}
  //   // setVidoes([...videos,{...video,
  //   //   id:videos.length+1}]);
  // }

  // function deleteVideo(id){
  //   dispatch({type:'DELETE',playload:id});
  //   // setVidoes(videos.filter((video)=>video.id!==id));
  // }

  function editVideo(id){
    setEditableVideo(videos.find(v=> v.id === id));
  }
  // function updateVideo(video){
  //   dispatch({type:'UPDATE',playload:video})

  //   // const index =videos.findIndex(v=>v.id=== video.id);
    
  //   // let newVideo = [...videos];
  //   // newVideo.splice(index,1,video)
  //   // setVidoes(newVideo);
  
  // }
  
  return (
  <>
  
    <Addvideo dispatch={dispatch} editableVideo={editableVideo} ></Addvideo>
    <VideoList videoDB={videos} dispatch={dispatch} editVideo={editVideo}></VideoList>
  
  </>

  );
}

export default App;
