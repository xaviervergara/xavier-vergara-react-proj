import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import logo from '../../assets/logo-png.png';
import SearchBar from '../SearchBar/SearchBar';
//rafce (snippet)
const NavBar = () => {
  return (
    <Grid style={{ marginBottom: '1em' }} className="navBar" container>
      <Grid className="imgContainer" container>
        <img className="imgLogo" src={logo} alt="" />
        <SearchBar />
      </Grid>

      <Grid className="container-main" container>
        <Grid xs={1} className="container-item">
          <a className="header-link" href="#">
            Home
          </a>
        </Grid>
        <Grid xs={1} className="container-item">
          <a className="header-link" href="#">
            Productos
          </a>
        </Grid>
        <Grid xs={1} className="container-item">
          <a className="header-link" href="#">
            Pregunta
          </a>
        </Grid>
        <Grid xs={1} className="container-item">
          <a className="header-link" href="#">
            Contacto
          </a>
        </Grid>

        <CartWidget xs={1} className="container-item" />
      </Grid>
    </Grid>
  );
};

export default NavBar;
