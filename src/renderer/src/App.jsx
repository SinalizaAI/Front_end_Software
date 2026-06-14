import { HashRouter, Routes, Route } from 'react-router-dom'
import TradutorSurdo from './pages/TradutorSurdo'
import TradutorOuvinte from './pages/TradutorOuvinte'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/surdo" element={<TradutorSurdo />} />
        <Route path="/ouvinte" element={<TradutorOuvinte />} />
      </Routes>
    </HashRouter>
  )
}

export default App