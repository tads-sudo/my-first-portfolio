import React, { useState } from "react";
import { Topbar, Navbar, ScrollToTop } from "./components";
import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((currentState) => {
      return !currentState;
    });
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <Router>
      <ScrollToTop />
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        handleCloseMenu={handleCloseMenu}
      />
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Routes />
    </Router>
  );
};
