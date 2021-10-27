import React from "react";



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
            {/* <h1 className = "movie_title">{movie.title}</h1> */}
          
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


// return (
//   <div className= "movie_container d-flex justify-content-start m-3">

//     <h1 className = "movie_title">{movie.title}</h1>
//     <img className = "movie_image" src={movie.imageUrl +'/' +movie.poster_path} alt="" />
//     <div className='overlay d-flex align-items-center justify-content-center'>
//   Add to Favourites
// </div>
//   </div>
// );