import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>css</li>
        <li>html</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>News Feed</a>
      <a>Messages</a>
    </div>
  );
};

export default App;
