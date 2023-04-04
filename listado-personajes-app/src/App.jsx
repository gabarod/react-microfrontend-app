import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import HarryPotter from "HarryPotter/HarryPotter";
import RickAndMorty from "RickAndMorty/RickAndMorty";

const App = () => {
  return (
    <div>
      <HarryPotter />
      <RickAndMorty />
    </div>
  );
};
console.log(App);
ReactDOM.render(<App />, document.getElementById("app"));
