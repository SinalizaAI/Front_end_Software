import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from '../css/Conf_Acesso.module.css'

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
const USUARIOS = [
  { id: 1, nome: 'Administrador' },
  { id: 2, nome: 'Atendente 01' },
  { id: 3, nome: 'Atendente 02' }
]

function ConfAcessos() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <img src={logo} alt="Logo SinalizaAI" className={styles.logo} />
      <h1 className={styles.title}>CONFIGURAÇÕES</h1>

      <div className={styles.panel}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarTop}>
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`${styles.sidebarItem} ${item.label === 'Acessos' ? styles.sidebarItemActive : ''}`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className={styles.backButton} onClick={() => navigate('/pages/SistemaInicio')}>
            Voltar
          </button>
        </div>

        {/* Conteúdo */}
        <div className={styles.content}>
          <p className={styles.sectionTitle}>
            <span className={styles.dataLabel}>Usuários cadastrados: </span>
            {USUARIOS.length}
          </p>

          <div className={styles.userList}>
            {USUARIOS.map((usuario) => (
              <p key={usuario.id} className={styles.userRow}>
                <span className={styles.dataLabel}>Nome: </span>
                {usuario.nome}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfAcessos
