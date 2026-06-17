import styles from '../css/Chave.module.css'
import { useState } from 'react'

function Chave({ onAvancar }) {
  const [chaveSelecionada, setChaveSelecionada] = useState(null)

  return (
    <div className={styles.container_chave}>
      <h2>CHAVES DISPONIVEIS</h2>

      <div className={styles.container_filho}>
        <h5>Selecione a sua chave:</h5>

        <div className={styles.num_chave}>
          <button
            className={chaveSelecionada === 1 ? styles.ativa : ''}
            onClick={() => setChaveSelecionada(1)}
          >
            Chave 1
          </button>

          <button
            className={chaveSelecionada === 2 ? styles.ativa : ''}
            onClick={() => setChaveSelecionada(2)}
          >
            Chave 2
          </button>

          <button
            className={chaveSelecionada === 3 ? styles.ativa : ''}
            onClick={() => setChaveSelecionada(3)}
          >
            Chave 3
          </button>

          <button
            className={chaveSelecionada === 4 ? styles.ativa : ''}
            onClick={() => setChaveSelecionada(4)}
          >
            Chave 4
          </button>
        </div>
        <button onClick={chaveSelecionada ? onAvancar : null} disabled={!chaveSelecionada}>
          Selecionar
        </button>
      </div>
    </div>
  )
}

export default Chave
