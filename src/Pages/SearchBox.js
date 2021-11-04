import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    height: "300px",
    width: "517px",
  },
}));

const SearchBox = (props) => {
  const styles = useStyles();
  return (
    <div class="container">
      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <img
          style={{ width: "700px", height: "500px", marginLeft: "50px" }}
          src="/Images/search_image.jpg"
          alt="search"
        />

        <Grid container direction="row" alignItems="center" wrap="nowrap">
          <Grid>
            <ChatBubbleOutlineIcon
              color="primary"
              placeholder="cool"
              fontSize="inherit"
              className={styles.largeIcon}
              name="COOL"
              value="cool"
              label="cool"
            />
          </Grid>
          <Grid
            color="green"
            wrap="nowrap"
            marginLeft="-355px"
            marginBottom="68px"
            fontSize = "19px"
          >
            Is it me you are looking for??
          </Grid>
        </Grid>
        <Box p={1}>
          <Box>
            <input
              type="search"
              placeholder="Type a movie name"
              style={{ marginTop: "100px" }}
            />
            <Input
              type="search"
              placeholder="Type a movie name"
              onChange={(event) => {
                props.setSearchValue(event.target.value);
              }}
            />{" "}
            <Button variant="contained" type="submit">
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SearchBox;
