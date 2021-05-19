import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Chicago" />
      <footer>
        <a
          href="https://github.com/emeraz15/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Erika Meraz
        <div className="icon-attributions">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware"
            target="_blank"
            rel="noreferrer"
          >
            Good Ware
          </a>
          and
          <a
            href="https://www.flaticon.com/authors/mynamepong"
            title="mynamepong"
            target="_blank"
            rel="noreferrer"
          >
            mynamepong
          </a>
          from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="noreferrer"
          >
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
