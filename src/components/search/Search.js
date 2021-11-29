import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ filter, setFilter }) => {
  return (
    <>
      <div className="table__search">
        <form action="" className="search__block">
          <FiSearch />
          <input
            type="text"
            placeholder="Search... "
            className="input--search"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
