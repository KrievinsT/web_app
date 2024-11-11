import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 border-2 border-blue-600">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input type="email" className="border border-gray-300 rounded w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Username</label>
            <input type="text" className="border border-gray-300 rounded w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Password</label>
            <input type="password" className="border border-gray-300 rounded w-full p-2" />
          </div>
          <button className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
