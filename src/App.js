// see notes at bottom

import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"

function App() {
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState("Yes")
  const [color, setColor] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App

// componentDidMount
// componentDidUpdate
// componentWillUnmount


// side effects ?
// network request 
// manual dom manipulation
// event listeners or timeouts 

// each of the above are considered side effects of the components main job which is ****displaying the data of the content to the screen***