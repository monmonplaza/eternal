import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__avatar">
            <div className="avatar__block">
              <h3>MonMon</h3>
              <small>Admin</small>
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
