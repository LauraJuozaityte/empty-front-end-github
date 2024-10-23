import React, { useState } from 'react';

export function Movies({ currentTotalMovieList, onRemoveMovie }) {
  const movieListUserBasket = currentTotalMovieList.filter(
    (movie) => movie.countInUserBasket > 0
  );

  const [rentLengths, setRentLengths] = useState(
    movieListUserBasket.reduce((acc, movie) => {
      acc[movie.movieId] = 12; // for each movie
      return acc;
    }, {})
  );

  const increaseValue = (movieId) => {
    let maxValue = 24 * 7 - 12;
    setRentLengths((prevLengths) => ({
      ...prevLengths,
      [movieId]:
        prevLengths[movieId] < maxValue ? prevLengths[movieId] + 12 : maxValue,
    }));
  };

  const decreaseValue = (movieId) => {
    let minValue = 12;
    setRentLengths((prevLengths) => ({
      ...prevLengths,
      [movieId]:
        prevLengths[movieId] > minValue ? prevLengths[movieId] - 12 : minValue,
    }));
  };

  return (
    <div className="main-container">
      <h2>Your Movies</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Time</th>
            <th>Price for 12h</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Batman</td>
            <td>Action</td>
            <td>
              <div className="input-container">
                <button className="arrow-btn" onClick={decreaseValue}>
                  &#8249;
                </button>
                <input
                  type="number"
                  id="hour-input"
                  placeholder="12h"
                  value="12"
                  readOnly
                />
                <button className="arrow-btn" onClick={increaseValue}>
                  &#8250;
                </button>
              </div>
            </td>
            <td>$4.55</td>
            <td>
              <button className="red-btn">Remove</button>
            </td>
          </tr>
          <tr>
            <td>Batman</td>
            <td>Action</td>
            <td>
              <div className="input-container">
                <button className="arrow-btn" onClick={decreaseValue}>
                  &#8249;
                </button>
                <input
                  type="number"
                  id="hour-input"
                  placeholder="12h"
                  value="12"
                  readOnly
                />
                <button className="arrow-btn" onClick={increaseValue}>
                  &#8250;
                </button>
              </div>
            </td>
            <td>$4.55</td>
            <td>
              <button className="red-btn">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Time</th>
            <th>Price for 12h</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {movieListUserBasket.length > 0 ? (
            movieListUserBasket.map((movie) => (
              <tr key={movie.movieId}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>
                  <div className="input-container">
                    <button
                      className="arrow-btn"
                      onClick={() => decreaseValue(movie.movieId)}
                    >
                      &#8249;
                    </button>
                    <input
                      type="number"
                      id="hour-input"
                      value={rentLengths[movie.movieId]}
                      readOnly
                    />
                    <button
                      className="arrow-btn"
                      onClick={() => increaseValue(movie.movieId)}
                    >
                      &#8250;
                    </button>
                  </div>
                </td>
                <td>${movie.price}</td>
                <td>
                  <button
                    className="red-btn"
                    onClick={() => onRemoveMovie(movie.movieId)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">You dont have any movies yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
