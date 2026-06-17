import styles from '../css/Login.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Login() {
  const navigate = useNavigate()

  function handleEntrar() {
    navigate('/surdo')
  }

 function handleEsqueci() {
  navigate('/recuperar')
}

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2 className={styles.titulo}>LOGIN</h2>

      <div className={styles.caixa}>
        <input className={styles.input} type="text" placeholder="Email/CNPJ" />
        <input className={styles.input} type="password" placeholder="Senha" />
        <p className={styles.esqueci} onClick={handleEsqueci}>Esqueci a senha</p>
        <button className={styles.botao} onClick={handleEntrar}>Entrar</button>
      </div>
    </div>
  )
}

export default Login