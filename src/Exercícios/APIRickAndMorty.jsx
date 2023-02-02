import { useEffect, useState } from "react"

function APIRickAndMorty() {
  const [characters, setCharacters] = useState()
  const [page, setPage]= useState(1)
  const fetchCharacters = async(page) => {
    setCharacters()
    console.log(page)
    const requestAPI = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=alive`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const info = (await requestAPI.json()).results
    setCharacters(info)
    console.log(info)
  }
  const handleClick = (next) => {
    if(next){
      setPage(page + 1)
    } else {
      if(page !== 0) setPage(page - 1) 
    }
  }

  useEffect(() => {
    fetchCharacters(page)
  },[page])

  return(
    <div>
      {
      characters && characters
        .map((e, index) => {
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