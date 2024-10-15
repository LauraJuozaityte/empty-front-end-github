import React from 'react';

export function Profile() {
  return (
    <div>
      <div className="main-container">
        <h2>Profile</h2>

        <div className="profile-container">
          <img src="/images/Default-profile.png" alt="Profile Icon"></img>
          <div>
            <p>
              <strong>Name: </strong>John
            </p>
            <p>
              <strong>Surname: </strong>Newman
            </p>
            <p>
              <strong>Email: </strong>john.newman@mail.com
            </p>
          </div>
        </div>

        <div className="profile-buttons-container">
          <button className="profile-btn">Reset password</button>
          <button className="profile-btn">Reset email</button>
        </div>
      </div>
    </div>
  );
}
