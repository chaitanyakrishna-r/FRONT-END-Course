import React from 'react'

const Search = ({searchData,setSearchData,handleSubmit}) => {
  return (
    <div>
        <div className='search-engine'>

        <input 
        type="text"
        placeholder='Enter the city'
        value={searchData}
        onChange={(event)=>{setSearchData(event.target.value)}}
        name='search'
        />
        <button onClick={handleSubmit}>Search </button>
        </div>

    </div>
  )
}

export default Search