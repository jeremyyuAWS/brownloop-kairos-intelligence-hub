import React from 'react';
import { X, TrendingUp, TrendingDown, Users, Clock, DollarSign, Target, AlertCircle } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { OGINode } from '../../types';

interface NodeDetailModalProps {
  node: OGINode | null;
  onClose: () => void;
}

interface NodeDetails {
  overview: string;
  keyMetrics: {
    label: string;
    value: string;
    trend: 'up' | 'down' | 'stable';
    change: string;
    icon: React.ReactNode;
  }[];
  insights: string[];
  connections: {
    type: string;
    impact: 'high' | 'medium' | 'low';
    description: string;
  }[];
  actionItems: string[];
}

const getNodeDetails = (node: OGINode): NodeDetails => {
  const nodeDetailsMap: Record<string, NodeDetails> = {
    'n1': { // Maternity Leave
      overview: 'Comprehensive maternity leave policy supporting work-life balance and employee retention. This policy directly impacts employee satisfaction, retention rates, and company culture.',
      keyMetrics: [
        { label: 'Policy Usage Rate', value: '67%', trend: 'up', change: '+12%', icon: <Users size={16} /> },
        { label: 'Return Rate', value: '94%', trend: 'up', change: '+8%', icon: <TrendingUp size={16} /> },
        { label: 'Avg Leave Duration', value: '14 weeks', trend: 'stable', change: '0%', icon: <Clock size={16} /> },
        { label: 'Cost per Employee', value: '$8,400', trend: 'down', change: '-5%', icon: <DollarSign size={16} /> }
      ],
      insights: [
        'High return rate indicates effective support programs',
        'Usage trending upward suggests positive culture shift',
        'Cost efficiency improved through better planning',
        'Strong correlation with overall employee satisfaction scores'
      ],
      connections: [
        { type: 'Employee Satisfaction', impact: 'high', description: 'Direct positive correlation with satisfaction scores' },
        { type: 'Retention Rates', impact: 'high', description: 'Key factor in reducing turnover' },
        { type: 'Work-Life Balance', impact: 'high', description: 'Central component of balance initiatives' }
      ],
      actionItems: [
        'Expand support programs for returning employees',
        'Consider extending leave duration for competitive advantage',
        'Implement mentorship program for smooth transitions'
      ]
    },
    'n2': { // Leave Policy
      overview: 'Comprehensive leave management framework covering all types of employee time off including vacation, sick leave, personal time, and family leave.',
      keyMetrics: [
        { label: 'Policy Compliance', value: '96%', trend: 'up', change: '+4%', icon: <Target size={16} /> },
        { label: 'Leave Utilization', value: '78%', trend: 'up', change: '+6%', icon: <Users size={16} /> },
        { label: 'Manager Satisfaction', value: '89%', trend: 'up', change: '+11%', icon: <TrendingUp size={16} /> },
        { label: 'Processing Time', value: '2.3 days', trend: 'down', change: '-15%', icon: <Clock size={16} /> }
      ],
      insights: [
        'High compliance indicates clear policy communication',
        'Increased utilization shows improved work-life balance',
        'Faster processing improves employee experience',
        'Manager satisfaction reflects streamlined workflows'
      ],
      connections: [
        { type: 'Remote Work', impact: 'medium', description: 'Flexible policies complement remote work arrangements' },
        { type: 'Benefits', impact: 'high', description: 'Core component of total benefits package' },
        { type: 'Compensation', impact: 'medium', description: 'Leave policies impact total compensation value' }
      ],
      actionItems: [
        'Automate approval workflows for faster processing',
        'Integrate with project management for better planning',
        'Develop predictive analytics for leave patterns'
      ]
    },
    'n3': { // Remote Work
      overview: 'Strategic remote work initiative enabling flexible employment arrangements while maintaining productivity and collaboration standards.',
      keyMetrics: [
        { label: 'Remote Adoption', value: '73%', trend: 'up', change: '+25%', icon: <Users size={16} /> },
        { label: 'Productivity Index', value: '108%', trend: 'up', change: '+8%', icon: <TrendingUp size={16} /> },
        { label: 'Collaboration Score', value: '85%', trend: 'stable', change: '+2%', icon: <Target size={16} /> },
        { label: 'Cost Savings', value: '$1.2M', trend: 'up', change: '+18%', icon: <DollarSign size={16} /> }
      ],
      insights: [
        'High adoption rate demonstrates employee preference',
        'Productivity gains exceed expectations',
        'Strong collaboration despite distributed workforce',
        'Significant cost savings in office overhead'
      ],
      connections: [
        { type: 'Employee Satisfaction', impact: 'high', description: 'Major driver of satisfaction improvements' },
        { type: 'Work-Life Balance', impact: 'high', description: 'Key enabler of better balance' },
        { type: 'Office Policy', impact: 'medium', description: 'Requires adaptation of traditional office policies' }
      ],
      actionItems: [
        'Expand remote work equipment budget',
        'Develop virtual team building programs',
        'Create hybrid collaboration best practices'
      ]
    },
    'n4': { // Performance Reviews
      overview: 'Comprehensive performance evaluation system focusing on goal achievement, skill development, and career progression planning.',
      keyMetrics: [
        { label: 'Review Completion', value: '98%', trend: 'up', change: '+3%', icon: <Target size={16} /> },
        { label: 'Employee Rating', value: '4.2/5', trend: 'up', change: '+0.3', icon: <TrendingUp size={16} /> },
        { label: 'Manager Effectiveness', value: '87%', trend: 'up', change: '+9%', icon: <Users size={16} /> },
        { label: 'Development Plans', value: '91%', trend: 'up', change: '+7%', icon: <Clock size={16} /> }
      ],
      insights: [
        'Near-universal completion shows process effectiveness',
        'Rising employee satisfaction with review quality',
        'Manager training improving review effectiveness',
        'Strong focus on development planning'
      ],
      connections: [
        { type: 'Career Development', impact: 'high', description: 'Primary input for career planning' },
        { type: 'Promotions', impact: 'high', description: 'Key factor in promotion decisions' },
        { type: 'Employee Satisfaction', impact: 'medium', description: 'Fair reviews improve satisfaction' }
      ],
      actionItems: [
        'Implement 360-degree feedback system',
        'Develop real-time performance tracking',
        'Create peer recognition integration'
      ]
    },
    'n5': { // Employee Satisfaction
      overview: 'Comprehensive measurement and improvement of employee satisfaction across all aspects of the workplace experience and organizational culture.',
      keyMetrics: [
        { label: 'Overall Satisfaction', value: '4.6/5', trend: 'up', change: '+0.4', icon: <TrendingUp size={16} /> },
        { label: 'Engagement Score', value: '89%', trend: 'up', change: '+12%', icon: <Users size={16} /> },
        { label: 'Retention Rate', value: '92%', trend: 'up', change: '+5%', icon: <Target size={16} /> },
        { label: 'NPS Score', value: '76', trend: 'up', change: '+18', icon: <DollarSign size={16} /> }
      ],
      insights: [
        'Satisfaction scores reaching excellent levels',
        'Strong engagement correlation with retention',
        'High NPS indicates strong culture advocacy',
        'Positive trends across all satisfaction dimensions'
      ],
      connections: [
        { type: 'Remote Work', impact: 'high', description: 'Flexible work significantly improves satisfaction' },
        { type: 'Work-Life Balance', impact: 'high', description: 'Balance is key satisfaction driver' },
        { type: 'Performance Reviews', impact: 'medium', description: 'Fair reviews contribute to satisfaction' }
      ],
      actionItems: [
        'Launch quarterly pulse surveys',
        'Develop predictive satisfaction analytics',
        'Create satisfaction dashboard for managers'
      ]
    }
  };

  return nodeDetailsMap[node.id] || {
    overview: `Detailed analysis and metrics for ${node.label}. This organizational element plays a crucial role in overall business operations and employee experience.`,
    keyMetrics: [
      { label: 'Performance Score', value: '85%', trend: 'up', change: '+5%', icon: <Target size={16} /> },
      { label: 'Utilization Rate', value: '67%', trend: 'stable', change: '0%', icon: <Users size={16} /> },
      { label: 'Efficiency Index', value: '92%', trend: 'up', change: '+8%', icon: <TrendingUp size={16} /> },
      { label: 'Cost Impact', value: '$45K', trend: 'down', change: '-12%', icon: <DollarSign size={16} /> }
    ],
    insights: [
      'Performance metrics trending positively',
      'Strong correlation with organizational goals',
      'Key driver of operational efficiency',
      'Positive impact on employee experience'
    ],
    connections: [
      { type: 'Related Processes', impact: 'medium', description: 'Integrated with other organizational processes' },
      { type: 'Strategic Goals', impact: 'high', description: 'Aligned with company strategic objectives' }
    ],
    actionItems: [
      'Monitor performance trends closely',
      'Optimize processes for better efficiency',
      'Enhance integration with related systems'
    ]
  };
};

const NodeDetailModal: React.FC<NodeDetailModalProps> = ({ node, onClose }) => {
  if (!node) return null;

  const details = getNodeDetails(node);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'policy':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'process':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'metric':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'concept':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getImpactColor = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20';
      case 'medium':
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20';
      case 'low':
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={14} className="text-green-500" />;
      case 'down':
        return <TrendingDown size={14} className="text-red-500" />;
      default:
        return <div className="w-3 h-3 rounded-full bg-gray-400" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              {node.label.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{node.label}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={getCategoryColor(node.category)}>
                  {node.category.charAt(0).toUpperCase() + node.category.slice(1)}
                </Badge>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {node.connections.length} connections
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Overview</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {details.overview}
              </p>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Performance Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.keyMetrics.map((metric, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {metric.icon}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {metric.label}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {getTrendIcon(metric.trend)}
                        <span className={`text-sm font-medium ${
                          metric.trend === 'up' ? 'text-green-600' : 
                          metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {metric.value}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Insights</h3>
              <div className="space-y-2">
                {details.insights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Connections */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Network Connections</h3>
              <div className="space-y-3">
                {details.connections.map((connection, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${getImpactColor(connection.impact)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {connection.type}
                      </span>
                      <Badge variant={connection.impact === 'high' ? 'danger' : connection.impact === 'medium' ? 'warning' : 'success'}>
                        {connection.impact} impact
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {connection.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Items */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recommended Actions</h3>
              <div className="space-y-3">
                {details.actionItems.map((action, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <AlertCircle size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary">
            View Related Analytics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NodeDetailModal;