import styles from '../css/cadastro_funcionario.module.css'

function Cadastro_Funcionario({ onAvancar, onVoltar }) {
  return (
    <div>
      <button onClick={onVoltar}>Voltar</button>
      <button onClick={onAvancar}>Avançar</button>
    </div>
  )
}

export default Cadastro_Funcionario