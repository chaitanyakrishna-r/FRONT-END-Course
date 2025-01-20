import React from 'react'
import useWindowResize from './useWindowResize'

const TestWindowResize = () => {
    const windowSize = useWindowResize();
    const {height} = windowSize;
    console.log(windowSize);
  return (
    <div>
        <h1>TestWindowResize</h1>
        <p>width: {windowSize.width}</p>
        <p>height: {height}</p>

    </div>
  )
}

export default TestWindowResize