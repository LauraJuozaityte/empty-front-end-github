import React from 'react';
import { HomeTable } from '../components/tables/homeTable/HomeTable';

export function Home({ currentTotalMovieList, setCurrentTotalMovieList }) {
  const handleRentMovie = (selectedMovie) => {
    const updatedTotalMovieList = currentTotalMovieList.map((movie) =>
      movie.movieId === selectedMovie.movieId && movie.countInStock > 0
        ? {
            ...movie,
            countInStock: movie.countInStock - 1,
            countInUserBasket: movie.countInUserBasket + 1,
          }
        : movie
    );
    setCurrentTotalMovieList(updatedTotalMovieList);
    console.log('updatedTotalMovieList 2: ', { updatedTotalMovieList }); // console.log
  };

  return (
    <div className="main-container">
      <h2>Available Movies</h2>
      <HomeTable
        movieList={currentTotalMovieList}
        onRentMovie={handleRentMovie}
      />
    </div>
  );
}
