import React from "react";
import { useStyles } from "./style";
import { Brand } from "./Brand";
import { Menu } from "./Menu";
import { Items } from "./Items";
import { Item } from "./Item";

export const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <nav className={classes.nav}>
        <Brand />
        <Menu />
        <Items>
          <Item />
        </Items>
      </nav>
    </>
  );
};
