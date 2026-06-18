import styles from '../css/Chave.module.css'

function Chave({ onAvancar }) {
  return (
    <div className={styles.container_chave}>
      <h2>CHAVES DISPONIVEIS</h2>

      <div className={styles.container_azul}>
        <h5>Selecione a sua chave:</h5>

        <div className={styles.num_chave}>
          <p>• Chave 1</p>
          <p>• Chave 2</p>
          <p>• Chave 3</p>
          <p>• Chave 4</p>
          <p>• Chave 5</p>
        </div>

        <button onClick={onAvancar}>Selecionar</button>
      </div>
    </div>
  )
}

export default Chave