import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom";

import { mount } from "leftSideBar/leftSideBar";

import "./index.scss";

const App = () => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <div className="text-3xl mx-auto p-10">
      React app host
      <div className="left-sidebar-module">
        <app-root></app-root>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
