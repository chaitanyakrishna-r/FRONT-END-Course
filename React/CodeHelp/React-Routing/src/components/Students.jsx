import React from 'react'
import { useParams } from 'react-router-dom'

const Students = () => {
    const {id} = useParams();
    return (
    <div>
      parameter: {id}
    </div>
  )
}

export default Students
