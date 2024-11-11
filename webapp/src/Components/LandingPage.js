// src/components/LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">LinChecker</h1>
          </div>
          <button onClick={toggleNav} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className={`md:flex ${isNavOpen ? 'block' : 'hidden'} absolute md:static bg-blue-500 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li className="w-full md:w-auto">
                <a href="#features" className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 transition duration-300 rounded">Features</a>
              </li>
              <li className="w-full md:w-auto">
                <a href="#pricing" className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 transition duration-300 rounded">Pricing</a>
              </li>
              <li className="w-full md:w-auto">
                <Link to="/login" className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 transition duration-300 rounded">Login</Link>
              </li>
              <li className="w-full md:w-auto">
                <Link to="/userdata" className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 transition duration-300 rounded">User Data</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-gray-100 to-white min-h-[60vh] text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-blue-600" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Scrape Any Data
          </motion.h2>
          <motion.p 
            className="text-gray-700 mt-4 max-w-lg text-sm md:text-base" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Join us in exploring the world of possibilities. Sign up now to get started!
          </motion.p>
          <motion.div 
            className="mt-6 w-full max-w-md" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center border border-gray-300 rounded-md">
              <HiOutlineMail className="text-gray-500 ml-3" />
              <input
                type="email"
                placeholder="Enter your email"
                className="border-none p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4 w-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </motion.div>
        </section>

        <section id="features" className="py-16 bg-white text-center">
          <div className="container mx-auto">
            <motion.h3 
              className="text-3xl font-bold text-blue-600" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Features
            </motion.h3>
            <motion.p 
              className="text-gray-600 mt-4" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Discover the amazing features that make our service the best choice for you.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
              {['Feature One', 'Feature Two', 'Feature Three'].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-2 border-blue-600"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                  <h4 className="text-xl font-semibold text-blue-600">{feature}</h4>
                  <p className="text-gray-600 mt-4">Detailed description of {feature.toLowerCase()}.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-gray-50 text-center">
          <div className="container mx-auto">
            <motion.h3 
              className="text-3xl font-bold text-blue-600" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Pricing Plans
            </motion.h3>
            <motion.p 
              className="text-gray-600 mt-4" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Choose the plan that’s right for you.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              {[
                { plan: 'Basic', price: '$10/month', features: ['Feature One', 'Feature Two'] },
                { plan: 'Pro', price: '$20/month', features: ['Feature One', 'Feature Two', 'Feature Three'] },
                { plan: 'Enterprise', price: '$30/month', features: ['All Features', 'Priority Support'] },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-2 border-blue-600"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-blue-600">{item.plan}</h4>
                  <p className="text-2xl font-bold text-gray-800 mt-2">{item.price}</p>
                  <ul className="mt-4 text-left">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center mt-2">
                        <FaCheckCircle className="text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-300">
                    Select Plan
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>© 2024 LinChecker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
