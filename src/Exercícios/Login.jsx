import { useState } from "react"
function Login() {
  // const corectLogin = {
  //   username: 'aluno123', 
  //   password: 'Senai2023'
  // }
  
  //useState: Estado do formulário

  const changeHandle = ({target}) => {
    //função para realizar a alteração de estado do formulário
  }
  
  const submitHandle = (event) => {
    //função preventDefault
    // if(usuarioDoFormulario !== usuarioCorreto) {
      // alert('Usuário Incorreto')
    // }
    // else if(senhaDoFormulario !== senhaCorreta) {
      // alert('Senha Incorreta')
    // }
    // else {
      // alerta de login bem sucedido
    }
  }

  return (
    <form onSubmit={
      //função de submissão de formulário
      }>
      <div>Login</div>
      <div>
      <label htmlFor="username">Username</label>
      <input onChange={
        //função para fazer a alteração de estado 
        } id="username"></input>
      </div>
      <div>
      <label htmlFor="password">Password</label>
      <input type="password" onChange={
        //função para fazer a alteração de estado 
        } id="password"></input>
      </div>
      <button>Submit</button>
    </form>
  )
}
export default Login