import React from 'react'

const Test1 = ({follow, setFollow}) => {

    function handleClick(){
        setFollow(follow+1);
    }

    function handleClear(){
        setFollow(0);
    }
  return (
    <div>
           <button onClick={handleClick}>follow</button>
           <button onClick={handleClear}>clear</button>
    </div>
  )
}

export default Test1