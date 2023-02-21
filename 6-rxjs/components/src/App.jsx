import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header some={{}} />
    <div>Name: components</div>
    <div>Note: we are not exporting the whole app, only header component</div>
  </div>
);

export const consolelogger = () => console.log("clicked");

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
