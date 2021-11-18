import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";

const Navigation = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper grid">
          <div className="header__logo">
            <h1>Logo</h1>
          </div>

          <div className="header__search">
            <form action="">
              <input type="text" placeholder="Search... " />
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
            <div className="dropdown dropdown--avatar">
              <div className="dropdown__btn">
                <h3>Loverboy</h3> <GoTriangleDown />
              </div>
              <ul>
                <li>
                  <button>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
