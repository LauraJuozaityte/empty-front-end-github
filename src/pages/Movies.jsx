import React, { useState } from 'react';

export function Movies() {
  const [rentLength, setRentLenght] = useState(12);

  function increaseValue() {
    let maxValue = 24 * 7 - 12;
    if (rentLength <= maxValue) {
      setRentLenght(rentLength + 12);
    } else {
      console.log('max value reached');
    }
  }

  function decreaseValue() {
    let minValue = 12 + 12;
    if (rentLength >= minValue) {
      setRentLenght(rentLength - 12);
    } else {
      console.log('min value reached');
    }
  }

  return (
    <div className="main-container">
      <h2>Available Movies</h2>
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
                  value={rentLength}
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
                  value={rentLength}
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
    </div>
  );
}
