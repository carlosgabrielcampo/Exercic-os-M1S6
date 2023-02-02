import { useEffect, useState } from "react"

function ToDoList() {
  const listadeAfazeres = [
    {task: 'Olhar o email'},
    {task: 'Dar água para as plantas'},
    {task: 'Dar comida aos peixes'}
  ]
  
  const [list, setList] = useState(listadeAfazeres)
  const [id, setId] = useState()
  const [inputValue, setInputValue] = useState("")

  const addTask = (task) => {
    setInputValue('')
    setList([...list, {task: task}])
  }

  const removeTask = () => {
    if(typeof id === 'number'){
      const array = list.filter((e, i) => id !== i)
      setId()
      setList(array)
    }
  }

  return(
    <>
    <div>
      <div>Minha lista de afazeres</div>
      <input onChange={(event) => setInputValue(event.target.value)} value={inputValue}></input>
      <button onClick={() => addTask(inputValue)}>Adicionar</button>
      <button onClick={() => removeTask()}>Remover</button>
    </div>
    <div>
       {
       list.map((e, i) => 
        <li key={i} onClick={(event) => {
          event.target.style.backgroundColor = "red"
          setId(i)
        }}>{e.task}</li>)
      }
    </div>
    </>
  )
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);


export default ToDoList
