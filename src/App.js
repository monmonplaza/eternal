import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Clients from "./components/clients/Clients";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/dashboard/clients" element={<Clients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
