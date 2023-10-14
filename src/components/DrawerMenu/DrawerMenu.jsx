import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconoCubo from '../IconoCubo/IconoCubo';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DrawerMenu = () => {
  // const [productos, setProductos] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('/public/productos.json')
  //       .then((response) => response.json())
  //       .then((data) => setProductos(data));
  //   }, 500);
  // }, []);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          style={{
            color: 'red',
            fontSize: '2em',
            margin: '1.5em',
            fontFamily: 'monospace',
            backgroundColor: 'rgba(255,244,151,1)',
          }}
        >
          Categorias
        </div>

        <Link to="/category/2x2">
          <div>2x2</div>
        </Link>

        <Link to="/category/3x3">
          <div>3x3</div>
        </Link>

        <Link to="/category/4x4">
          <div>4x4</div>
        </Link>

        <Link to="/category/5x5">
          <div>5x5</div>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgb(230, 96, 96)',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '5px',
              height: '2em',
              fontSize: '1.7em',
              fontFamily: 'monospace',
              fontWeight: '500',
              width: '8%',
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DrawerMenu;

// {['2x2', '3x3', '4x4', '5x5'].map((text, index) => (
//   <ListItem key={text} disablePadding>
//     <ListItemButton>
//       <ListItemIcon>
//         {index % 2 === 0 ? <IconoCubo /> : <IconoCubo />}
//       </ListItemIcon>
//       <ListItemText primary={text} />
//     </ListItemButton>
//   </ListItem>
// ))}
