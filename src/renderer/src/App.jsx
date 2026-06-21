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
import SistemaInicio from './pages/SistemaInicio'
import SistemaInativo from './pages/SistemaInativo'
import SistemaPendente from './pages/SistemaPendente'
import SistemaInativoChave from './pages/SistemaInativoChave'
import ConfHistorico from './components/Conf_Historico'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ConfChave from './components/Conf_Chave'
import ConfAcessos from './components/Conf_Acesso'
import ConfEncerrar from './components/Conf_Encerrar'
import ConfPermissoes from './components/Conf_Permissoes'


import Ajuda from './pages/Ajuda'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ajuda" element={<Ajuda />} />
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
        <Route path="/pages/SistemaInicio" element={<SistemaInicio />} />
        <Route path="/pages/SistemaInativo" element={<SistemaInativo />} />
        <Route path="/pages/SistemaPendente" element={<SistemaPendente />} />
        <Route path="/pages/SistemaInativoChave" element={<SistemaInativoChave />} />
        <Route path="/configuracoes/chave" element={<ConfChave />} />
        <Route path="/configuracoes/historico" element={<ConfHistorico />} />
        <Route path="/configuracoes/encerrar" element={<ConfEncerrar />} />
        <Route path="/configuracoes/permissoes" element={<ConfPermissoes />} />
        
       
        
        <Route path="/configuracoes/acessos" element={<ConfAcessos />} />
      </Routes>
    </HashRouter>
  )
}

export default App
