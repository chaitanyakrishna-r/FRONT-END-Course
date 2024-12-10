import React from 'react'

const Cards = ({name,children}) => {
  return (
    <div>{name}{children}</div>
  )
}

export default Cards