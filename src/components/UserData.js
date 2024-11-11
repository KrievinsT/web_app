import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserData = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulating network request delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Sample user data
        const data = [
          { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
        ];
        setUserData(data);
      } catch (error) {
        setError('Failed to fetch user data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <h1 className="text-xl md:text-3xl font-bold">User Data</h1>
          <button onClick={toggleNav} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
          <nav className={`md:flex ${isNavOpen ? 'block' : 'hidden'} absolute md:static bg-blue-500 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li className="w-full md:w-auto">
                <Link to="/" className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 transition duration-300 rounded">Home</Link>
              </li>
              <li className="w-full md:w-auto">
                <Link to="/userdata" className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 transition duration-300 rounded">User Data</Link>
              </li>
              <li className="w-full md:w-auto">
                <Link to="/login" className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 transition duration-300 rounded">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Profile</h2>
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="w-24 h-24 rounded-full shadow-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">john@example.com</p>
              <p className="text-gray-600">Role: Admin</p>
            </div>
          </div>
        </section>
        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Data</h2>
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">ID</th>
                    <th className="py-2 px-4 border-b border-gray-200">Name</th>
                    <th className="py-2 px-4 border-b border-gray-200">Email</th>
                    <th className="py-2 px-4 border-b border-gray-200">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{user.id}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center">{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
      <footer className="bg-blue-500 text-white py-4 text-center">
        <p>© 2024 LinChecker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserData;
