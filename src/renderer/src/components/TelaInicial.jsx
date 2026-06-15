import styles from '../css/TelaInicial.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function TelaInicial() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/login')
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p className={styles.sistema}>Sistema de atendimento</p>
      <h1 className={styles.titulo}>Sinaliza<span className={styles.ai}>AI</span></h1>
      <p className={styles.toque}>Toque na tela para iniciar</p>
    </div>
  )
}

export default TelaInicial