import styles from '../css/login.module.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/')}>Voltar</button>
      <button onClick={() => navigate('/selecionar')}>Avançar</button>
    </div>
  )
}

export default Login