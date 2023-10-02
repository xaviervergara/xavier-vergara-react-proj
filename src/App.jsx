import './App.css';
import NavBar from './components/NavBar/NavBar';
// import CardProduct from './components/CardProduct/CardProduct';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListProduct from './components/ListProduct/ListProduct';

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer />

      <main>
        MAIN
        <ListProduct />
      </main>
    </div>
  );
}

export default App;
