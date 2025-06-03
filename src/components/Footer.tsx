
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/1ecb80d7-2cf9-46fd-bad8-823ef5bb11e5.png" 
                alt="KlientsGrowth Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">KlientsGrowth</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              We build hands-off growth systems for B2B leaders. Unlock your potential deals and scale your business systematically.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get Started</h3>
            <p className="text-gray-400 mb-4">
              Ready to build your growth system?
            </p>
            <a
              href="https://cal.com/harsh719/klientsgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gradient-bg text-white px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
            >
              Book Strategy Call
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 KlientsGrowth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
