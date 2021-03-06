import React from "react"
import ReactDOM from "react-dom"
import "popper.js/dist/umd/popper"
import App from "./App"
import "./index.css"
import "font-awesome/css/font-awesome.css"
import { HashRouter } from 'react-router-dom';

// var element = <button class="btn btn-danger">Hello World</button>

// ReactDOM.render(<App />, document.getElementById("root"))
ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
