import styles from '../css/Funcionario.module.css'
import { useNavigate } from 'react-router-dom'

function Funcionario() {
  const navigate = useNavigate()

  return (
    <div className={styles.container_funcionario}>
      <h2>ACESSOS</h2>

      <div className={styles.container_azul}>
        <h5>Selecione ou cadastre novos acessos</h5>

        <div className={styles.propri}>
          <p>• Proprietário</p>
        </div>
        <div className={styles.botoes}>
          <button className={styles.btn} onClick={() => navigate('/pages/SistemaInicio')}>Selecionar</button>
          <button className={styles.btn} onClick={() => navigate('/cadastro-funcionario')}>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Funcionario