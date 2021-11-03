import Box from "@mui/material/Box"
import { Typography } from "@mui/material";
import { Input } from '@mui/material';
import Button  from "@mui/material/Button";




const SearchBox = (props) => {
	return (
<div class="container">
<Box display="flex"  justifyContent="flex-start" m={1} p={1}>
<img style={{width: "600px", height: "500px"}}src = "/Images/search_image.jpg" alt = "search"/>

    	<Box p={1}>
     
        <Box>
        <i className="fas fa-search h4 text-body">Cool</i>
            <Input type = "search" placeholder = "Type a movie name" value = {props.value} onChange = {(event)=>{
props.setSearchValue(event.target.value)
                                        }}/> <Button variant="contained" type="submit">
                                        Search
                                      </Button>
        {/* <Typography variant="h3" gutterBottom className={classes.title}>{ movie.title}</Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.date}>{ movie.release_date}</Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.plot}>{ movie.overview }</Typography> */}
        </Box>
        </Box>


        </Box>
        </div>
    )}

{/* 






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
                      
// //                     </div>
// // </div> */}




//   )}



	

export default SearchBox;
