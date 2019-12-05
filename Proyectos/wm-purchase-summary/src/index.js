import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./state/store";

import "./styles/reset.css";
import "./styles/Index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
