import styler from '../css/TelaInicial.module.css'
import { useNavigate } from 'react-router-dom'

function TelaInicial() {
  const navigate = useNavigate()

  return (
    <div className={styler.container}>
     ola 
    </div>
  )
}

export default TelaInicial
