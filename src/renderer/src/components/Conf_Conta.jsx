import { useNavigate, useLocation } from "react-router-dom"; // Importado useLocation
import logo from "../assets/logo.png";
import styles from "../css/Conf_Conta.module.css";

const menuItems = [
  { label: "Conta", path: "/configuracoes/conta" },
  { label: "Sistema", path: "/configuracoes/sistema" },
  { label: "Chave", path: "/configuracoes/chave" },
  { label: "Acessos", path: "/configuracoes/acessos" },
  { label: "Histórico", path: "/configuracoes/historico" },
  { label: "Permissões", path: "/configuracoes/permissoes" },
  { label: "Encerrar", path: "/configuracoes/encerrar" },
];

// Substituir pelos dados reais vindos da API/contexto de autenticação
const dadosCadastrados = {
  nome: "Administrador",
  razaoSocial: "nome_empresa",
  cnpj: "cnpj_empresa",
  email: "email_empresa",
  telefone: "telefone_empresa",
  cidadeEstado: "Osasco/SP",
};

function ConfConta() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para pegar o caminho da URL atual

  function handleSairDaConta() {
    // TODO: limpar sessão/autenticação quando existir
    navigate('/pages/SistemaInicio');
  }

  return (
    <div className={styles.page}>
      <img src={logo} alt="Logo SinalizaAI" className={styles.logo} />
      <h1 className={styles.title}>CONFIGURAÇÕES</h1>

      <div className={styles.panel}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTop}>
            {menuItems.map((item) => (
              <button
                key={item.label}
                /* Se a URL do navegador bater com o path do item, aplica a classe de sublinhado */
                className={`${styles.sidebarItem} ${
                  location.pathname === item.path ? styles.sidebarItemActive : ""
                }`}
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

        <div className={styles.content}>
          <div>
            <p className={styles.sectionTitle}>Dados Cadastrados</p>
            <div className={styles.dataList}>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Nome: </span>
                {dadosCadastrados.nome}
              </p>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Razão social: </span>
                {dadosCadastrados.razaoSocial}
              </p>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>CNPJ: </span>
                {dadosCadastrados.cnpj}
              </p>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>E-mail: </span>
                {dadosCadastrados.email}
              </p>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Telefone: </span>
                {dadosCadastrados.telefone}
              </p>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Cidade/Estado: </span>
                {dadosCadastrados.cidadeEstado}
              </p>
            </div>
          </div>

          <button className={styles.logoutButton} onClick={handleSairDaConta}>
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfConta;