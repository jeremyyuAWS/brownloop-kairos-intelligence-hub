import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import KnowledgeGraph from '../ogi/KnowledgeGraph';
import OGIChatAssistant from '../ogi/ChatAssistant';
import Input from '../ui/Input';
import { ogiNodes, ogiLinks } from '../../data/ogiData';

const OGITab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Private Equity Operations Intelligence (OGI)</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Live network visualization of connected PE agents, portfolio companies, and investment intelligence
          </p>
        </div>
        <div className="w-64">
          <Input 
            placeholder="Search investment intelligence..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            icon={<Search size={16} />}
          />
        </div>
      </div>
      
      {/* Main layout with knowledge graph and chat side by side */}
      <div className="flex gap-6 h-[600px]">
        {/* Knowledge Graph - 2/3 width */}
        <div className="flex-1" style={{ flexBasis: '66.67%' }}>
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
            Knowledge Graph
          </h2>
          {isLoading ? (
            <div className="w-full h-full border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">Loading investment intelligence graph...</p>
              </div>
            </div>
          ) : (
            <div className="h-full">
              <KnowledgeGraph nodes={ogiNodes} links={ogiLinks} />
            </div>
          )}
        </div>
        
        {/* Chat Assistant - 1/3 width */}
        <div className="flex-shrink-0" style={{ flexBasis: '33.33%' }}>
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
            Kairos Investment Intelligence
          </h2>
          <div className="h-full">
            <OGIChatAssistant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OGITab;