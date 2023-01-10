import React from 'react'; 

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  MovieDisplay ({movie}) {
    //The component must return some JSX
    console.log(movie)
    return (
    <div>
        <h1>{movie.Title}</h1>
        <h1>{movie.Genre}</h1>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
    </div>
    )
  };
  
  // We must export the component to use it in other files