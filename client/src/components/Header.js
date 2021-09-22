import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { mergeClasses } from "@material-ui/styles";



const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <h1 centered>Carousel</h1>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
