import React, { useState } from "react";


const Gallery = (props) => {
  //const apiKey = "553ff4c7632836ac15fb42f83753edfd";
  //const url = `https://api.themoviedb.org/3/movie/popular?api_key=5${apiKey}&language=en-US&page=20`;
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=553ff4c7632836ac15fb42f83753edfd&language=en-US&page=100";
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;
  console.log("the url", url);
  console.log("length", url.length);
  const [movies, setMovies] = useState(null);
  const [requestedMovies, setRequestedMovies] = useState(false);

  //function to fetch movie data
  const getMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("movie data got back", data);
    setMovies(data.results);
  };
  if (requestedMovies === false) {
    setRequestedMovies(true);
    getMovies();
  }

  //useEffect to run getMovie when component mounts

  const loaded = () => {

    return (
      <div>
        {movies.map((movie) => {
          const { title, poster_path, index } = movie;
          <div className = "image_container d-flex justify-content-start m-3">
            <img src = "movie_image" src={imageUrl +'/' +movie.poster_path} alt = "movie"/>
       
          </div>
        
         
       
          
          return (
            <div className= "movie_container d-flex justify-content-start m-3">
              key = {index}
              <h1 className = "movie_title">{movie.title}</h1>
              {/* <p className = "movie_overview">{movie.overview}</p> */}
              <img className = "movie_image" src={imageUrl +'/' +movie.poster_path} alt="" />
              <div className='overlay d-flex align-items-center justify-content-center'>
						Add to Favourites
					</div>
            </div>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading....</h1>;
  };
  return movies? loaded() : loading();
};

export default Gallery;
