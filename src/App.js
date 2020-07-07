import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>Messages</div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
        </div>
        <div>
            ava + decsription
        </div>
      </div>
      <div>
        My posts
        <div>
        New posts
        </div>
      </div>
      <div>
        <div>
            post 1
        </div>
        <div>
            post 2
        </div>
      </div>
    </div>
  );
};
export default App;
