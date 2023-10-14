//ESTILOS
import './App.css';

//COMPONENTES
import NavBar from './components/NavBar/NavBar';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES
import HomePage from './pages/HomePage/HomePage';
import ProductosPage from './pages/ProductosPage/Productos';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import DetailPage from './pages/DetailPage/DetailPage';
import CategoryPage from './pages/Category/CategoryPage';

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
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
