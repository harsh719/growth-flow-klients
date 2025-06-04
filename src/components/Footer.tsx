
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
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
            <p className="text-gray-300 mb-4 max-w-md">
              We build hands-off growth systems for B2B leaders. Unlock your potential deals and scale your business systematically.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/klients-growth/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                  e.currentTarget.style.webkitBackgroundClip = 'text';
                  e.currentTarget.style.webkitTextFillColor = 'transparent';
                  e.currentTarget.style.backgroundClip = 'text';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.webkitBackgroundClip = '';
                  e.currentTarget.style.webkitTextFillColor = '';
                  e.currentTarget.style.backgroundClip = '';
                  e.currentTarget.style.color = '#9CA3AF';
                }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/HeartbeaTechno" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                  e.currentTarget.style.webkitBackgroundClip = 'text';
                  e.currentTarget.style.webkitTextFillColor = 'transparent';
                  e.currentTarget.style.backgroundClip = 'text';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.webkitBackgroundClip = '';
                  e.currentTarget.style.webkitTextFillColor = '';
                  e.currentTarget.style.backgroundClip = '';
                  e.currentTarget.style.color = '#9CA3AF';
                }}
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                    e.currentTarget.style.webkitBackgroundClip = 'text';
                    e.currentTarget.style.webkitTextFillColor = 'transparent';
                    e.currentTarget.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.webkitBackgroundClip = '';
                    e.currentTarget.style.webkitTextFillColor = '';
                    e.currentTarget.style.backgroundClip = '';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-studies" 
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                    e.currentTarget.style.webkitBackgroundClip = 'text';
                    e.currentTarget.style.webkitTextFillColor = 'transparent';
                    e.currentTarget.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.webkitBackgroundClip = '';
                    e.currentTarget.style.webkitTextFillColor = '';
                    e.currentTarget.style.backgroundClip = '';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                    e.currentTarget.style.webkitBackgroundClip = 'text';
                    e.currentTarget.style.webkitTextFillColor = 'transparent';
                    e.currentTarget.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.webkitBackgroundClip = '';
                    e.currentTarget.style.webkitTextFillColor = '';
                    e.currentTarget.style.backgroundClip = '';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                    e.currentTarget.style.webkitBackgroundClip = 'text';
                    e.currentTarget.style.webkitTextFillColor = 'transparent';
                    e.currentTarget.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.webkitBackgroundClip = '';
                    e.currentTarget.style.webkitTextFillColor = '';
                    e.currentTarget.style.backgroundClip = '';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get Started</h3>
            <p className="text-gray-300 mb-4">
              Ready to build your growth system?
            </p>
            <a
              href="https://cal.com/harsh719/klientsgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gradient-bg text-white px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
            >
              Book More Meetings →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 KlientsGrowth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
