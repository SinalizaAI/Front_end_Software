import { useState } from 'react' // Importamos o useState para controlar o clique
import styles from '../css/ajuda.module.css'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function Ajuda() {
  const navigate = useNavigate()
  
  // Criamos um estado que começa com 'sobre', garantindo que ele já inicie ativo
  const [abaAtiva, setAbaAtiva] = useState('sobre')

  return (
    <section className={styles.section}>
      {/* Imagem direta, idêntica ao Código 1 */}
      <img src={Logo} alt="Logo do SinalizaAI" className={styles.logo} />

      <h1>Ajuda</h1>

      <div className={styles.container}>
        <div className={styles.links_container}>
          <div className={styles.links}>
            {/* Se o estado for 'sobre', aplica a classe 'active' */}
            <a 
              onClick={() => { setAbaAtiva('sobre'); navigate('/Ajuda'); }} 
              className={abaAtiva === 'sobre' ? styles.active : ''}
            >
              Sobre
            </a>
            
            {/* Se o estado for 'surda', aplica a classe 'active' */}
            <a 
              onClick={() => { setAbaAtiva('surda'); navigate('/ComoFuncionaPS'); }} 
              className={abaAtiva === 'surda' ? styles.active : ''}
            >
              Como funciona - pessoa surda
            </a>
            
            {/* Se o estado for 'ouvinte', aplica a classe 'active' */}
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
              O <span>Sinaliza</span>
              <span className={styles.ai}>AI</span> nasceu para transformar acessibilidade em algo{' '}
              <span>natural, humano e presente no cotidiano.</span>
            </p>
            <p>
              Unindo <span>inteligência artificial, inclusão e inovação</span>, criamos uma nova
              forma de aproximar pessoas <span>surdas</span> e <span>ouvintes</span> em qualquer
              ambiente.
            </p>
            <p>
              Desenvolvemos experiências capazes de <span>reduzir barreiras de comunicação</span> e
              <span>promover autonomia através da inovação.</span> Acreditamos que{' '}
              <span>acessibilidade </span>
              não deve ser adaptação. Deve ser padrão.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ajuda