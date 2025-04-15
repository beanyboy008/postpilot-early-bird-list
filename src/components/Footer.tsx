
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-bold text-gray-900">PostPilot</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-6 md:mb-0 items-center md:items-start">
            <div>
              <h3 className="text-sm font-semibold mb-3 text-center md:text-left">Navigation</h3>
              <ul className="space-y-2 text-center md:text-left">
                <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Home</a></li>
                <li><a href="#features" className="text-sm text-gray-600 hover:text-purple-600">Features</a></li>
                <li><a href="#advantages" className="text-sm text-gray-600 hover:text-purple-600">Why PostPilot</a></li>
                <li><a href="#faq" className="text-sm text-gray-600 hover:text-purple-600">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3 text-center md:text-left">Legal</h3>
              <ul className="space-y-2 text-center md:text-left">
                <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">© {currentYear} PostPilot. All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-1">Your all-in-one autopilot for social content</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
