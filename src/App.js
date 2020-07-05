import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <div><Header /></div>
      <div className="App">
        <ul>
          <li>css</li>
          <li>html</li>
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News Feed</a>
      <a href="#">Messages</a>
    </div>
  );
};

export default App;
