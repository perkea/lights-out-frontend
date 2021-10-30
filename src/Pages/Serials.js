import React from "react";



const Serials = (props) => {
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;

  //useEffect to run getMovie when component mounts

  const loaded = () => {

    return (
      <div>
        {props.serials.map((serial) => {
          console.log("the serials got from the api", props.serials);
           console.log("individual serial", serial);

          return <div className = "image_container d-flex justify-content-start m-3">
            {/* <h1 className = "movie_title">{movie.title}</h1> */}
          
            <img src = "serial_image" src={imageUrl +'/' +serial.poster_path} alt = "serial"/>
           
          </div>;
        
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading....</h1>;
  };
  return props.serials? loaded() : loading();
};

export default Serials;


