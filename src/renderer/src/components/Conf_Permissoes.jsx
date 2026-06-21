import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from '../css/Conf_Conta.module.css'
import permissoesStyles from '../css/Conf_Permissoes.module.css'

// ===== MENU LATERAL =====
const MENU_ITEMS = [
  { label: 'Conta', path: '/configuracoes/conta' },
  { label: 'Sistema', path: '/configuracoes/sistema' },
  { label: 'Chave', path: '/configuracoes/chave' },
  { label: 'Acessos', path: '/configuracoes/acessos' },
  { label: 'Histórico', path: '/configuracoes/historico' },
  { label: 'Permissões', path: '/configuracoes/permissoes' },
  { label: 'Encerrar', path: '/configuracoes/encerrar' }
]

// ===== DADOS DAS PERMISSÕES =====
const DADOS_PERMISSOES = {
  camera: 'concedida',
  audio: 'concedida'
}

function ConfPermissoes() {
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
                  item.label === 'Permissões' ? styles.sidebarItemActive : ''
                }`}
                onClick={() => navigate(item.path)}
                aria-current={item.label === 'Permissões' ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>

        <div className={styles.content}>
          <div className={permissoesStyles.bloco}>
            <p className={permissoesStyles.linha}>
              <span className={permissoesStyles.rotulo}>Permissão da câmera: </span>
              {DADOS_PERMISSOES.camera}
            </p>
            <p className={permissoesStyles.linha}>
              <span className={permissoesStyles.rotulo}>Permissão de áudio: </span>
              {DADOS_PERMISSOES.audio}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfPermissoes