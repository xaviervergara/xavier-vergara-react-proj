import './App.css';
// import CardProduct from './components/CardProduct/CardProduct';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES

import Home from './pages/Home';
import Productos from './pages/Productos';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <main>
          <ItemListContainer />
        </main>

        <Routes>
          <Route path="/" element={<Productos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
