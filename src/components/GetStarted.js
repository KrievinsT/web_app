import React from 'react';

const GetStarted = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Get Started with Scrapin</h2>
        <p className="mt-4 text-lg text-gray-600">Ready to start scraping in minutes? Follow these simple steps:</p>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Step 1: Sign Up</h3>
            <p className="mt-2 text-gray-600">Create your account on Scrapin.io with just your email and password. Quick, easy, and free!</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Step 2: Choose a Plan</h3>
            <p className="mt-2 text-gray-600">Pick the plan that fits your needs. We offer flexible options for users of all levels.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Step 3: Install the Extension</h3>
            <p className="mt-2 text-gray-600">Download and install the Scrapin browser extension. It works seamlessly with all major browsers.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Step 4: Configure Your First Scrape</h3>
            <p className="mt-2 text-gray-600">Select the website to scrape, point and click on the data you need, and adjust the settings for precise extraction.</p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Step 5: Start Scraping</h3>
            <p className="mt-2 text-gray-600">Hit "Start Scraping" and watch Scrapin gather your data, exporting it neatly into CSVs or APIs.</p>
          </div>
        </div>
        
        <div className="mt-8">
          <a href="#sign-up" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
