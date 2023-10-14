import BannerAutomatico from '../../components/BannerAutomatico/BannerAutomatico';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 'auto',
        // border: '3px solid red',
        alignitems: 'center',
      }}
    >
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: '3em',
          color: 'pink',
          marginBottom: '1em',
        }}
      >
        Bienvenid@ a la Homepage!
      </h1>
      <Link to="/productos">
        <BannerAutomatico />
      </Link>
    </div>
  );
};

export default HomePage;
