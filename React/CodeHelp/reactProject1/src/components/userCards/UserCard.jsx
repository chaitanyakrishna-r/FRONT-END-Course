import React from 'react'
import './userCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-title'>{props.name}</p>
        <img id='user-img' src='https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg' alt='ckr'/>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard