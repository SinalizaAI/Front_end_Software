import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from '../css/Conf_Conta.module.css'
import encerrarStyles from '../css/Conf_Encerrar.module.css'

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

function ConfEncerrar() {
  const navigate = useNavigate()

  // Função chamada quando o usuário clica em "Sim".
  // Encerra o atendimento e volta pra Tela Inicial.
  function handleConfirmarEncerramento() {
    navigate('/')
  }

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
                  item.label === 'Encerrar' ? styles.sidebarItemActive : ''
                }`}
                onClick={() => navigate(item.path)}
                aria-current={item.label === 'Encerrar' ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>

        {/* ===== CONTEÚDO: pergunta de confirmação centralizada ===== */}
        <div className={styles.content}>
          <div className={encerrarStyles.centro}>
            <p className={encerrarStyles.pergunta}>Encerrar atendimento?</p>
            <button className={encerrarStyles.botaoSim} onClick={handleConfirmarEncerramento}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfEncerrar