import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
const Gallery = (props) => {
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;

  //useEffect to run getMovie when component mounts

  const loaded = () => {
    return (
      <div >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            p: 1,
            m: 1,
            bgcolor: "palatte.background.paper",
            maxWidth: 2800,
          }}
        >
          {props.movies.map((movie) => {
            console.log("the movies got from the api", props.movies);
            console.log("individual movie", movie);

            return (
              <Item>
                <a href={"/movies/" + movie.id}>
                  {" "}
                  <img
                    src={imageUrl + "/" + movie.poster_path}
                    alt="movie"
                  />{" "}
                </a>
              </Item>
            );
          })}
        </Box>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading....</h1>;
  };
  return props.movies ? loaded() : loading();
};

export default Gallery;


