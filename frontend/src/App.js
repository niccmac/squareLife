import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
