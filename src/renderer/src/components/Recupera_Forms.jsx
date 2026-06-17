import styles from '../css/Recuperar_form.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Recupera_Forms() {
  const navigate = useNavigate()
  const [valor, setValor] = useState('')

  function handleEnviar() {
    if (valor.includes('@')) {
      navigate('/recuperar-email')
    } else {
      navigate('/recuperar-sms')
    }
  }

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2 className={styles.titulo}>RECUPERAR SENHA</h2>
      <div className={styles.caixa}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu Email/Número"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button className={styles.botao} onClick={handleEnviar}>Enviar</button>
      </div>
    </div>
  )
}

export default Recupera_Forms