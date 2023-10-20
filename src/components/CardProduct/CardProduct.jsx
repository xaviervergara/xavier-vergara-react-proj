import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './CardProduct.css';

//en vez de pasar props como arg y despues llamar prop.x, se destructura y se llama solo la variable
const CardProduct = ({ producto }) => {
  const { img, nombre, descripcion, precio } = producto;
  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card style={{ width: '20rem', margin: '1em', height: '23em' }}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={img} alt={nombre} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              color: 'green',
              fontWeight: 'bold',
              fontSize: '1.3em',
              marginTop: '.5em',
            }}
          >
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;
