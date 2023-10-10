import './App.css';
// import CardProduct from './components/CardProduct/CardProduct';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES

import Home from './pages/Home';
import Productos from './pages/Productos';
import About from './pages/About';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
