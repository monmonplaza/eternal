import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper d--grid">
          <div className="header__avatar">
            <div className="avatar__block">
              <h3>Loverboy</h3>
            </div>
            <img
              src="https://img.wattpad.com/useravatar/mongjihyo00.128.759987.jpg"
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
