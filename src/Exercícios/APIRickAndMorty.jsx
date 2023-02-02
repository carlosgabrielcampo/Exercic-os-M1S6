import { useEffect, useState } from "react"

function APIRickAndMorty() {
  // useState: lista de personagens
  // useState: número da página, iniciar com o valor 1

  const fetchCharacters = async(page) => {
    // setState: aqui colocar vazio o estado que contém a lista de personagens
    const requestAPI = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=alive`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const informaçãoPersonagens = (await requestAPI.json()).results
    // setState: aqui colocar as informações de Personagens
  }

  const handleClick = (next) => {
    if(next){
      //setState colocar aqui o valor da página + 1 
    } else {
      //setState colocar aqui o valor da página - 1 
    } 
  }

  
  // useEffect(() => {
  //   colocar aqui dentro a função que faz a requisição de personagens
  //   passando a variável que contém o número da página, vinda do estado
  // },[ colocar aqui a variável que contém o número da página ])

  return(
    <div>
      {
      // variavelQueContémAsInformaçõesDePersonagem && variavelQueContémAsInformaçõesDePersonagem.map(
        (e, index) => {
          const {id, name, gender, species, status, type, image, location, origin} = e
          return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img key={`${name}${id}`} src={image} alt={`${name}`}/>
            <div>
              <ul key={`${name}${id}`}>Nome: {name}</ul>
              <ul key={`${name}${id}`}>Genêro: {gender}</ul>
              <ul key={`${name}${id}`}>Espécie: {species}</ul>
              <ul key={`${name}${id}`}>Status: {status}</ul>
              <ul key={`${name}${id}`}>Tipo: {type}</ul>
              <ul key={`${name}${id}`}>Localização: {location.name}</ul>
              <ul key={`${name}${id}`}>Origem: {origin.name}</ul>
            </div>
            </div>
          ) 
        })
      }
      <button onClick={() => handleClick(false) }>Anterior</button>
      <button onClick={() => handleClick(true)}>Próximo</button>
    </div>
  )
}

export default APIRickAndMorty