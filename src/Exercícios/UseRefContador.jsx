import { useRef, useState } from "react"

function Contador() {
  let [counter, setCounter] = useState(0)
  let counterRef = useRef()
  return(
    <div>
      <div>Estado Atual:{counter}</div>
      <div>Estado Anterior:{counterRef.current}</div>
      <button onClick={() => 
        setCounter((prev) => {
          counterRef.current = prev
          return prev + 1
        })
      }>+</button>
      <button onClick={() => setCounter((prev) => {
          counterRef.current = prev
          return prev - 1
        })}>-</button>
      <button onClick={() => setCounter(0)}>0</button>
    </div>
  )
}

export default Contador