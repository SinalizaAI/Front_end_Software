import { useState } from 'react' // Importamos o useState
import styles from '../css/ComoFuncionaPO.module.css'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function ComoFuncionaPO() {
  const navigate = useNavigate()

  // Como estamos na página da pessoa ouvinte, ela já começa ativa por padrão
  const [abaAtiva, setAbaAtiva] = useState('ouvinte')

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
              <span>Fluxo do usuário ouvinte</span>
            </p>
            <p>
              <span>1 - Voz ou Texto</span> é digitado/falado pelo atendente em português.
            </p>
            <p>
              <span>2 - Simplificador</span> converte para glosa (estrutura da Libras).
            </p>
            <p>
              <span>3 - Avatar exibe</span> a mensagem em Libras na tela para o usuário surdo.
            </p>

            <button onClick={() => navigate('/pages/TutorialPO')} className={styles.btn2}>
              Tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaPO