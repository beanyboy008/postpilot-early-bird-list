
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="text-xl font-bold text-gray-900">PostPilot</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#advantages" className="text-gray-600 hover:text-purple-600 transition-colors">Why PostPilot</a>
          <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <a href="#join">Join Waitlist</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
