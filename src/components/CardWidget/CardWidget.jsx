import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea  } from '@mui/material';
import './CardWidget.css'

const CardWidget =(props)=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.producto}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
          {props.description}
          </Typography>
          <Typography className='precio' variant="body2" color="text.secondary">
          {props.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}



export default CardWidget;