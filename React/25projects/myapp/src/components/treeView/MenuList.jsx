import React from 'react'

import MenuItems from './MenuItems'

const MenuList = ({list =[]}) => {
  return (
    <ul className='menu-list-container'>
        {list && list.length ?
         list.map((listItem)=>(
            
            <MenuItems items={listItem} />
         ))
         :null  
        }
    </ul>
  )
}

export default MenuList