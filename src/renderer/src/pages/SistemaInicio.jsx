import styles from '../css/SistemaInicio.module.css'
import Footer from '../components/Footer'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function SistemaInicio() {
  const navigate = useNavigate()

  function SistemaIniciando() {
    navigate('../pages/SistemaIniciando')
  }

  return (
    <section className={styles.sec}>
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
          <button onClick={SistemaIniciando} className={styles.btn}>
            Iniciar
          </button>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default SistemaInicio
