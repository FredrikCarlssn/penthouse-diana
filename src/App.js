import "./App.css";
import React from "react";
import ThisMenu from "./components/ThisMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="outer-container">
      <ThisMenu />
      <main id="page-wrap">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
