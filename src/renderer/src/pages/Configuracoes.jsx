import styles from '../css/Configuracoes.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Conf_SemConta from '../components/Conf_SemConta.jsx'
import Conf_Conta from '../components/Conf_Conta.jsx'
import Conf_Sistema from '../components/Conf_Sistema.jsx'
import Conf_Chave from '../components/Conf_Chave.jsx'
import Conf_Acesso from '../components/Conf_Acesso.jsx'
import Conf_Historico from '../components/Conf_Historico.jsx'
import Conf_Permissoes from '../components/Conf_Permissoes.jsx'
import Conf_Encerrar from '../components/Conf_Encerrar.jsx'

function Configuracoes() {
  const [tela, setTela] = useState('semConta')
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <button onClick={() => setTela('semConta')}>Sem Conta</button>
        <button onClick={() => setTela('conta')}>Conta</button>
        <button onClick={() => setTela('sistema')}>Sistema</button>
        <button onClick={() => setTela('chave')}>Chave</button>
        <button onClick={() => setTela('acesso')}>Acesso</button>
        <button onClick={() => setTela('historico')}>Histórico</button>
        <button onClick={() => setTela('permissoes')}>Permissões</button>
        <button onClick={() => setTela('encerrar')}>Encerrar</button>
      </div>
      <div className={styles.card}>
        {tela === 'semConta' && <Conf_SemConta />}
        {tela === 'conta' && <Conf_Conta />}
        {tela === 'sistema' && <Conf_Sistema />}
        {tela === 'chave' && <Conf_Chave />}
        {tela === 'acesso' && <Conf_Acesso />}
        {tela === 'historico' && <Conf_Historico />}
        {tela === 'permissoes' && <Conf_Permissoes />}
        {tela === 'encerrar' && <Conf_Encerrar />}
      </div>
    </div>
  )
}

export default Configuracoes