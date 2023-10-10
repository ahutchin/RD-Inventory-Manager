import React from "react";
import "./App.css";

const App = () => {
  return (
    <div class="container">
      <img src="./assets/cart pic.jpg" id="gucciPic" />
      <input type="text" id="input-field" placeholder="bruh" />
      <button id="add-button">add to db</button>
      <ul id="item-list"></ul>
    </div>
  );
};

export default App;
