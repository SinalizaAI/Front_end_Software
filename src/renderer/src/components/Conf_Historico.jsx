import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from '../css/Conf_Conta.module.css'
import historicoStyles from '../css/Conf_Historico.module.css'

const MENU_ITEMS = [
  { label: 'Conta', path: '/configuracoes/conta' },
  { label: 'Sistema', path: '/configuracoes/sistema' },
  { label: 'Chave', path: '/configuracoes/chave' },
  { label: 'Acessos', path: '/configuracoes/acessos' },
  { label: 'Histórico', path: '/configuracoes/historico' },
  { label: 'Permissões', path: '/configuracoes/permissoes' },
  { label: 'Encerrar', path: '/configuracoes/encerrar' }
]

// substituir pelos dados reais vindos da API
const DADOS_HISTORICO = [
  // { dia: '20/06/2026', inicio: '08:00', termino: '12:00' },
]

function ConfHistorico() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <img src={logo} alt="Logo SinalizaAI" className={styles.logo} />
      <h1 className={styles.title}>CONFIGURAÇÕES</h1>

      <div className={styles.panel}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTop}>
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`${styles.sidebarItem} ${
                  item.label === 'Histórico' ? styles.sidebarItemActive : ''
                }`}
                onClick={() => navigate(item.path)}
                aria-current={item.label === 'Histórico' ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className={styles.backButton} onClick={() => navigate('/pages/SistemaInicio')}>
  Voltar
</button>
        </div>

        <div className={styles.content}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
            <p className={styles.dataRow} style={{ textAlign: 'center' }}>
              Histórico
            </p>

            <div className={historicoStyles.infoBox}>
              <div className={historicoStyles.cabecalho}>
                <span className={historicoStyles.colDia}>Dia</span>
                <span className={historicoStyles.colInicio}>Horário inicio</span>
                <span className={historicoStyles.colTermino}>Horário término</span>
              </div>

              {DADOS_HISTORICO.map((registro, index) => (
                <div key={index} className={historicoStyles.linha}>
                  <span className={historicoStyles.colDia}>{registro.dia}</span>
                  <span className={historicoStyles.colInicio}>{registro.inicio}</span>
                  <span className={historicoStyles.colTermino}>{registro.termino}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfHistorico