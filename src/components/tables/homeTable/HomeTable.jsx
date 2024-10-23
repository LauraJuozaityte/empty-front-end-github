import React from 'react';

export function HomeTable({ movieList, onRentMovie }) {
  const handleRentMovie = (movie) => {
    console.log('Renting movie:', movie.name);
    onRentMovie(movie);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Price for 12h</th>
          <th>Is in stock</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <tr key={movie.movieId}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.price}</td>
              <td>
                {movie.countInStock > 0 ? (
                  <img src="/images/Check.png" alt="Check Icon" />
                ) : (
                  <img src="/images/Cross.png" alt="Cross Icon" />
                )}
              </td>
              <td>
                <button
                  onClick={() => handleRentMovie(movie)}
                  className="dark-table-btn"
                  disabled={movie.countInStock < 1}
                >
                  Rent
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No movies selected</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
