import React, { useState } from 'react';
import { Search, Info } from 'lucide-react';
import { getAgentsByCategory } from '../../data/agentsData';
import AgentZone from '../agents/AgentZone';
import AgentDialog from '../agents/AgentDialog';
import InfoModal from '../ui/InfoModal';
import { AgentType } from '../../types';
import Input from '../ui/Input';

const MarketingAgentsHub: React.FC = () => {
  const [activeAgent, setActiveAgent] = useState<AgentType | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  const employeeAgents = getAgentsByCategory('employee');
  const hrAgents = getAgentsByCategory('hr');
  const personalAgents = getAgentsByCategory('personal');
  
  const handleInteract = (agent: AgentType) => {
    setActiveAgent(agent);
  };
  
  const renderFilter = () => {
    const filters = [
      { id: 'all', label: 'All Agents' },
      { id: 'employee', label: 'Deal Team & Diligence' },
      { id: 'hr', label: 'Portfolio Operations' },
      { id: 'personal', label: 'Finance & Investor Relations' }
    ];
    
    return (
      <div className="flex space-x-4 mb-6">
        {filters.map(item => (
          <button
            key={item.id}
            className={`px-4 py-1.5 text-sm rounded-md transition ${
              filter === item.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  };
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Brownloop Kairos AI Agents Hub</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Enterprise-grade AI agents for sophisticated private equity operations and investment intelligence
            </p>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Info size={20} />
          </button>
        </div>
        <div className="w-64">
          <Input
            placeholder="Search PE agents..."
            icon={<Search size={16} />}
            fullWidth
          />
        </div>
      </div>
      
      {renderFilter()}
      
      {(filter === 'all' || filter === 'employee') && (
        <AgentZone 
          title="Deal Team & Diligence Agents" 
          agents={employeeAgents} 
          onInteract={handleInteract}
        />
      )}
      
      {(filter === 'all' || filter === 'hr') && (
        <AgentZone 
          title="Portfolio Operations Agents" 
          agents={hrAgents} 
          onInteract={handleInteract}
        />
      )}
      
      {(filter === 'all' || filter === 'personal') && (
        <AgentZone 
          title="Finance & Investor Relations Agents" 
          agents={personalAgents} 
          onInteract={handleInteract}
        />
      )}
      
      {activeAgent && (
        <AgentDialog agent={activeAgent} onClose={() => setActiveAgent(null)} />
      )}
      
      <InfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title="Private Equity AI Agents Hub"
        content={
          <div className="space-y-4">
            <p>The Private Equity AI Agents Hub contains specialized AI agents designed specifically for all aspects of PE operations, from deal sourcing to portfolio management.</p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Deal Team & Diligence Agents</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Specialized agents for CIM analysis, company profiling, diligence coordination, and investment committee preparation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Portfolio Operations Agents</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Advanced agents for financial aggregation, operational metrics, contract intelligence, and value creation tracking.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Finance & Investor Relations Agents</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive agents for valuation analysis, pitchbook creation, quarterly reporting, and LP communication management.</p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};


export default MarketingAgentsHub