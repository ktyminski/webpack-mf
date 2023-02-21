import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom";

import Header from "components/Header";

import "./index.scss";

const App = () => {
  const [count, setCount] = useState(0);
  const [isHeaderShown, showHeader] = useState(false);

  return (
    <div className="text-3xl mx-auto p-10">
      <br />
      <Header />
      <div className="bg-red-400 p-10">Hello from host</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
