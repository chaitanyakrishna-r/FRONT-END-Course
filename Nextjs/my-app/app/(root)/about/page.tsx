import { error } from 'console'
import React from 'react'

const page = () => {
  throw new Error("error in about")
  return (
    <div>about</div>
  )
}

export default page