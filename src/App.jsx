import './App.css';
import NavBar from './components/NavBar/NavBar';
// import CardProduct from './components/CardProduct/CardProduct';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListProduct from './components/ListProduct/ListProduct';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES

import Home from './pages/Home';
import Productos from './pages/Productos';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Productos />} />
        </Routes>

        <NavBar />

        <ItemListContainer />

        <main>
          <ListProduct />
        </main>
      </div>
    </Router>
  );
}

export default App;
