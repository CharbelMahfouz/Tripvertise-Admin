import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "./i18n"
import { Provider } from "react-redux"

import store from "./store"
if (window.location.protocol.indexOf("https") == 0) {
  var el = document.createElement("meta")
  el.setAttribute("http-equiv", "Content-Security-Policy")
  el.setAttribute("content", "upgrade-insecure-requests")
  document.head.append(el)
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
