import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../css/Conf_SemConta.module.css";

function ConfSemConta() {
  const navigate = useNavigate();
  const [idUsuario, setIdUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleEntrar() {
    if (!idUsuario || !senha) {
      setErro("Preencha o ID de usuário e a senha.");
      return;
    }
    setErro("");
    // TODO: validar credenciais quando a autenticação real estiver disponível
    navigate("/configuracoes/conta");
  }

  return (
    <div className={styles.page}>
      <img src={logo} alt="Logo SinalizaAI" className={styles.logo} />
      <h1 className={styles.title}>CONFIGURAÇÕES</h1>

      <div className={styles.panel}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTop}>
            <button className={styles.sidebarItem}>Conta</button>
          </div>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.instructions}>Faça o login para acessar o sistema</p>

          <input
            type="text"
            placeholder="ID Usuário"
            className={styles.input}
            value={idUsuario}
            onChange={(e) => setIdUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className={styles.input}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {erro && <p className={styles.errorMessage}>{erro}</p>}

          <button className={styles.enterButton} onClick={handleEntrar}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfSemConta;