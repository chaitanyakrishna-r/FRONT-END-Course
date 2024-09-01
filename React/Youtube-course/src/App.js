
import './App.css';

import VideoList from './componets/VideoList';
import Addvideo from './componets/Addvideo'; 
import data from './data/data'

function App() {
  return (
  <>
  
    <Addvideo></Addvideo>
    <VideoList videoDB={data} ></VideoList>
  
  </>

  );
}

export default App;
