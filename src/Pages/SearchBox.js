import Box from "@mui/material/Box"
import { Typography } from "@mui/material";
import { Input } from '@mui/material';
import Button  from "@mui/material/Button";
//  import ChatBubbleIcon from '@mui/material/icons/ChatBubbleIcon'
//  import { ChatBubbleIcon} from "@mui/icons-material"
 import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
 import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid"

 const useStyles = makeStyles((theme) => ({
largeIcon:{
    height:"300px",
    width:"500px"

}
    
  }))

const SearchBox = (props) => {
    const styles = useStyles();
	return (
<div class="container">
<Box display="flex"  justifyContent="flex-start" m={1} p={1}>
<img style={{width: "700px", height: "500px", marginLeft: "50px"}}src = "/Images/search_image.jpg" alt = "search"/>

<Grid container direction="row" alignItems="center" wrap = "nowrap">
  <Grid>
  <ChatBubbleOutlineIcon color = "primary" placeholder = "cool" fontSize="inherit"className={styles.largeIcon} name= "COOL" value = "cool" label = "cool"/>
  </Grid>
  <Grid color = "blue" wrap = "nowrap"  marginLeft = "-341px" marginBottom = "68px">
  Is it me you are looking for??
  </Grid>
</Grid>




<div>
Is it me you are looking for?
</div>


    	<Box p={1}>
     
        <Box>
       <input type = "search" placeholder = "Type a movie name" style = {{marginTop:"100px"}}/>
            <Input 
            type = "search" placeholder = "Type a movie name" onChange = {(event)=>{
props.setSearchValue(event.target.value)
                                        }}/> <Button variant="contained" type="submit">
                                        Search
                                      </Button>
        {/* <Typography variant="h3" gutterBottom className={classes.title}>{ movie.title}</Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.date}>{ movie.release_date}</Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.plot}>{ movie.overview }</Typography> */}
        </Box>
        </Box>
        <Typography variant="h3">COOL</Typography>

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
