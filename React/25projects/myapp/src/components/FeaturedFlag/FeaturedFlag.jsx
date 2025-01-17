import React, { useContext } from 'react'
import LightDarkMode from '../LightDarkMode/LightDarkMode'
import Accordion from '../accordion/Accordion'
import TreeView from '../treeView/TreeView'
import TicTacToe from '../TicTacToe/TicTacToe';
import RandomColor from '../randomColor/RandomColor';
import {FeatureflagContext} from './Context/Context'
import StartRating from '../StarRating/StartRating';


const FeaturedFlag = () => {
    const {loading, enableFlags} = useContext(FeatureflagContext);

    const componentToRender = [
        {
            key: 'showLightDarkMode',
            componet : <LightDarkMode/>
        },
        {
            key: 'showAccordion',
            componet : <Accordion/>
        },
        {
            key: 'showRandomColor',
            componet : <RandomColor/>
        },
        {
            key: 'showTicTacToe',
            componet : <TicTacToe/>
        },
        {
            key: 'showTreeView',
            componet : <TreeView/>
        },
        {
            key: 'showStarRating',
            componet : <StartRating/>
        }
    ]
    if(loading) return <h1>Loading Data, Please wait...</h1>
    function checkComponentRender(getCurrentKey){
        console.log("in Chekccomponent",enableFlags[getCurrentKey])
        return enableFlags[getCurrentKey];
    }
  return (
    <div>
        <h1>FeaturedFlag</h1>
        {
            componentToRender.map(componentItem=>checkComponentRender(componentItem.key)
            ?componentItem.componet
            :null)
        }
    </div>
  )
}

export default FeaturedFlag