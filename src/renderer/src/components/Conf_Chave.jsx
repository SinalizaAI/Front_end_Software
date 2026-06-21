import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from '../css/Conf_Conta.module.css'
import chaveStyles from '../css/Conf_Chave.module.css'

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
const DADOS_CHAVE = {
  plano: 'Software',
  informacoesPlano: '*Informações do plano*'
}

function ConfChave() {
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
                  item.label === 'Chave' ? styles.sidebarItemActive : ''
                }`}
                onClick={() => navigate(item.path)}
                aria-current={item.label === 'Chave' ? 'page' : undefined}
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
            <p className={styles.dataRow}>
              <span className={styles.dataLabel}>Plano: </span>
              {DADOS_CHAVE.plano}
            </p>

            <div className={chaveStyles.infoBox}>
              <p className={chaveStyles.infoText}>{DADOS_CHAVE.informacoesPlano}</p>
              <p className={chaveStyles.contato}>{DADOS_CHAVE.contato}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfChave
