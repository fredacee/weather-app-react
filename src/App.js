import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/fredacee/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          by Winifred Ayaga:Hosted with
          <a href="https://www.netlify.com">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
