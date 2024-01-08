import React, { useState } from 'react'

const Practice = () => {
    const [colors, setColors] = useState("red")

  return (
    <div>
      <h1 style={{color:`${colors}`}}>i am a color {colors}</h1>
      {
        colors === "red" ?
        <button type='button' style={{background: "green", color: "white"}} onClick={() => setColors("blue")}>change to blue</button>
        :
        <button type='button' style={{background: "green", color: "white"}} onClick={() => setColors("red")}>change to red</button>
      }
      
    </div>
  )
}

export default Practice
