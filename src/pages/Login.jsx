import React from 'react';

export function Login() {
  return (
    <div>
      <div className="auth-container">
        <h2>Sign In</h2>
        <form action="/login" method="POST">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />

          {/*<button type="submit" className="dark-btn">Sign in</button>*/}
          <a href="home" className="btn-style">
            Sign in
          </a>
        </form>
      </div>

      <div className="auth-container">
        <h2>Register</h2>
        <form action="/register" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            required
          />

          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="surname"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />

          <label htmlFor="email-repeat">Email Again</label>
          <input
            type="email"
            id="email-repeat"
            name="email-repeat"
            placeholder="re-enter email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />

          <label htmlFor="password-repeat">Password Again</label>
          <input
            type="password"
            id="password-repeat"
            name="password-repeat"
            placeholder="re-enter password"
            required
          />

          {/*<button type="submit" className="dark-btn">Register</button>*/}
          <a href="home" className="btn-style">
            Register
          </a>
        </form>
      </div>
    </div>
  );
}
