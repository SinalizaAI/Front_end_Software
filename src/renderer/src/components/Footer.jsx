import styler from '../css/Footer.module.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <div className={styler.container}>
      <a className={styler.configuracoes} onClick={() => navigate('/configuracoes/login')}>
        <div className={styler.confi}></div>
        CONFIGURAÇÕES
      </a>
      <div className={styler.status}>
        Status: 
        <input className={styler.on_off} value="Ativo" readOnly />
      </div>
      <a className={styler.ajuda} onClick={() => navigate('/ajuda')}>
        <div className={styler.img_ajuda}></div>
        AJUDA
      </a>
    </div>
  )
}

export default Footer
