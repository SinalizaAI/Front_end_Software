import { HashRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./pages/TelaInicial";
import Login from "./pages/Login";
import TradutorSurdo from "./pages/TradutorSurdo";
import TradutorOuvinte from "./pages/TradutorOuvinte";
import Selecionar from "./pages/Selecionar";
import RecuperarSenha from "./pages/RecuperarSenha"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/surdo" element={<TradutorSurdo />} />
        <Route path="/ouvinte" element={<TradutorOuvinte />} />
        <Route path="/selecionar" element={<Selecionar />} />
        <Route path="/recuperar" element={<RecuperarSenha />} />
      </Routes>
    </HashRouter>
  );
}

export default App;