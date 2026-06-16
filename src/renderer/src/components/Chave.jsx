import styles from '../css/Chave.module.css'

function Chave({ onAvancar, onVoltar }) {
  return (
    <div>
      <button onClick={onVoltar}>Voltar</button>
      <button onClick={onAvancar}>Avançar</button>
    </div>
  )
}

export default Chave