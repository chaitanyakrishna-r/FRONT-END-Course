import React from 'react'
import MenuList from './MenuList'
import MenuItems from './MenuItems'

const TreeView = ({menu = []}) => {
  return (
    <div>
        <MenuList list={menu} />
    </div>
  )
}

export default TreeView