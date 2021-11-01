import React from "react";


const SearchBox = (props) => {
	return (
<div class="container">
    <br/>
	<div class="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                   
                                    <div className="col">
                                        <input 
                                        className="form-control form-control-lg form-control-borderless" 
                                        type="search" 
                                        placeholder="Type a movie or serial"
                                        value = {props.value}
                                        onChange = {(event)=>{
props.setSearchValue(event.target.value)
                                        }}/>
                                    </div>
                                  
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="submit">Search for a movie or serial</button>
                                    </div>
                               
                                </div>
                            </form>
                        </div>
                      
                    </div>
</div>




  )}



	

export default SearchBox;
