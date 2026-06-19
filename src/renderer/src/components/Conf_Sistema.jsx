import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../css/Conf_Sistema.module.css";

const menuItems = [
  { label: "Conta", path: "/configuracoes/conta" },
  { label: "Sistema", path: "/configuracoes/sistema" },
  { label: "Chave", path: "/configuracoes/chave" },
  { label: "Acessos", path: "/configuracoes/acessos" },
  { label: "Histórico", path: "/configuracoes/historico" },
  { label: "Permissões", path: "/configuracoes/permissoes" },
  { label: "Encerrar", path: "/configuracoes/encerrar" },
];

// TODO: substituir pelos dados reais vindos da API/contexto do sistema
const dadosSistema = {
  brilhoAutomatico: "ativado",
  volume: "80",
  wifi: "ativado",
  status: "conectado",
  intensidadeSinal: "excelente",
};

function ConfSistema() {
  const navigate = useNavigate();

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
                className={`${styles.sidebarItem} ${
                  item.label === "Sistema" ? styles.sidebarItemActive : ""
                }`}
                onClick={() => navigate(item.path)}
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
          <div className={styles.sectionBlock}>
            <p className={styles.sectionTitle}>Tela</p>
            <div className={styles.dataList}>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Brilho automático: </span>
                {dadosSistema.brilhoAutomatico}
              </p>
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <p className={styles.sectionTitle}>Som</p>
            <div className={styles.dataList}>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Volume: </span>
                {dadosSistema.volume}
              </p>
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <p className={styles.sectionTitle}>Rede</p>
            <div className={styles.dataList}>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Wifi: </span>
                {dadosSistema.wifi}
              </p>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Status: </span>
                {dadosSistema.status}
              </p>
              <p className={styles.dataRow}>
                <span className={styles.dataLabel}>Intensidade do sinal: </span>
                {dadosSistema.intensidadeSinal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfSistema;