// import React from 'react';

// const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
//   return (
//     <div className="movie" key={imdbID}>
//       <div>
//         <p>{Year}</p>
//       </div>

//       <div>
//         <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
//       </div>

//       <div>
//         <span>{Type}</span>
//         <h3>{Title}</h3>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

// MovieCard.jsx
import React, { useState } from 'react';
import MovieDetail from './MovieDetail';

const MovieCard = ({ movie }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleCardClick = () => {
    setShowDetail(!showDetail); 
  };

  return (
    <div className="movie" key={movie.imdbID} onClick={handleCardClick}>
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

      {showDetail && <MovieDetail imdbID={movie.imdbID} />} 
    </div>
  );
};

export default MovieCard;
