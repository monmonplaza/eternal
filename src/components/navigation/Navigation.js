import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import { FaCross } from "react-icons/fa";

import { RiUserSettingsLine, RiRoadMapLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
const Navigation = () => {
  return (
    <aside className="navigation">
      <div className="navigation__grid">
        <div className="navigation__block">
          <FaCross />
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/clients">
                <MdOutlineSpaceDashboard /> Dashboard
              </Link>
            </li>

            <li>
              <Link to="/clients">
                <RiRoadMapLine /> Lots
              </Link>
            </li>

            <li>
              <Link to="/clients">
                <MdOutlineSupervisedUserCircle /> Client
              </Link>
            </li>
            <li>
              <Link to="/clients">
                <RiUserSettingsLine /> Users
              </Link>
            </li>
            <li>
              <Link to="/clients">
                <AiOutlineSetting /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Navigation;
