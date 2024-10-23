import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Profile } from './pages/Profile';
import { LayoutMain } from './components/layout/LayoutMain';
import { LayoutAuth } from './components/layout/LayoutAuth';
import { movieListTotal } from './api/movies';

export function App() {
  const [currentTotalMovieList, setCurrentTotalMovieList] =
    useState(movieListTotal);

  const handleRemoveMovie = (movieId) => {
    const updatedTotalMovieList = currentTotalMovieList.map((movie) =>
      movie.movieId === movieId
        ? {
            ...movie,
            countInUserBasket: movie.countInUserBasket - 1,
            countInStock: movie.countInStock + 1,
          }
        : movie
    );
    setCurrentTotalMovieList(updatedTotalMovieList);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutMain>
            <Home
              currentTotalMovieList={currentTotalMovieList}
              setCurrentTotalMovieList={setCurrentTotalMovieList}
            />
          </LayoutMain>
        }
      />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route
        path="/login"
        element={
          <LayoutAuth>
            <Login />
          </LayoutAuth>
        }
      />
      <Route
        path="/movies"
        element={
          <LayoutMain>
            <Movies
              currentTotalMovieList={currentTotalMovieList}
              onRemoveMovie={handleRemoveMovie}
            />
          </LayoutMain>
        }
      />
      <Route
        path="/profile"
        element={
          <LayoutMain>
            <Profile />
          </LayoutMain>
        }
      />
    </Routes>
  );
}
