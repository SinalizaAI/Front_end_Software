import styles from '../css/TradutorSurdo.module.css'
import Footer from '../components/Footer'

function TradutorSurdo() {
  return (
    <div className={styles.container}>
      <div className={styles.area_principal}>

        <div className={styles.camera}>camera</div>

        <div className={styles.avatar}>avatar</div>
        
      </div>
      <Footer />
    </div>
  )
}

export default TradutorSurdo
