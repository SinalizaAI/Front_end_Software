import { useEffect, useState } from 'react'
import styles from '../css/TradutorOuvinte.module.css'
import Footer from '../components/Footer'
import microfone from '../assets/microfone.svg'
import stop from '../assets/stop.svg'

function TradutorOuvinte() {
  const [fraseReconhecida, setFraseReconhecida] = useState('')
  const [textoVoz, setTextoVoz] = useState('')
  const [statusGravacao, setStatusGravacao] = useState('')
  const [textoDigitado, setTextoDigitado] = useState('')

  useEffect(() => {
    window.api.onFraseReconhecida((dado) => {
      setFraseReconhecida(dado)
    })

    window.api.onVozAtendente((dado) => {
      setTextoVoz(dado)
    })

    window.api.onStatusGravacao((dado) => {
      setStatusGravacao(dado)
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.funcao}>
        <div className={styles.coluna_esquerda}>
          <input
            className={styles.resultado}
            value={fraseReconhecida || 'O resultado do sinal aparece aqui'}
            readOnly
          />
          <div className={styles.historico}>HISTÓRICO:</div>
        </div>
        <div className={styles.coluna_direita}>
          <div className={styles.texto_digitado}>
            <div className={styles.header_digitado}>
              <label className={styles.label}>Digitar texto</label>
              <hr className={styles.linha} />
            </div>
            <textarea
              className={styles.textarea}
              value={textoDigitado}
              onChange={(e) => setTextoDigitado(e.target.value)}
            />
            <div className={styles.footer_digitado}>
              <button
                className={styles.botao}
                onClick={() => {
                  if (textoDigitado.trim()) {
                    window.api.enviarRespostaOuvinte(textoDigitado)
                    setTextoDigitado('')
                  }
                }}
              >
                Enviar resposta
              </button>
            </div>
          </div>
          <div className={styles.falar}>
            <div className={styles.header_digitado}>
              <label className={styles.label}>Falar</label>
              <hr className={styles.linha} />
            </div>
            <textarea
              className={styles.textarea}
              value={textoVoz}
              readOnly
            />
            <div className={styles.footer_falar}>
              <div className={styles.gravar}>
                <button
                  className={styles.botao_gravacao}
                  onClick={() => window.api.iniciarGravacao()}
                >
                  <img src={microfone} alt="microfone" />
                </button>
                <button
                  className={styles.botao_microfone}
                  onClick={() => window.api.pararGravacao()}
                >
                  <img src={stop} alt="stop" />
                </button>
              </div>
              <span className={styles.status}>{statusGravacao}</span>
              <button
                className={styles.botao}
                onClick={() => {
                  if (textoVoz.trim()) {
                    window.api.enviarRespostaOuvinte(textoVoz)
                  }
                }}
              >
                Enviar resposta
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TradutorOuvinte