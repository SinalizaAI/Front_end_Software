import styles from '../css/SistemaIniciando.module.css'
import Logo from '../assets/logo.png'

function SistemaInativoChave() {
  return (
    <section className={styles.sec}>
      <div className={styles.logo_container}>
        <img src={Logo} alt="Logo do SinalizaAI" />
        <h2>Software inativo, por favor ative sua chave!</h2>
      </div>
    </section>
  )
}

export default SistemaInativoChave
