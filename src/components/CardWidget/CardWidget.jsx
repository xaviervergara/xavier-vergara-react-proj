import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea  } from '@mui/material';
import './CardWidget.css'


//en vez de pasar props como arg y despues llamar prop.x, se destructura y se llama solo la variable
const CardWidget =({producto, descripcion, precio, img})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {producto}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
          {descripcion}
          </Typography>
          <Typography className='precio' variant="body2" color="text.secondary">
          {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}



export default CardWidget;