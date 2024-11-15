import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div
        className="bg-white p-8 rounded shadow-md w-full sm:w-96 border-2 border-blue-600"
        role="form"
        aria-labelledby="login-title"
      >
        <h2
          id="login-title"
          className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left"
        >
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold"
              aria-label="Email address"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border border-gray-300 rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="email-help"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small
              id="email-help"
              className="text-gray-500 text-xs"
              aria-live="polite"
            >
              We'll never share your email with anyone else.
            </small>
            {emailError && (
              <p className="text-red-600 text-xs mt-1" aria-live="assertive">
                {emailError}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold"
              aria-label="Password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              className="border border-gray-300 rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="password-help"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small
              id="password-help"
              className="text-gray-500 text-xs"
              aria-live="polite"
            >
              Make sure your password is secure.
            </small>
            {passwordError && (
              <p className="text-red-600 text-xs mt-1" aria-live="assertive">
                {passwordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-3 w-full hover:bg-blue-700 transition duration-300"
            aria-label="Login"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
            aria-label="Go to registration page"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
