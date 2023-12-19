// MovieDetail.jsx
import React, { useState, useEffect } from 'react';

const MovieDetail = ({ imdbID }) => {
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`${'https://www.omdbapi.com/'}?apikey=${'8322b106'}&i=${imdbID}`);
        const data = await response.json();

        setMovieDetail(data);
      } catch (error) {
        console.error('Error fetching movie details: ', error);
      }
    };

    fetchMovieDetail();
  }, [imdbID]);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <h2>{movieDetail.Title}</h2>
      <p>Year: {movieDetail.Year}</p>
      <p>Genre: {movieDetail.Genre}</p>
   \

      <img src={movieDetail.Poster !== 'N/A' ? movieDetail.Poster : 'https://via.placeholder.com/400'} alt={movieDetail.Title} />

    </div>
  );
};

export default MovieDetail;
