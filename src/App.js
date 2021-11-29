import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Clients from "./components/clients/Clients";
import { StoreProvider } from "./store/StoreContext";

function App() {
  return (
    <div>
      <StoreProvider>
        <Router basename="/dev/eternal">
          <Routes>
            <Route exact path="/clients" element={<Clients />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
