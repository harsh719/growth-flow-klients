
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1ecb80d7-2cf9-46fd-bad8-823ef5bb11e5.png" 
              alt="KlientsGrowth Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-black">KlientsGrowth</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) 
                    ? 'gradient-text' 
                    : 'text-gray-700 hover:gradient-text'
                }`}
                style={isActive(item.href) ? {} : {}}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                    e.currentTarget.style.webkitBackgroundClip = 'text';
                    e.currentTarget.style.webkitTextFillColor = 'transparent';
                    e.currentTarget.style.backgroundClip = 'text';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.webkitBackgroundClip = '';
                    e.currentTarget.style.webkitTextFillColor = '';
                    e.currentTarget.style.backgroundClip = '';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-bg hover:opacity-90 text-white border-0">
              <a href="https://cal.com/harsh719/klientsgrowth" target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              style={{
                color: '#374151'
              }}
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
                e.currentTarget.style.color = '#374151';
              }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'gradient-text' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)';
                      e.currentTarget.style.webkitBackgroundClip = 'text';
                      e.currentTarget.style.webkitTextFillColor = 'transparent';
                      e.currentTarget.style.backgroundClip = 'text';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.background = '';
                      e.currentTarget.style.webkitBackgroundClip = '';
                      e.currentTarget.style.webkitTextFillColor = '';
                      e.currentTarget.style.backgroundClip = '';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="gradient-bg hover:opacity-90 text-white border-0 w-full mt-4">
                <a 
                  href="https://cal.com/harsh719/klientsgrowth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Free Strategy Call
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
