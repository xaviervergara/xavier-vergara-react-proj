import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import logo from '../../assets/logo-png.png';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

//rafce (snippet)
const NavBar = () => {
  return (
    <Grid style={{ marginBottom: '1em' }} className="navBar" container>
      <Grid className="imgContainer" container>
        <Link to="/">
          <img className="imgLogo" src={logo} alt="" />
        </Link>

        <SearchBar />
      </Grid>

      <Grid className="container-main" container>
        <Link className="container-item" to="/">
          Home
        </Link>
        <Link className="container-item" to="/productos">
          Productos
        </Link>
        <Link className="container-item" to="/about">
          About
        </Link>
        <Link className="container-item" to="/contacto">
          Contacto
        </Link>

        <CartWidget xs={1} className="container-item" />
      </Grid>
    </Grid>
  );
};

export default NavBar;
