import styles from '../css/TradutorOuvinte.module.css'

function TradutorOuvinte() {
  return (
    <div className={styles.container}>

      <p className={styles.titulo}></p>

      <div className={styles.area_principal}>

        <div className={styles.coluna_esquerda}>
          <div className={styles.resultado}>
            <p></p>
          </div>
          <p className={styles.historico}></p>
        </div>

        <div className={styles.coluna_direita}>

          <div className={styles.caixa}>
            <p className={styles.label}></p>
            <textarea className={styles.textarea}></textarea>
            <button className={styles.btn}></button>
          </div>

          <div className={styles.caixa}>
            <p className={styles.label}></p>
            <div className={styles.microfones}>
            
            </div>
            <button className={styles.btn}>Enviar resposta</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default TradutorOuvinte