import './App.css';
// import CardProduct from './components/CardProduct/CardProduct';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES

import HomePage from './pages/HomePage/HomePage';
import ProductosPage from './pages/ProductosPage/Productos';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import DetailPage from './pages/DetailPage/DetailPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
