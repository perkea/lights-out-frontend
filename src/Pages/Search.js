import React, { useState } from "react";
import { render } from "react-dom";


 const Search = () => {
// const [state, setTitle] = useState("");


// function handleSubmit(){
// const title = this.state;
// this.setTitle({title:""});
// }

// function handleInputTitle(event){
// event.preventDefault();
// const title = event.target.value;
// this.setTitle({title});

// }
// render(
// const {title} = this.state;

// )

  return (
 
    <div className="searchBox">
  
    <input className="searchInput"type="text" name="" placeholder="Search"/>
    <button className="searchButton" href="#">
    {/* <input className="searchInput"type="text" name="" placeholder="Search"onChange= {handleInputTitle} value = {title}/>
    <button className="searchButton" href="#" value = "Search" onClick = {handleSubmit}> */}
        <i className="material-icons">
            search
        </i>
    </button>
  </div>
  
    
  );
  }

export default Search;
