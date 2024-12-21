import React, { useState } from 'react'


const Tabs = ({tabsContent,Onchange}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleClick(getCurrentindex){
        console.log(getCurrentindex)
        setCurrentIndex(getCurrentindex);
        Onchange(getCurrentindex);
    }
  return (
    <div className='wrapper'>
        <div className='header'>
            {
                tabsContent.map((tabItem, index)=>(
                    <div className={`tab-item ${currentIndex === index ?'active': ''} `} 
                    onClick={()=>handleClick(index)}>
                        <span className='label' key={tabItem.label}>{tabItem.label}</span>
                    </div>
                ))
            }
        </div>
        <div className='content-tab' style={{color:'red'}}>
            {tabsContent[currentIndex] && tabsContent[currentIndex].content }
        </div>
        

    </div>
  )
}

export default Tabs