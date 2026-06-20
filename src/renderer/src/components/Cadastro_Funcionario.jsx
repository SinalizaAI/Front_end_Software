import styles from '../css/Cadastro_Funcionario.module.css'

function Cadastro_Funcionario({ onAvancar, onVoltar }) {

  
  return (
    <div>
      <button onClick={onVoltar}>Voltar</button>
      <h1 className={styles.h1}> Página Cadastro Funcionário </h1>
      <button onClick={onAvancar}>Avançar</button>
    </div>
  )
}

export default Cadastro_Funcionario