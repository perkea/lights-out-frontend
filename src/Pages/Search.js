import React, { useState } from "react";


const SearchBox = (props) => {
	return (
<div class="container">
    <br/>
	<div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>
                                   
                                    <div class="col">
                                        <input 
                                        class="form-control form-control-lg form-control-borderless" 
                                        type="search" 
                                        placeholder="Search movie or serial"
                                        value = {props.value}
                                        onChange = {event}/>
                                    </div>
                                  
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                               
                                </div>
                            </form>
                        </div>
                      
                    </div>
</div>








		{/* <div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div> */}
	);
};

// const Search = (props) => {
//   return (
//     <div className="searchBox">
//       <input className="searchInput" type="text" name="" placeholder="Search" />
//       <button className="searchButton" href="#">
//         <input
//           type="text"
//           className="searchForm"
//           value={props.value}
//           onChange={(e) => props.setSearchValue(e.target.value)}
//           placeholder="Search for a movie"
//         />
//         <i className="material-icons">search</i>
//       </button>
//     </div>
//   );
// };

export default Search;
