import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

//rafce (snippet)
const NavBar = () => {
  return (
    <nav>
      <div className="container-main">
        <div className="container-item">
          <a className="header-link" href="#">
            Home
          </a>
        </div>
        <div className="container-item">
          <a className="header-link" href="#">
            Producto
          </a>
        </div>
        <div className="container-item">
          <a className="header-link" href="#">
            Pregunta
          </a>
        </div>
        <div className="container-item">
          <a className="header-link" href="#">
            Contacto
          </a>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
