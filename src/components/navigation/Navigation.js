import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="navigation">
      <div className="navigation__grid">
        <div className="navigation__block">
          <h1>Logo</h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Lots</Link>
            </li>

            <li>
              <Link to="/">Client</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Navigation;
