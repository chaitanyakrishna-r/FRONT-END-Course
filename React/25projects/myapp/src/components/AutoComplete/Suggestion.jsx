import React from 'react'

const Suggestion = ({filteredData, handleClick}) => {
  return (
   <ul>
    {
        filteredData && filteredData.length ?
            filteredData.map((data,index) =>(
                <li onClick={handleClick} key={index}>{data}</li>
            ))  
        :null
    }
   </ul>
  )
}

export default Suggestion