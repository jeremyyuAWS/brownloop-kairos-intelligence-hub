import React, { useState } from 'react';
import { Shield, Eye, GitBranch, FileText, Settings, Info, Search, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import InfoModal from '../ui/InfoModal';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import DataLineageView from '../responsible-ai/DataLineageView';
import BiasDetectionView from '../responsible-ai/BiasDetectionView';

const ResponsibleAITab: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('overview');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const features = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'data-lineage', label: 'Data Lineage', icon: GitBranch },
    { id: 'bias-detection', label: 'Bias Detection', icon: AlertTriangle },
    { id: 'explainability', label: 'Explainability', icon: Eye },
    { id: 'audit-logs', label: 'Audit Logs', icon: FileText },
    { id: 'policy-engine', label: 'Policy Engine', icon: Settings }
  ];

  const governanceMetrics = [
    { label: 'Models Monitored', value: 12, status: 'active', description: 'AI models under governance' },
    { label: 'Compliance Score', value: 94.2, status: 'good', description: 'Overall governance compliance' },
    { label: 'Bias Tests Passed', value: 89, status: 'warning', description: 'Percentage of bias tests passed' },
    { label: 'Audit Events', value: 247, status: 'active', description: 'Decisions logged today' }
  ];

  const recentDecisions = [
    {
      id: 'dec1',
      model: 'Deal Evaluation System',
      decision: 'Deal Approved for IC',
      confidence: 94.2,
      timestamp: '2 minutes ago',
      explanation: 'Approved based on financial metrics (45%), market position (35%), and management quality (20%)',
      biasScore: 2.1
    },
    {
      id: 'dec2',
      model: 'Portfolio Scorer',
      decision: 'Portfolio Company Flagged for Review',
      confidence: 87.5,
      timestamp: '5 minutes ago',
      explanation: 'Flagged due to declining margins (45%), customer concentration (35%), and market risks (20%)',
      biasScore: 1.8
    },
    {
      id: 'dec3',
      model: 'Investment Scorer',
      decision: 'High Quality Investment',
      confidence: 91.3,
      timestamp: '8 minutes ago',
      explanation: 'High quality score based on financial performance (60%) and market position (40%)',
      biasScore: 0.9
    }
  ];

  const policyRules = [
    { name: 'No Demographic Bias', status: 'active', description: 'Prohibit use of demographic data in investment scoring models' },
    { name: 'Geographic Diversity', status: 'active', description: 'Ensure geographic diversity in deal sourcing algorithms' },
    { name: 'Human Review Threshold', status: 'active', description: 'Require human review for investments above $50M' },
    { name: 'Bias Variance Limit', status: 'warning', description: 'Maximum 5% variance across sector segments' },
    { name: 'Explainability Requirement', status: 'active', description: 'All investment AI decisions must include explanation rationale' }
  ];
  
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Governance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {governanceMetrics.map((metric, index) => (
          <Card key={index} className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.label}
              </h3>
              <div className={`w-3 h-3 rounded-full ${
                metric.status === 'active' ? 'bg-green-500' :
                metric.status === 'good' ? 'bg-blue-500' :
                metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {typeof metric.value === 'number' && metric.value > 100 
                ? metric.value.toLocaleString() 
                : metric.value}
              {metric.label.includes('Score') || metric.label.includes('Passed') ? '%' : ''}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {metric.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Recent AI Decisions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Recent Private Equity AI Decisions
          </h3>
          <div className="space-y-4">
            {recentDecisions.map(decision => (
              <div key={decision.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {decision.model}
                    </h4>
                    <Badge variant={decision.biasScore < 2 ? 'success' : decision.biasScore < 5 ? 'warning' : 'danger'}>
                      Bias: {decision.biasScore}%
                    </Badge>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {decision.timestamp}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {decision.decision}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    ({decision.confidence}% confidence)
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {decision.explanation}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            PE Investment Policy Compliance Status
          </h3>
          <div className="space-y-3">
            {policyRules.map((rule, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  {rule.status === 'active' ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <AlertTriangle size={16} className="text-yellow-500" />
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {rule.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {rule.description}
                    </p>
                  </div>
                </div>
                <Badge variant={rule.status === 'active' ? 'success' : 'warning'}>
                  {rule.status === 'active' ? 'Active' : 'Warning'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Governance Trends */}
      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Private Equity AI Governance Health
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-green-100 dark:bg-green-900/30 rounded-full">
              <TrendingUp size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Score</h4>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">+2.3%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">vs last month</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Eye size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Explainability</h4>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">98.7%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">investment decisions explained</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <Shield size={24} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Privacy</h4>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">investor data protection</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderExplainability = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Private Equity AI Decision Explanations</h3>
        <div className="space-y-4">
          {recentDecisions.map(decision => (
            <div key={decision.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {decision.model} - {decision.decision}
                </h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">{decision.timestamp}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {decision.explanation}
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="info">Confidence: {decision.confidence}%</Badge>
                <Badge variant={decision.biasScore < 2 ? 'success' : 'warning'}>
                  Bias Score: {decision.biasScore}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAuditLogs = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Private Equity AI Decision Audit Trail</h3>
        <div className="space-y-3">
          {[
            { action: 'Investment Approval Decision', user: 'AI Agent', timestamp: '2:34 PM', status: 'completed' },
            { action: 'Bias Scan Executed', user: 'System', timestamp: '2:32 PM', status: 'completed' },
            { action: 'Deal Classification', user: 'AI Agent', timestamp: '2:31 PM', status: 'completed' },
            { action: 'Portfolio Quality Assessment', user: 'AI Agent', timestamp: '2:28 PM', status: 'completed' },
            { action: 'Investment Policy Check', user: 'System', timestamp: '2:25 PM', status: 'completed' },
            { action: 'Data Lineage Validated', user: 'System', timestamp: '2:22 PM', status: 'completed' }
          ].map((log, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  log.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{log.action}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">by {log.user}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {log.timestamp}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" fullWidth>
            Export Audit Log
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderPolicyEngine = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Private Equity AI Ethics Policy Configuration</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">PE Investment Data Usage Policies</h4>
            <div className="space-y-3">
              {policyRules.slice(0, 3).map((rule, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{rule.name}</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{rule.description}</p>
                  </div>
                  <Badge variant={rule.status === 'active' ? 'success' : 'warning'}>
                    {rule.status === 'active' ? 'Active' : 'Warning'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Investment Decision Thresholds</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">Deal quality review threshold</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">7.5/10</span>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">Bias variance limit</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">5%</span>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">Human review requirement</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$50M+ investments</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <Button variant="primary">
            Update Policies
          </Button>
          <Button variant="outline">
            Export Configuration
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderFeatureContent = () => {
    switch (activeFeature) {
      case 'overview':
        return renderOverview();
      case 'data-lineage':
        return <DataLineageView />;
      case 'bias-detection':
        return <BiasDetectionView />;
      case 'explainability':
        return renderExplainability();
      case 'audit-logs':
        return renderAuditLogs();
      case 'policy-engine':
        return renderPolicyEngine();
      default:
        return renderOverview();
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Responsible AI Governance</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Ensure ethical private equity AI deployment with comprehensive oversight and investment compliance
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
            placeholder="Search PE governance..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            icon={<Search size={16} />}
          />
        </div>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="flex space-x-6 overflow-x-auto">
          {features.map(feature => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`
                  flex items-center py-3 px-1 font-medium text-sm border-b-2 transition-colors whitespace-nowrap
                  ${activeFeature === feature.id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
                `}
              >
                <Icon size={16} className="mr-2" />
                {feature.label}
              </button>
            );
          })}
        </div>
      </div>
      
      <div>
        {renderFeatureContent()}
      </div>
      
      <InfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title="Responsible AI Governance"
        content={
          <div className="space-y-4">
            <p>The Responsible AI Governance system ensures ethical private equity AI deployment across all PE operations with comprehensive oversight and investment compliance mechanisms.</p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Overview Dashboard</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor PE AI governance health, investment compliance metrics, and recent PE AI decisions in real-time.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Investment Lineage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track investment data sources, transformations, and decisions across all PE AI agents and decision points.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Bias Detection</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Automated scanning for demographic or sector bias in deal sourcing, investment evaluation, and portfolio management decisions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Explainability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI-generated explanations for all automated investment decisions with factor weighting and reasoning.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Audit Logs</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Immutable logs of every PE AI decision for investment compliance and performance review.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Policy Engine</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Define and enforce investment policies for ethical PE AI usage and investment decision boundaries.</p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ResponsibleAITab;