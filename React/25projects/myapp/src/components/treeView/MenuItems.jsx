import React, { useEffect, useState } from 'react'

import MenuList from './MenuList'

const MenuItems = ({items}) => {
    // const [toggle, setToggle]  = useState(false);
    //  function toggleChildren(){
    //     setToggle(!toggle);
    //  }
    // useEffect(()=>{
    //     console.log('he')
    // },[toggle])

    const [displayCurrentchld, setDiaplayCurrentchld] = useState({});
    console.log(items)

    const handleToggleChildren = ( currentLabel)=>{
        setDiaplayCurrentchld({...displayCurrentchld,
            [currentLabel]: !displayCurrentchld[currentLabel]
        })
    }
    

  return (
    <li>
        <p>{items.label}{
            
                items && items.children && items.children.length ? <span onClick={()=>{handleToggleChildren(items.label)}}>{
                    displayCurrentchld[items.label] ? "-" : "+"
                    }</span> :null
            } </p>
        {
            items && items.children && items.children.length > 0 && displayCurrentchld[items.label]
            ?<MenuList list={items.children}/> 
            
            :null 
        }
        </li>
  )
}

export default MenuItems