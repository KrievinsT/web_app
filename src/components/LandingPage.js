import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [url, setUrl] = useState('');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleScrapeClick = () => {
    if (url) {
      console.log(`Scraping data from: ${url}`);
    } else {
      alert("Please enter a valid URL to scrape.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-blue-600 text-white py-4 shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">LinChecker</h1>
          <button onClick={toggleNav} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className={`md:flex ${isNavOpen ? 'block' : 'hidden'} absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto`}>
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 p-6 md:p-0 text-center md:text-left">
              <li><a href="#features" className="block text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Features</a></li>
              <li><a href="#pricing" className="block text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Pricing</a></li>
              <li><Link to="/login" className="block text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Login</Link></li>
              <li><Link to="/userdata" className="block text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">User Data</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow pt-24">
        <section className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-b from-gray-100 to-white min-h-[60vh] text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-blue-600 leading-tight" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Scrape Any Data
          </motion.h2>
          <motion.p 
            className="text-gray-700 mt-6 max-w-md text-base md:text-lg leading-relaxed" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Enter a URL to start scraping data from any website. It's fast, easy, and reliable.
          </motion.p>
          <motion.div 
            className="mt-8 w-full max-w-md" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center border border-gray-300 rounded-md shadow-lg">
              <HiOutlineLink className="text-gray-500 ml-4" />
              <input
                type="url"
                value={url}
                onChange={handleInputChange}
                placeholder="Enter URL to scrape"
                className="border-none p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleScrapeClick}
              className="bg-blue-600 text-white px-6 py-3 rounded-md mt-6 w-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Scrape Data
            </button>
          </motion.div>
        </section>

        <section id="features" className="py-20 px-6 bg-white text-center">
          <div className="container mx-auto">
            <motion.h3 
              className="text-4xl font-semibold text-blue-600 mb-8" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Features
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-lg mb-12 max-w-xl mx-auto" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Discover the amazing features that make our service the best choice for you.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {['Feature One', 'Feature Two', 'Feature Three'].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-blue-600"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                  <h4 className="text-xl font-semibold text-blue-600">{feature}</h4>
                  <p className="text-gray-600 mt-4 text-base">Detailed description of {feature.toLowerCase()}.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 px-6 bg-gray-50 text-center">
          <div className="container mx-auto">
            <motion.h3 
              className="text-4xl font-semibold text-blue-600 mb-8" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Pricing Plans
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-lg mb-12 max-w-xl mx-auto" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Choose the plan that’s right for you.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { plan: 'Basic', price: '$10/month', features: ['Feature One', 'Feature Two'] },
                { plan: 'Pro', price: '$20/month', features: ['Feature One', 'Feature Two', 'Feature Three'] },
                { plan: 'Enterprise', price: '$30/month', features: ['All Features', 'Priority Support'] },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-blue-600"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-blue-600">{item.plan}</h4>
                  <p className="text-xl font-bold text-gray-800 mt-4">{item.price}</p>
                  <ul className="mt-6 text-left">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center mt-2">
                        <FaCheckCircle className="text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-700 transition duration-300">
                    Select Plan
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-6 text-center">
        <p className="text-sm">© 2024 LinChecker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
