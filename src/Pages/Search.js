import React, { useState } from "react";

const Search = () => {
const [state, setTitle] = useState(null);





  return (
  <div className="searchBox">

  <input className="searchInput"type="text" name="" placeholder="Search"/>
  <button className="searchButton" href="#">
      <i className="material-icons">
          search
      </i>
  </button>
</div>

  
);
  }

export default Search;
