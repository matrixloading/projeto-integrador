import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Produtos from "./pages/Produtos";
import Fornecedores from "./pages/Fornecedores";
import Associacoes from "./pages/Associacoes";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Produtos</Link></li>
            <li><Link to="/fornecedores">Fornecedores</Link></li>
            <li><Link to="/associacoes">Associações</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/associacoes" element={<Associacoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
