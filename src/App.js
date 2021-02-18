import React, { useEffect, useState } from "react";
import { Topbar, Navbar, ScrollToTop } from "./components";
import { Routes } from "./routes";

export const App = ({ hideLoader }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(hideLoader, []);

  const toggle = () => {
    setIsOpen((currentState) => {
      return !currentState;
    });
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        handleCloseMenu={handleCloseMenu}
      />
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Routes />
    </>
  );
};
