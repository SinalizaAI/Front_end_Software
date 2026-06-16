import styles from '../css/funcionario.module.css'

function Funcionario({ onAvancar, onVoltar }) {
  return (
    <div>
      <button onClick={onVoltar}>Voltar</button>
      <button onClick={onAvancar}>Avançar</button>
    </div>
  )
}

export default Funcionario