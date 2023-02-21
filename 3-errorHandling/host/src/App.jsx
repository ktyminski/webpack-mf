import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom";

const Header = lazy(() => import("components/Header"));

import Safe from "./Safe";

import "./index.scss";

const App = () => {
  const [count, setCount] = useState(0);
  const [isHeaderShown, showHeader] = useState(false);

  return (
    <div className="text-3xl mx-auto p-10 bg-red-400">
      {isHeaderShown && (
        <Suspense fallback={<div>Loading</div>}>
          <Safe>
            <Header count={count} onClear={() => setCount(0)} />
          </Safe>
        </Suspense>
      )}
      <br />
      <button onClick={() => showHeader(true)}>Show header</button>
      <div className=" p-10">Hello from host</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
