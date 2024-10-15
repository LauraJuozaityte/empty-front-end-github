import React from 'react';

export function Home() {
  return (
    <div className="main-container">
      <h2>Available Movies</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Price for 12h</th>
          <th>Is in stock</th>
          <th> </th>
        </tr>

        <tr>
          <td>Batman</td>
          <td>Action</td>
          <td>$4.55</td>
          <td>
            <img src="/images/Check.png" alt="Check Icon"></img>
          </td>
          <td>
            <button className="dark-table-btn">Rent</button>
          </td>
        </tr>

        <tr>
          <td>Batman</td>
          <td>Action</td>
          <td>$4.55</td>
          <td>
            <img src="/images/Check.png" alt="Check Icon"></img>
          </td>
          <td>
            <button className="dark-table-btn">Rent</button>
          </td>
        </tr>

        <tr>
          <td>Batman</td>
          <td>Action</td>
          <td>$4.55</td>
          <td>
            <img src="/images/Check.png" alt="Check Icon"></img>
          </td>
          <td>
            <button className="dark-table-btn">Rent</button>
          </td>
        </tr>

        <tr>
          <td>Batman</td>
          <td>Action</td>
          <td>$4.55</td>
          <td>
            <img src="images/Cross.png" alt="Cross Icon"></img>
          </td>
          <td>
            <button className="dark-table-btn">Rent</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
