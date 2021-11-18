import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper d--grid">
          <div className="header__search">
            <form action="" className="search__block">
              <input
                type="text"
                placeholder="Search... "
                className="input--search"
              />
              <button type="submit" className="btn btn--search">
                <AiOutlineFileSearch />
              </button>
            </form>
          </div>

          <div className="header__avatar">
            <img
              src="https://img.wattpad.com/useravatar/mongjihyo00.128.759987.jpg"
              alt=""
            />
            <div className="avatar__block">
              <h3>Loverboy</h3>
              <button>Logout</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
