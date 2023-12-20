
import React, { useState } from 'react';
import MovieDetail from './MovieDetail';

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>

      <div className="movie" key={movie.imdbID} onClick={handleOpen}>
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
        {/* {showDetail && <MovieDetail imdbID={movie.imdbID} />}  */}
      </div>
      <MovieDetail open={open} handleClose={handleClose} imdbID={movie.imdbID} />
    </>

  );
};

export default MovieCard;
