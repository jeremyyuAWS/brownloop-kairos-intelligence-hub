import React, { useState } from 'react';
import { Play, CheckCircle, TrendingUp, DollarSign, Award, Target, Users } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import AgentDialog from '../agents/AgentDialog';
import { peExecutiveScenarios, peExecutiveOverviewConversation, ExecutiveScenario } from '../../data/conversations/peExecutiveStoryMode';
import { agents } from '../../data/agentsData';
import { AgentType } from '../../types';

const ExecutiveStoryMode: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ExecutiveScenario | null>(null);
  const [showOverview, setShowOverview] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<Set<string>>(new Set());

  // Create a virtual agent for the executive overview
  const executiveOverviewAgent: AgentType = {
    id: 'executive-overview',
    title: 'Managing Partner PE AI Transformation Advisor',
    description: 'Strategic business case and ROI analysis for private equity AI transformation',
    icon: 'TrendingUp',
    category: 'personal',
    status: 'online'
  };

  const handleScenarioComplete = (scenarioId: string) => {
    setCompletedScenarios(prev => new Set([...prev, scenarioId]));
    setActiveScenario(null);
  };

  const formatCurrency = (amount: string) => {
    return amount.replace(/\$(\d+\.?\d*)([MK])/g, (match, num, suffix) => {
      const multiplier = suffix === 'M' ? 'Million' : 'Thousand';
      return `$${num} ${multiplier}`;
    });
  };

  const getScenarioProgress = () => {
    return Math.round((completedScenarios.size / peExecutiveScenarios.length) * 100);
  };

  const getAverageEfficiency = () => {
    // Extract percentage improvements from efficiency metrics
    const efficiencyGains = peExecutiveScenarios.map(scenario => {
      const metric = scenario.operationalMetrics.timeReduction;
      const match = metric.match(/(\d+)%/);
      return match ? parseInt(match[1]) : 75; // Default to 75% if no percentage found
    });
    return Math.round(efficiencyGains.reduce((a, b) => a + b, 0) / efficiencyGains.length);
  };

  const renderScenarioCard = (scenario: ExecutiveScenario) => {
    const isCompleted = completedScenarios.has(scenario.id);
    
    return (
      <Card key={scenario.id} className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
              isCompleted ? 'bg-green-500' : 'bg-gray-300'
            }`}>
              {isCompleted && <CheckCircle size={16} className="text-white" />}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {scenario.title}
            </h3>
          </div>
          <Badge variant="info">{scenario.operationalMetrics.timeReduction}</Badge>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {scenario.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <TrendingUp size={16} className="text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm font-medium text-green-800 dark:text-green-300">Efficiency Gains</span>
            </div>
            <p className="text-sm text-green-700 dark:text-green-400">
              {scenario.operationalMetrics.efficiency}
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <Target size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Business Value</span>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              {scenario.businessValue}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <Users size={16} className="text-purple-600 dark:text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-800 dark:text-purple-300">Employee Impact</span>
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-400">
              {scenario.operationalMetrics.employeeImpact}
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {scenario.agents.map(agentId => {
              const agent = agents.find(a => a.id === agentId);
              return agent ? (
                <Badge key={agentId} variant="secondary" className="text-xs">
                  {agent.title.split(' ')[0]} Agent
                </Badge>
              ) : null;
            })}
          </div>
        </div>

        <Button
          variant={isCompleted ? "outline" : "primary"}
          fullWidth
          icon={<Play size={16} />}
          onClick={() => setActiveScenario(scenario)}
        >
          {isCompleted ? 'Watch Again' : 'Start Demo'}
        </Button>
      </Card>
    );
  };

  if (activeScenario) {
    // Create a virtual agent for the scenario
    const scenarioAgent: AgentType = {
      id: activeScenario.id,
      title: `${activeScenario.title} - Executive Demo`,
      description: activeScenario.description,
      icon: 'TrendingUp',
      category: 'personal',
      status: 'online'
    };

    return (
      <AgentDialog 
        agent={scenarioAgent} 
        onClose={() => handleScenarioComplete(activeScenario.id)} 
      />
    );
  }

  if (showOverview) {
    return (
      <AgentDialog 
        agent={executiveOverviewAgent} 
        onClose={() => setShowOverview(false)} 
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Executive Header */}
      <div className="text-center bg-gradient-to-r from-gray-800 to-blue-900 text-white p-8 rounded-xl">
        <Award size={48} className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Managing Partner: Kairos AI Transformation</h1>
        <p className="text-blue-100 max-w-3xl mx-auto">
          Experience how Brownloop\'s Kairos AI agents transform private equity operations through enterprise-grade scenarios. 
          Each demonstration showcases measurable fund performance improvements and competitive advantages.
        </p>
      </div>

      {/* Progress and Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${getScenarioProgress() * 2.51} 251`}
                  className="text-blue-600"
                />
              </svg>
              <span className="absolute text-lg font-bold text-gray-900 dark:text-white">
                {getScenarioProgress()}%
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Demo Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {completedScenarios.size} of {peExecutiveScenarios.length} scenarios completed
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <TrendingUp size={48} className="mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Average Efficiency Gain
            </h3>
            <p className="text-3xl font-bold text-green-600 mb-2">
              {getAverageEfficiency()}%
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Time reduction across all processes
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <Button
              variant="primary"
              fullWidth
              size="lg"
              icon={<Play size={20} />}
              onClick={() => setShowOverview(true)}
            >
              Managing Partner Strategic Overview
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Complete PE operational case and ROI analysis
            </p>
          </div>
        </Card>
      </div>

      {/* Scenario Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Interactive Private Equity Scenarios
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {peExecutiveScenarios.map(renderScenarioCard)}
        </div>
      </div>

      {/* Call to Action */}
      {completedScenarios.size === peExecutiveScenarios.length && (
        <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
          <div className="text-center">
            <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Private Equity Transformation Complete!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              You\'ve experienced the full power of AI transformation across all private equity operations. 
              Ready to implement these operational improvements in your fund?
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="primary" size="lg">
                Request Fund Implementation Plan
              </Button>
              <Button variant="outline" size="lg" onClick={() => setShowOverview(true)}>
                Review PE Operational Benefits
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ExecutiveStoryMode;