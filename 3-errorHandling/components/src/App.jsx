import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: components</div>
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
