
import './App.css';
import TabTest from './components/CustomTabs/TabTest';
// import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
// import LightDarkMode from './components/LightDarkMode/LightDarkMode';
// import QrCode from './components/qrCodeGen/QrCode';
// import TreeView from './components/treeView/TreeView';
// import menus from './components/treeView/data'

// import LoadMoreData from './components/loadMore/LoadMoreData';
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
    {/* <LoadMoreData/> */}
    {/* <TreeView menu={menus}/> */}
    {/* <QrCode/> */}
    {/* <LightDarkMode/> */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
    {/* <TabTest/> */}
    </div>
  );
}

export default App;
