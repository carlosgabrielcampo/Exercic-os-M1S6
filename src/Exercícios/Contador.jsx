import { useState } from "react"

function Contador() {
  let [counter, setCounter] = useState(0)
  return(
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <button onClick={() => setCounter(0)}>0</button>
    </div>
  )
}

export default Contador