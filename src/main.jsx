import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from ".././src/Redux/store.js"

// bootstrap
import "./custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
//import "bootstrap/scss/bootstrap.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
   </React.StrictMode>
);
