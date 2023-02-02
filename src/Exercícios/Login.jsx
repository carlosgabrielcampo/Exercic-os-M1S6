import { useState } from "react"
function Login() {
  const corectLogin = {
    username: 'aluno123', 
    password: 'Senai2023'
  }
  const [formState, setFormState] = useState({
    username:"",
    password:""
  })

  const changeHandle = ({target}) => {
    setFormState({...formState, [target.id]: target.value})
  }
  
  const submitHandle = (event) => {
    event.preventDefault()
    if(formState.username !== corectLogin.username) alert('Usuário Incorreto')
    else if(formState.password !== corectLogin.password) alert('Senha Incorreta')
    else alert('login efetuado com sucesso')
  }

  return (
    <form onSubmit={submitHandle}>
      <div>Login</div>
      <div>
      <label htmlFor="username">Username</label>
      <input onChange={changeHandle} value={formState.username} id="username"></input>
      </div>
      <div>
      <label htmlFor="password">Password</label>
      <input type="password" onChange={changeHandle} value={formState.password }id="password"></input>
      </div>
      <button>Submit</button>
    </form>
  )
}
export default Login