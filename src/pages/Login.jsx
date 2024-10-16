import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userList } from '../api/users';

export function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [emailRepeated, setEmailRepeated] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');

  const [errorMessageLogin, setErrorMessageLogin] = useState('');
  const [errorMessageRegister, setErrorMessageRegister] = useState('');
  const [registerEnabled, setRegisterEnabled] = useState(false);

  const navigate = useNavigate();

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    const user = userList.find(
      (user) => user.email === loginEmail && user.password === loginPassword
    );

    if (user) {
      setErrorMessageLogin('');
      console.log('User authenticated:', user);
      navigate('/');
    } else {
      setErrorMessageLogin('Invalid email and/or password.');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const existingUser = userList.find((user) => user.email === registerEmail);

    if (existingUser) {
      setErrorMessageRegister('User with this email already exists.');
      return;
    }

    if (registerEmail !== emailRepeated) {
      setErrorMessageRegister("Emails don't match.");
      return;
    }

    if (registerPassword !== passwordRepeated) {
      setErrorMessageRegister("Passwords don't match.");
      return;
    }

    setErrorMessageRegister('');
    console.log('User registered:', registerEmail);
    navigate('/');
  };

  return (
    <div>
      <div className="auth-signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignInSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            name="email"
            placeholder="email"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            title="Please enter a valid email address."
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}"
            title="Password must be 8-20 characters long, contain at least one digit, one lowercase letter, and one uppercase letter."
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          {errorMessageLogin && (
            <p className="errorMessage">{errorMessageLogin}</p>
          )}

          <button type="submit" className="auth-btn">
            Sign in
          </button>
        </form>
      </div>

      {!registerEnabled && (
        <button onClick={() => setRegisterEnabled(true)} className="auth-btn">
          Register
        </button>
      )}

      {registerEnabled && (
        <div className="auth-register-container">
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="name"
              pattern="[a-zA-Z]{2,}"
              title="Name should have at least 2 characters."
              required
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              placeholder="surname"
              pattern="[a-zA-Z]{2,}"
              title="Name should have at least 2 characters."
              required
              onChange={(e) => setSurname(e.target.value)}
            />

            <label htmlFor="register-email">Email</label>
            <input
              type="email"
              id="register-email"
              name="email"
              value={registerEmail}
              placeholder="email"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Please enter a valid email address."
              required
              onChange={(e) => setRegisterEmail(e.target.value)}
            />

            <label htmlFor="email-repeat">Email Again</label>
            <input
              type="email"
              id="email-repeat"
              name="email-repeat"
              value={emailRepeated}
              placeholder="re-enter email"
              required
              onChange={(e) => setEmailRepeated(e.target.value)}
            />

            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={registerPassword}
              placeholder="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}"
              title="Password must be 8-20 characters long, contain at least one digit, one lowercase letter, and one uppercase letter."
              required
              onChange={(e) => setRegisterPassword(e.target.value)}
            />

            <label htmlFor="password-repeat">Password Again</label>
            <input
              type="password"
              id="password-repeat"
              name="password-repeat"
              value={passwordRepeated}
              placeholder="re-enter password"
              required
              onChange={(e) => setPasswordRepeated(e.target.value)}
            />

            {errorMessageRegister && (
              <p className="errorMessage">{errorMessageRegister}</p>
            )}

            <button type="submit" className="auth-btn">
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
