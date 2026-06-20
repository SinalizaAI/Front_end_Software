import styles from '../css/SistemaInicio.module.css'
import FooterAtivo from '../components/Footer'

import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function SistemaInicio() {
  const navigate = useNavigate()

  function SistemaIniciando() {
    navigate('../pages/SistemaIniciando')
  }

  function SistemaInativo() {
    navigate('../pages/SistemaInativo')
  }

  function SistemaInativoChave() {
    navigate('../pages/SistemaInativoChave')
  }

  function SistemaPendente() {
    navigate('../pages/SistemaPendente')
  }

  return (
    <section className={styles.sec}>
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo do SinalizaAI" />
          <button onClick={SistemaIniciando} className={styles.btn}>
            Iniciar
          </button>
        </div>
      </div>
      <FooterAtivo />
    </section>
  )
}

export default SistemaInicio
