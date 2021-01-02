import React from "react";
import { useStyles } from "./style";
import { Brand } from "./Brand";
import { IconWrapper } from "./IconWrapper";
import { Menu } from "./Menu";
import { Items } from "./Items";
import { Item } from "./Item";

export const Navbar = ({ toggle }) => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Brand />
      <IconWrapper onClick={toggle}>
        <Menu />
      </IconWrapper>
      <Items>
        <Item />
      </Items>
    </nav>
  );
};
