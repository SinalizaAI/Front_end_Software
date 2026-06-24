import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from '../css/Cadastro_Funcionario.module.css'
import logo from '../assets/logo.png'

function Cadastro_Funcionario() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nomeCompleto: '',
    cargo: '',
    codigoFuncionario: '',
    cpf: '',
    senha: '',
    email: '',
    celular: '',
    turno: ''
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleCadastrar() {
    // TODO: chamar API aqui
    console.log('Dados para enviar:', form)
    navigate('/pages/SistemaInicio')
  }

  return (
    <div className={styles.page}>
      <img src={logo} alt="Logo SinalizaAI" className={styles.logo} />
      <h1 className={styles.title}>CADASTRO DE ACESSO</h1>

      <div className={styles.panel}>
        <p className={styles.instrucao}>Preencha todas as informações:</p>

        <input className={styles.input} name="nomeCompleto"      type="text"     placeholder="Nome Completo"         value={form.nomeCompleto}      onChange={handleChange} />
        <input className={styles.input} name="cargo"             type="text"     placeholder="Cargo"                 value={form.cargo}             onChange={handleChange} />
        <input className={styles.input} name="codigoFuncionario" type="text"     placeholder="Código do Funcionário" value={form.codigoFuncionario} onChange={handleChange} />
        <input className={styles.input} name="cpf"               type="text"     placeholder="CPF"                   value={form.cpf}               onChange={handleChange} />
        <input className={styles.input} name="senha"             type="password" placeholder="Senha"                 value={form.senha}             onChange={handleChange} />
        <input className={styles.input} name="email"             type="email"    placeholder="Email"                 value={form.email}             onChange={handleChange} />
        <input className={styles.input} name="celular"           type="tel"      placeholder="Celular"               value={form.celular}           onChange={handleChange} />
        <input className={styles.input} name="turno"             type="text"     placeholder="Turno"                 value={form.turno}             onChange={handleChange} />

        <div className={styles.botoes}>
         <button className={styles.btn} onClick={() => navigate('/funcionario')}>Voltar</button>
          <button className={styles.btn} onClick={handleCadastrar}>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Cadastro_Funcionario