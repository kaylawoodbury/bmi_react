import React from "react";
import ReactDOM from "react-dom";
import Metric from "./Metric";
import Imperial from "./Imperial";
import { Switch, Route, BrowserRouter } from "react-router-dom";





const App = () => {
  return (
    <div class="ui main container">
      <h1>BMI Calculator</h1>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
