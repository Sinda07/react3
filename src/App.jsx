import React from "react";
import ProfilePhoto from "./components/ProfilePhoto";
import FullName from "./components/FullName";
import Address from "./components/Address";
import "./App.css";
import "../src/components/style.css";

function App() {
  return (
    <header>
      <div className="final">
        <h1>My React Profile App</h1>
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </header>
  );
}

export default App;
