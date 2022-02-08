import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="searchar">
      <input
        className="searchbar"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="search by name"
      />
    </div>
  );
};

export default SearchBar;
