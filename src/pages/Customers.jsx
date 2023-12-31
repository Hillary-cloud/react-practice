import React, { useState } from 'react'

const Customers = () => {
    const [count, setCount] = useState(0);
    const [showHide, setShowHide] = useState(true);
    const addCount = () => {
        setCount(count - 1);
    }
    const toggleButton = () => {
        setShowHide(!showHide);
    }
    return (
    <div>
      <h1>{count}</h1>
      {showHide && "showing the message"} <br />
      <button onClick={addCount}> Addition</button><br />
        <button onClick={toggleButton}>Show/Hide</button>
    </div>
  )
}

export default Customers
