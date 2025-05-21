import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
