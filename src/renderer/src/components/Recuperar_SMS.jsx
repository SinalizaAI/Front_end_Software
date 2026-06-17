import styler from '../css/Recuperar_sms.module.css'
import logo from '../assets/logo.png'

function Recuperar_SMS({ onVoltar }) {
  return (
    <div className={styler.container}>
      <img src={logo} className={styler.logo} alt="logo" />
      <h2 className={styler.titulo}>RECUPERAR SENHA</h2>
      <div className={styler.caixa}>
        <p className={styler.confirmacao_titulo}>SMS ENVIADO!</p>
        <p className={styler.confirmacao_texto}>Verifique seu sms para redefinir sua senha.</p>
        <p className={styler.voltar} onClick={onVoltar}>Voltar para tela inicial</p>
      </div>
    </div>
  )
}

export default Recuperar_SMS