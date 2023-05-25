import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AplicacaoProcessamentoSalarialPage from "./pages/works/AplicacaoProcessamentoSalarialPage";
import AplicacaoGestaoAtivosImobilizadosPage from "./pages/works/AplicacaoGestaoAtivosImobilizadosPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/works/aplicacao-processamento-salarial" element={<AplicacaoProcessamentoSalarialPage />}></Route>
        <Route path="/works/aplicacao-gestao-ativos-imobilizados" element={<AplicacaoGestaoAtivosImobilizadosPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
