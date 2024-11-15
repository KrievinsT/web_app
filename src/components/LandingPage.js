import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [activeFAQ, setActiveFAQ] = useState(null);

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

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="bg-blue-700 text-white py-4 shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold tracking-wide" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            LinChecker
          </motion.h1>
          <button onClick={toggleNav} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className={`md:flex ${isNavOpen ? 'block' : 'hidden'} absolute md:static bg-blue-700 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto`}>
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 p-6 md:p-0 text-center md:text-left">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a href="#features" className="block text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">Features</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#pricing" className="block text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">Pricing</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/login" className="block text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">Login</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/userdata" className="block text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">User Data</Link>
              </motion.li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24">
        <section className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-r from-gray-100 to-white min-h-[60vh] text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-blue-700 leading-tight" 
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
            <div className="flex items-center border border-gray-300 rounded-md shadow-lg bg-white">
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
              className="bg-blue-700 text-white px-6 py-3 rounded-md mt-6 w-full hover:bg-blue-800 transition duration-300 transform hover:scale-105"
            >
              Scrape Data
            </button>
          </motion.div>
        </section>

        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900"
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Get Started with LinChecker
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Ready to start scraping in minutes? Follow these simple steps:
            </motion.p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Sign Up', 'Choose a Plan', 'Install the Extension', 'Configure Your First Scrape', 'Start Scraping'].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-700"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{`Step ${index + 1}: ${step}`}</h3>
                  <p className="mt-2 text-gray-600">{"Description for " + step.toLowerCase() + "."}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <a href="#sign-up" className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Get Started Now
              </a>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 px-6 bg-white text-center border-t-2 border-gray-200">
          <div className="container mx-auto">
            <motion.h3 
              className="text-4xl font-semibold text-blue-700 mb-8" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Features
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { icon: FaCheckCircle, title: 'Automated Scraping', description: 'Efficiently scrape data from multiple sources automatically.' },
                { icon: FaCheckCircle, title: 'Data Export', description: 'Export scraped data in various formats such as CSV and JSON.' },
                { icon: FaCheckCircle, title: 'User-Friendly Interface', description: 'Intuitive design that makes data scraping accessible to everyone.' },
                { icon: FaCheckCircle, title: 'Real-Time Monitoring', description: 'Track scraping progress and results in real-time.' },
                { icon: FaCheckCircle, title: 'Customizable Settings', description: 'Tailor scraping parameters to fit your specific needs.' },
                { icon: FaCheckCircle, title: 'Secure and Reliable', description: 'Ensure data privacy and security with our robust infrastructure.' }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <feature.icon className="text-blue-700 text-4xl mb-4 mx-auto" />
                  <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 px-6 bg-gradient-to-r from-blue-100 to-blue-200 text-center border-t-2 border-gray-200">
          <div className="container mx-auto">
            <motion.h3 
              className="text-4xl font-semibold text-blue-700 mb-8" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Pricing Plans
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { plan: 'Basic', price: 'Free', features: ['Single Project', '500 Requests per Month', 'Email Support'] },
                { plan: 'Pro', price: '$29/mo', features: ['Unlimited Projects', '10,000 Requests per Month', 'Priority Email Support'] },
                { plan: 'Enterprise', price: 'Custom', features: ['Dedicated Support', 'Custom Features', 'Unlimited Requests'] }
              ].map((pricing, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900">{pricing.plan}</h4>
                  <p className="text-4xl font-bold text-blue-700 mt-2">{pricing.price}</p>
                  <ul className="text-gray-600 mt-4 space-y-2">
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="text-blue-700 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300">Select</button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 px-6 bg-white text-center border-t-2 border-gray-200">
          <div className="container mx-auto">
            <motion.h3 
              className="text-4xl font-semibold text-blue-700 mb-8" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h3>
            <div className="max-w-3xl mx-auto text-left">
              {[
                { question: 'What is web scraping?', answer: 'Web scraping is the process of extracting data from websites. Our tool automates this process, allowing you to gather data quickly and efficiently.' },
                { question: 'Is web scraping legal?', answer: 'Web scraping is legal in many cases, especially when the data is publicly accessible. However, it is important to respect the terms of service of the websites you scrape.' },
                { question: 'How do I start scraping?', answer: 'Simply enter the URL you want to scrape in the input field above and click "Scrape Data". Our tool will handle the rest.' },
                { question: 'What data formats are supported?', answer: 'Our tool can export scraped data in various formats, including CSV and JSON.' },
                { question: 'Can I scrape multiple pages?', answer: 'Yes, our tool supports scraping multiple pages. You can configure the scraper to follow links and gather data from multiple sources.' }
              ].map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="border-b py-6" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div onClick={() => toggleFAQ(index)} className="flex justify-between items-center cursor-pointer">
                    <h4 className="text-xl font-semibold text-gray-900">{faq.question}</h4>
                    {activeFAQ === index ? <IoIosArrowUp className="text-gray-700" /> : <IoIosArrowDown className="text-gray-700" />}
                  </div>
                  {activeFAQ === index && <p className="text-gray-600 mt-4">{faq.answer}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <motion.p 
            className="text-gray-400" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            &copy; {new Date().getFullYear()} LinChecker. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
