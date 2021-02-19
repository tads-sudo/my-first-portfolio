import React from "react";
import { useStyles } from "./style";
import { Brand } from "./Brand";
import { Items } from "./Items";
import { Item } from "./Item";
import { MenuToggle } from "../../components";
import { motion } from "framer-motion";

export const Navbar = ({ toggle, isOpen, handleCloseMenu }) => {
  const classes = useStyles();

  return (
    <motion.nav
      className={classes.nav}
      role="navigation"
      aria-label="main navigation"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Brand handleCloseMenu={handleCloseMenu} />
      <MenuToggle toggle={toggle} />
      <Items>
        <Item />
      </Items>
    </motion.nav>
  );
};
