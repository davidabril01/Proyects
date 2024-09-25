import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagePrincipal from './components/PagePrincipal';
import ProductPage from './components/ProductPage'; // Este será el componente que muestre la página de cada producto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagePrincipal />} />
        {/* Ruta dinámica para productos */}
        <Route path="/products/:productName" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
