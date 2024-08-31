import './App.css';

import VideoList from './componets/VideoList'; 
import data from './data/data'

function App() {
  return (
  <>
    <div className="App">
      <h1>Hello YouTube</h1>
    </div>
    <VideoList videoDB={data} ></VideoList>
  
  </>

  );
}

export default App;
