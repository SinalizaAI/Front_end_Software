import { HashRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./components/TelaInicial";
import TradutorSurdo from "./pages/TradutorSurdo";
import TradutorOuvinte from "./pages/TradutorOuvinte";
 
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/surdo" element={<TradutorSurdo />} />
        <Route path="/ouvinte" element={<TradutorOuvinte />} />
      </Routes>
    </HashRouter>
  );
}
 
export default App;