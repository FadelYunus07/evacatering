import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

import { HashRouter } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
