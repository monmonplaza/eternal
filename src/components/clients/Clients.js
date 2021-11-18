import React from "react";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";

const Clients = () => {
  return (
    <>
      <main className="main">
        <div className="main__wrapper d--grid">
          <Navigation />
          <div className="main__body">
            <Header />
          </div>
        </div>
      </main>
    </>
  );
};

export default Clients;
