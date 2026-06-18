import styles from '../css/funcionario.module.css'

function Funcionario({ onAvancar, onVoltar }) {
  return (
    <div className={styles.container_funcionario}>
      <h2>ACESSOS</h2>

      <div className={styles.container_azul}>
        <h5>Selecione ou cadastre novos acessos</h5>

        <div className={styles.propri}>
          <p>• Proprietário</p>
        </div>
        <div className={styles.botoes}>
          <button onClick={onAvancar}>Selecionar</button>
          <button onClick={onAvancar}>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Funcionario
