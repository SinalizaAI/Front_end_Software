import styles from '../css/Selecionar.module.css'
import Chave from '../components/Chave.jsx'
import Funcionario from '../components/Funcionario.jsx'
import Cadastro_Funcionario from '../components/Cadastro_Funcionario.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Selecionar() {
  const [tela, setTela] = useState('chave')
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.img_logo}>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.card}>
        {tela === 'chave' && <Chave onAvancar={() => setTela('funcionario')} />}
        {tela === 'funcionario' && <Funcionario onAvancar={() => setTela('cadastro')} />}
        {tela === 'cadastro' && <Cadastro_Funcionario onVoltar={() => setTela('funcionario')} />}
      </div>
    </div>
  )
}

export default Selecionar
