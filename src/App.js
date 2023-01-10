import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form"
import {useState, useEffect} from 'react';
//import logo from "./logo.svg";
import './App.css';

function App() {
  //variable with api key
  const apiKey = "b0f622be";

  //state to hold movie data 
  //setMovie is the function
  const [movie, setMovie] = useState("");

  //function to get movie 
  const getMovie = async (searchTerm) => {
    try {
      //make fetch request and store the response
    const response = await fetch (
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    //Parse JSON response into a JS object
    const data = await response.json();

    // set the movie state to the movie 
    setMovie(data)
      
    } catch (e) {
      console.error(e)
    }
    
  }

  //this will run on the first render but not on the subsequent renders
  useEffect(() => {
    getMovie('clueless')
  }, [])
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
