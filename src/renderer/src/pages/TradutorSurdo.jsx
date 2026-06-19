import { useEffect, useState } from 'react'
import styles from '../css/TradutorSurdo.module.css'
import Footer from '../components/Footer'

function TradutorSurdo() {
  const [fraseReconhecida, setFraseReconhecida] = useState('')

  useEffect(() => {
    window.api.onFraseReconhecida((dado) => {
      setFraseReconhecida(dado)
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.area_principal}>
        <div className={styles.camera}>câmera</div>
        <div className={styles.avatar}>avatar</div>
      </div>
      <div className={styles.resultado}>
        {fraseReconhecida || 'Aguardando sinal...'}
      </div>
      <Footer />
    </div>
  )
}

export default TradutorSurdo