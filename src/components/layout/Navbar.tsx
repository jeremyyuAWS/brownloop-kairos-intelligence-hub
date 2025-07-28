import React from 'react';
import { HelpCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface NavbarProps {
  onOpenHelp: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenHelp }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <img 
                src="/images/Brownloop-logo-2.png"
                alt="Brownloop" 
                className="h-8 w-auto"
                onError={(e) => {
                  // Fallback to Brownloop icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="flex items-center justify-center w-8 h-8 rounded bg-blue-600 text-white mr-3" style={{ display: 'none' }}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Kairos Intelligence Hub</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">Private equity operations intelligence powered by Brownloop AI agents</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">v1.0</span>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Private Equity AI Platform</span>
            
            {/* Help Icon */}
            <button
              onClick={onOpenHelp}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Help & Platform Overview"
            >
              <HelpCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;