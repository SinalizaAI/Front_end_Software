import styler from '../css/Recuperar_form.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Recupera_Forms() {
  const navigate = useNavigate()
  const [valor, setValor] = useState('')

  function handleEnviar() {
    if (valor.includes('@')) {
      navigate('/recuperar-email')
    } else {
      navigate('/recuperar-sms')
    }
  }

  return (
    <div className={styler.container}>
      <img src={logo} className={styler.logo} alt="logo" />
      <h2 className={styler.titulo}>RECUPERAR SENHA</h2>
      <div className={styler.caixa}>
        <input
          className={styler.input}
          type="text"
          placeholder="Digite seu Email/Número"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button className={styler.botao} onClick={handleEnviar}>Enviar</button>
      </div>
    </div>
  )
}

export default Recupera_Forms