import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename="/react-fastfood">
    <App />
  </Router>
);
