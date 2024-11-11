import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 border-2 border-blue-600">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input type="email" className="border border-gray-300 rounded w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Password</label>
            <input type="password" className="border border-gray-300 rounded w-full p-2" />
          </div>
          <button className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
        {/* Link to Register Page */}
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
