import { useRef, useState } from "react"

function Contador() {
  // useState()
  // useRef()

  return(
    <div>
      <div>Estado Atual:{
      // variável que contém o estado atual
      }</div>
      <div>Estado Anterior:{
        // variável que contém o estado prévio  
      }</div>
      <button onclick={ 
        //setState 
        //ref.current = valorPévio
      }>+</button>
      <button onclick={
        //setState
        //ref.current = valorPévio
      }>-</button>
      <button onclick={
        //settate  
        //ref.current = valorPévio
      }>0</button>
    </div>
  )
}

export default Contador