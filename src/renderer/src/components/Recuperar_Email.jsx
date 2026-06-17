import styles from '../css/Recuperar_form.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Recupera_Email() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2 className={styles.titulo}>RECUPERAR SENHA</h2>
      <div className={styles.caixa}>
        <p className={styles.confirmacao_titulo}>EMAIL ENVIADO!</p>
        <p className={styles.confirmacao_texto}>Verifique seu email para redefinir sua senha.</p>
        <p className={styles.voltar} onClick={() => navigate('/login')}>Voltar para tela inicial</p>
      </div>
    </div>
  )
}

export default Recupera_Email