import { useState } from 'react' // Importamos o useState
// import styles from '../css/Ajuda.module.css'
import styles from '../css/ComoFuncionaPS.module.css'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function ComoFuncionaPS() {
  const navigate = useNavigate()

  // Como estamos na página da pessoa surda, ela já começa ativa por padrão
  const [abaAtiva, setAbaAtiva] = useState('surda')

  return (
    <section className={styles.section}>
      <img src={Logo} alt="Logo do SinalizaAI" className={styles.logo} />

      <h1>Ajuda</h1>

      <div className={styles.container}>
        <div className={styles.links_container}>
          <div className={styles.links}>
            <a 
              onClick={() => { setAbaAtiva('sobre'); navigate('/Ajuda'); }}
              className={abaAtiva === 'sobre' ? styles.active : ''}
            >
              Sobre
            </a>
            <a 
              onClick={() => { setAbaAtiva('surda'); navigate('/ComoFuncionaPS'); }}
              className={abaAtiva === 'surda' ? styles.active : ''}
            >
              Como funciona - pessoa surda
            </a>
            <a 
              onClick={() => { setAbaAtiva('ouvinte'); navigate('/ComoFuncionaPO'); }}
              className={abaAtiva === 'ouvinte' ? styles.active : ''}
            >
              Como funciona - pessoa ouvinte
            </a>
          </div>
          <button onClick={() => navigate('/pages/SistemaInicio')} className={styles.btn}>
            Voltar
          </button>
        </div>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <p>
              <span>Fluxo do usuário surdo</span>
            </p>
            <p>
              <span>1 - Câmera</span> captura sinais em Libras em tempo real.
            </p>
            <p>
              <span>2 - Modelo de IA</span> classifica o sinal com precisão
            </p>
            <p>
              <span>3 - Resposta</span> é exibida como avatar em Libras, texto e voz
            </p>

            <button onClick={() => navigate('/pages/TutorialPS')} className={styles.btn2}>
              Tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaPS