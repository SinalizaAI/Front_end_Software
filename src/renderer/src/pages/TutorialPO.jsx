import styles from '../css/TutorialPO.module.css'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function ComoFuncionaPO() {
  const navigate = useNavigate()

  return (
    <section className={styles.section}>
      <img src={Logo} alt="Logo do SinalizaAI" className={styles.logo} />

      <h1>Ajuda</h1>

      <div className={styles.container}>
        <div className={styles.links_container}>
          <div className={styles.links}>
            <a onClick={() => navigate('/Ajuda')}>Sobre</a>
            <a onClick={() => navigate('/ComoFuncionaPS')}>Como funciona - pessoa surda</a>
            <a onClick={() => navigate('/ComoFuncionaPO')}>Como funciona - pessoa ouvinte</a>
          </div>
          <button onClick={() => navigate('/pages/SistemaInicio')} className={styles.btn}>
            Voltar
          </button>
        </div>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <p> Vídeo tutorial usuário ouvinte </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaPO
