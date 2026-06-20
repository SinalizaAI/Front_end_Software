import styles from '../css/ajuda.module.css'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function Ajuda() {
  const navigate = useNavigate()

  function Sobre() {
    navigate('../pages/Ajuda')
  }

  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo do SinalizaAI" />
      </div>

      <h1>Ajuda</h1>

      <div className={styles.container}>
        <div className={styles.links_container}>
          <div className={styles.links}>
            <a onClick={() => Sobre}>Sobre</a>
            <a href="">Como funciona - pessoa surda</a>
            <a href="">Como funciona - pessoa ouvinte</a>
          </div>
          <button onClick={''} className={styles.btn}>
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
              <span>acessibilidade</span>
              não deve ser adaptação. Deve ser padrão.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ajuda
