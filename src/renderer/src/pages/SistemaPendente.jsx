import styles from '../css/SistemaIniciando.module.css'
import Logo from '../assets/logo.png'

function SistemaPendente() {
  return (
    <section className={styles.sec}>
      <div className={styles.logo_container}>
        <img src={Logo} alt="Logo do SinalizaAI" />
        <h2>Software pendente, por favor aguarde</h2>
      </div>
    </section>
  )
}

export default SistemaPendente
