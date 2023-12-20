import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";
import "./App.css";

const API_KEY = '8322b106';
const API_URL = 'https://www.omdbapi.com/';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    searchMovies('Batman'||searchTerm);
    console.log(searchTerm)
  }, []);

  const searchMovies = async (title) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error('Error fetching movie data: ', error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="app">
      <h1>Stream Movie</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {loading ? (
        <>Loading</>
      ) : (
        movies?.length > 0 ? (
          <div className="container">
        {console.log(movies)}
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      )}
    </div>
  );
};

export default App;
