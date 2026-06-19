import { HashRouter, Routes, Route } from 'react-router-dom'
import TelaInicial from './pages/TelaInicial'
import Login from './pages/Login'
import TradutorSurdo from './pages/TradutorSurdo'
import TradutorOuvinte from './pages/TradutorOuvinte'
import Selecionar from './pages/Selecionar'
import RecuperarSenha from './components/Recupera_Forms'
import RecuperarEmail from './components/Recuperar_Email'
import RecuperarSMS from './components/Recuperar_SMS'
import Configuracoes from './pages/Configuracoes'
import ConfSemConta from './components/Conf_SemConta'
import ConfConta from './components/Conf_Conta'
import SistemaIniciando from './pages/SistemaIniciando'
import ConfSistema from './components/Conf_Sistema'

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
        <Route path="/recuperar-email" element={<RecuperarEmail />} />
        <Route path="/recuperar-sms" element={<RecuperarSMS />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/configuracoes/login" element={<ConfSemConta />} />
        <Route path="/configuracoes/conta" element={<ConfConta />} />
        <Route path="/configuracoes/sistema" element={<ConfSistema />} />
        <Route path="/pages/SistemaIniciando" element={<SistemaIniciando />} />
      </Routes>
    </HashRouter>
  )
}

export default App
