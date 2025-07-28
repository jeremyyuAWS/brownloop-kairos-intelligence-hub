import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TabView from './TabView';
import MarketingAgentsHub from '../tabs/MarketingAgentsHub';
import OGITab from '../tabs/OGITab';
import AnalyticsTab from '../tabs/AnalyticsTab';
import ResponsibleAITab from '../tabs/ResponsibleAITab';
import ExecutiveStoryMode from '../tabs/ExecutiveStoryMode';
import WelcomeModal from '../ui/WelcomeModal';

const AppLayout: React.FC = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  
  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedResultsCX');
    if (!hasVisited) {
      setShowWelcomeModal(true);
      localStorage.setItem('hasVisitedResultsCX', 'true');
    }
  }, []);

  const handleOpenWelcomeModal = () => {
    setShowWelcomeModal(true);
  };
  
  const tabs = [
    { id: 'executive-story', label: 'Executive Demo', content: <ExecutiveStoryMode /> },
    { id: 'marketing-agents', label: 'AI Agents Hub', content: <MarketingAgentsHub /> },
    { id: 'ogi', label: 'OGI Network', content: <OGITab /> },
    { id: 'analytics', label: 'Analytics Center', content: <AnalyticsTab /> },
    { id: 'responsible-ai', label: 'AI Governance', content: <ResponsibleAITab /> }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar onOpenHelp={handleOpenWelcomeModal} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <TabView tabs={tabs} />
        </div>
      </main>
      <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
    </div>
  );
};

export default AppLayout;