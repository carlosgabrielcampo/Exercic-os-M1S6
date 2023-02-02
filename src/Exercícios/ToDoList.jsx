import { useEffect, useState } from "react"

function ToDoList() {
  const listadeAfazeres = [
    //itens da lista {},
    //itens da lista {},
    //itens da lista {},
  ]
  
  // useState que contém a lista
  // useState que contém o item selecionado da lista
  // useState que contém o valor do input

  const addTask = (task) => {
    //funcao para adicionar itens na lista
    // setInputValue('')
    // setLista()
    // dica: [...listadeAfazeres, novoitem]    
  }

  const removeTask = () => {
    //funcao para remover itens na lista
    // const array = list.filter((e, i) => id !== i)
    // setItemSelecionado()
    // setLista()

  }

  return(
    <>
    <div>
      <div>Minha lista de afazeres</div>
      <input onChange={(event) => 
      //setValorDoInput event.target.value
      } value={inputValue}></input>
      <button onClick={() => 
        //funcao de adicionar itens na lista
      }>Adicionar</button>
      <button onClick={() => 
        //funcao de remover itens da lista
      }>Remover</button>
    </div>
    <div>
       {
        // lista.map((e, i) =>
        //   <li key={i} onClick={(event) => {
        //     setItemSelecionado()
        //   }}>
        //     {e.task}
        //   </li>
        // )
      }
    </div>
    </>
  )
}

export default ToDoList
