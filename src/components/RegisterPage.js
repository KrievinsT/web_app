import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 border-2 border-blue-600">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left"
          id="register-title"
        >
          Register
        </h2>
        <form>
          {/* Email Input */}
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
            />
            <small
              id="email-help"
              className="text-gray-500 text-xs"
              aria-live="polite"
            >
              We'll never share your email with anyone else.
            </small>
          </div>

          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-semibold"
              aria-label="Username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              required
              className="border border-gray-300 rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="username-help"
              placeholder="Choose a username"
            />
            <small
              id="username-help"
              className="text-gray-500 text-xs"
              aria-live="polite"
            >
              Your username will be visible to others.
            </small>
          </div>

          {/* Password Input */}
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
              placeholder="Create a password"
            />
            <small
              id="password-help"
              className="text-gray-500 text-xs"
              aria-live="polite"
            >
              Make sure your password is secure.
            </small>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-3 w-full hover:bg-blue-700 transition duration-300"
            aria-label="Register"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
