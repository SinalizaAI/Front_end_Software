import styles from '../css/ajuda.module.css'
import Logo from '../assets/logo.png'

function Ajuda() {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo do SinalizaAI" />
      </div>

      <h1>Ajuda</h1>

      <div className={styles.container}>
        <div className={styles.links}>
          <a href="">Sobre</a>
        </div>
        <div className={styles.content}></div>
      </div>
    </section>
  )
}

export default Ajuda
