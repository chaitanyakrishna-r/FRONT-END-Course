import React from 'react'
import Tabs from './Tabs'
import './style.css'
 

function RandomData(){
    return<div>Random data for tab 3</div>
}

const TabTest = () => {
 const tabs = [
    {
        label : 'Tab 1',
        content : "Content of Tab 1" ,
    },
    {
        label : 'Tab 2',
        content : "Content of Tab 2" ,
    },  {
        label : 'Tab 3',
        content : <RandomData/>,
    },
 ]
 function handleChange(currentTabIndex){
    console.log(currentTabIndex);
 }
  return (
    <div>
        <Tabs tabsContent={tabs} Onchange={handleChange} />
    </div>
  )
}

export default TabTest