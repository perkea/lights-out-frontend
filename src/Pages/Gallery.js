import React from "react";
// import Button from '@mui/material/Button';


const Gallery = (props) => {
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;

  //useEffect to run getMovie when component mounts

  const loaded = () => {
   return (
      <div>
        {props.movies.map((movie) => {
          console.log("the movies got from the api", props.movies);
          console.log("individual movie", movie);

          return <div className = "image_container d-flex justify-content-start m-3">
           <img src = "movie_image" src={imageUrl +'/' +movie.poster_path} alt = "movie"/>    
          </div>;
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading....</h1>;
  };
  return props.movies? loaded() : loading();
};

export default Gallery;