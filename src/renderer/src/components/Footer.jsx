import styler from '../css/Footer.module.css'
import { useNavigate } from 'react-router-dom'

// Importe as imagens diretamente se for mais seguro
// import ConfiguracaoIcon from '../assets/configuracao.svg'
// import AjudaIcon from '../assets/ajuda.svg'

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={styler.container}>
      
      {/* Coluna 1: Configurações - Alinhada à Esquerda */}
      <a className={styler.configuracoes} onClick={() => navigate('/configuracoes/login')}>
        <div className={styler.confi}></div>
        {/* <img src={ConfiguracaoIcon} alt="Ícone de Configurações" className={styler.confi} /> */}
        CONFIGURAÇÕES
      </a>
      
      {/* Coluna 2: Status - Totalmente Centralizada */}
      <div className={styler.status}>
        Status:
        <input className={styler.on_off} value="Totem Ativo" readOnly />
      </div>
      
      {/* Coluna 3: Ajuda - Alinhada à Direita */}
      <a className={styler.ajuda} onClick={() => navigate('/ajuda')}>
        <div className={styler.img_ajuda}></div>
        {/* <img src={AjudaIcon} alt="Ícone de Ajuda" className={styler.img_ajuda} /> */}
        AJUDA
      </a>
      
    </div>
  );
}

export default Footer;