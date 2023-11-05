import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import CategoryIcon from "@mui/icons-material/Category";
import IconoCubo from "../IconoCubo/IconoCubo";
import { Link } from "react-router-dom";

import "./DrawerMenu.css";

const DrawerMenu = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "rgb(255, 255, 255)",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          style={{
            height: "2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            color: "white",
            fontSize: "2em",
            margin: "1.5em",
            fontFamily: "monospace",
            backgroundColor: "rgb(97, 172, 241)",
          }}
        >
          Categorias
        </div>

        <Link to="/category/2x2">
          <div className="itemContainer">
            <IconoCubo /> 2x2
          </div>
        </Link>

        <Link to="/category/3x3">
          <div className="itemContainer">
            <IconoCubo /> 3x3
          </div>
        </Link>

        <Link to="/category/4x4">
          <div className="itemContainer">
            <IconoCubo /> 4x4
          </div>
        </Link>

        <Link to="/category/5x5">
          <div className="itemContainer">
            <IconoCubo /> 5x5
          </div>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(230, 96, 96)",
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "5px",
              height: "2em",
              fontSize: "1.7em",
              fontFamily: "monospace",
              fontWeight: "500",
              // width: "8%",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <CategoryIcon />
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
