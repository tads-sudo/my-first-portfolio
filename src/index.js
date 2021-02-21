import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader-hide");
const hideLoader = () => loader.classList.add("loader-hide");

setTimeout(
  () =>
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <HelmetProvider>
            <App hideLoader={hideLoader} showLoader={showLoader} />
          </HelmetProvider>
        </Router>
      </React.StrictMode>,
      document.getElementById("root")
    ),
  1000
);

reportWebVitals();
