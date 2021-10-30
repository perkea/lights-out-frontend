import React, { useState } from "react";


const Search = (props) => {
  return (
    <div className="searchBox">
      <input className="searchInput" type="text" name="" placeholder="Search" />
      <button className="searchButton" href="#">
        <input
          type="text"
          className="searchForm"
          value={props.value}
          onChange={(e) => props.setSearchValue(e.target.value)}
          placeholder="Search for a movie"
        />
        <i className="material-icons">search</i>
      </button>
    </div>
  );
};

export default Search;
