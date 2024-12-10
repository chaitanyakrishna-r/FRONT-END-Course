
import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
// import Accordion from './components/accordion/Accordion';
// import RandomColor from './components/randomColor/RandomColor';
// import StartRating from './components/StarRating/StartRating';

function App() {
  return (
    <div className="App">
     {/* <Accordion/> */}
     {/* <RandomColor/> */}
     {/* <StartRating noOfStar={10} /> */}
    <ImageSlider url={'https://picsum.photos/v2/list/'} page='1' limit='5'/>

    </div>
  );
}

export default App;
