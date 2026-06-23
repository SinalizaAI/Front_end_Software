import { useState } from 'react'
import styles from '../css/Login.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    emailCnpj: '',
    senha: ''
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleEntrar() {
    // TODO: chamar API aqui
    // ex: await api.post('/login', form)
    console.log('Dados para enviar:', form)
    navigate('/selecionar')
  }

  function handleEsqueci() {
    navigate('/recuperar')
  }

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2 className={styles.titulo}>LOGIN</h2>

      <div className={styles.caixa}>
        <input className={styles.input} name="emailCnpj" type="text"     placeholder="Email/CNPJ" value={form.emailCnpj} onChange={handleChange} />
        <input className={styles.input} name="senha"     type="password" placeholder="Senha"      value={form.senha}    onChange={handleChange} />
        <p className={styles.esqueci} onClick={handleEsqueci}>Esqueci a senha</p>
        <button className={styles.botao} onClick={handleEntrar}>Entrar</button>
      </div>
    </div>
  )
}

export default Login