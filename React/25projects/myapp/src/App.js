
import './App.css';
import UseFetchHookTest from './components/CustomHooks/useFetch/testHook';
import UseOutSideClose from './components/CustomHooks/useOutsideCloseHook/test1';
import TestWindowResize from './components/CustomHooks/useWindowResize/TestWindowResize';
import FeaturedFlagGobalState from './components/FeaturedFlag/Context/Context';
import FeaturedFlag from './components/FeaturedFlag/FeaturedFlag';
// import SearchAutoComplete from './components/AutoComplete/SearchAutoComplete';
// import TicTacToe from './components/TicTacToe/TicTacToe';
// import UserProfile from './components/GitHub/UserProfile';
// import TabTest from './components/CustomTabs/TabTest';
// import ModalTestPopUp from './components/ModalPopUp/ModalTestPopUp';
// import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
// import LightDarkMode from './components/LightDarkMode/LightDarkMode';
// import QrCode from './components/qrCodeGen/QrCode';
// import TreeView from './components/treeView/TreeView';
// import menus from './components/treeView/data'

// import LoadMoreData from './components/loadMore/LoadMoreData';
// import ImageSlider from './components/ImageSlider/ImageSlider';
// import Accordion from './components/accordion/Accordion';
// import RandomColor from './components/randomColor/RandomColor';
// import StartRating from './components/StarRating/StartRating';

function App() {
  return (
    <div className="App">
     {/* <Accordion/> */}
     {/* <RandomColor/> */}
     {/* <StartRating noOfStar={10} /> */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list/'} page='1' limit='5'/> */}
    {/* <LoadMoreData/> */}
    {/* <TreeView menu={menus}/> */}
    {/* <QrCode/> */}
    {/* <LightDarkMode/> */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
    {/* <TabTest/> */}
    {/* <ModalTestPopUp/> */}
    {/* <UserProfile/> */}
    {/* <SearchAutoComplete/> */}
    {/* <TicTacToe/> */}

    {/* <FeaturedFlagGobalState>
      <FeaturedFlag/>
    </FeaturedFlagGobalState> */}
    {/* <UseFetchHookTest/> */}
    {/* <TestWindowResize/> */}
    <UseOutSideClose/>
    </div>
  );
}

export default App;
