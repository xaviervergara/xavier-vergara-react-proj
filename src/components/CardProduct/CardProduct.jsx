import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './CardProduct.css';
import { red } from '@mui/material/colors';

//en vez de pasar props como arg y despues llamar prop.x, se destructura y se llama solo la variable
const CardProduct = ( {producto} ) => {
  return (
    // <Card sx={{ maxWidth: 345 }}>
      <Card style={{width: '20rem', margin: '1em', height: '23em'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={producto.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.producto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.descripcion}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ color: 'green', fontWeight:'bold', fontSize:'1.3em', marginTop:'.5em' }}
          >
            {producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;
