import styles from '../css/Selecionar.module.css'
import Chave from '../components/Chave.jsx'
import Funcionario from '../components/Funcionario.jsx'
import Cadastro_Funcionario from '../components/Cadastro_Funcionario.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Selecionar() {
  const [tela, setTela] = useState('chave')
  const navigate = useNavigate()

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <button onClick={() => navigate('/login')}>Voltar</button>
        <p className={styles.subtitulo}>
          {tela === 'chave' && 'SELECIONAR CHAVE'}
          {tela === 'funcionario' && 'SELECIONAR FUNCIONÁRIOS'}
          {tela === 'cadastro' && 'CADASTRO DE FUNCIONÁRIOS'}
        </p>
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