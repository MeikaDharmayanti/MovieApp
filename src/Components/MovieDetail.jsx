import * as React from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#343739',
  // border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  color: '#fff',
  borderRadius: '10px'
};

export default function MovieDetail({imdbID,open,handleClose}) {
  const [movieDetail, setMovieDetail] = React.useState(null);

  React.useEffect(() => {
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CloseOutlined sx={{position: 'absolute',top: '-2px',right: '-2px',color: "red",fontSize: '40px'}} onClick={handleClose} />
          {/* <div className="movie-detail"> */}
            <h2 style={{textAlign: 'center',marginBottom: "20px",color: '#f9d3b4'}}>{movieDetail.Title}</h2>
            <img src={movieDetail.Poster !== 'N/A' ? movieDetail.Poster : 'https://via.placeholder.com/400'} alt={movieDetail.Title} style={{margin: 'auto'}} />
            <p>Year : {movieDetail.Year}</p>
            <p>Genre : {movieDetail.Genre}</p>
            <p>Rate : {movieDetail.Rated} </p>
            <p>Released: {movieDetail.Released} </p>
            <p>Actor : {movieDetail.Actors} </p>
            <p>Plot : {movieDetail.Plot} </p>
          {/* </div> */}
        </Box>
      </Modal>
    </div>
  );
}

