import React from "react";

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
