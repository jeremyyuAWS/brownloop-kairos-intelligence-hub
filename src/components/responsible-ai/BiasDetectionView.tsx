import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Eye, TrendingDown, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface BiasMetric {
  attribute: string;
  variance: number;
  threshold: number;
  status: 'pass' | 'warning' | 'fail';
  sampleSize: number;
  description: string;
}

interface BiasReport {
  id: string;
  model: string;
  category: string;
  timestamp: string;
  overallScore: number;
  metrics: BiasMetric[];
  recommendations: string[];
}

const mockBiasReports: BiasReport[] = [
  {
    id: 'br1',
    model: 'Deal Evaluation Model',
    category: 'Investment Analysis',
    timestamp: '2024-01-15 14:30:00',
    overallScore: 92.5,
    metrics: [
      {
        attribute: 'Company Size',
        variance: 2.1,
        threshold: 5.0,
        status: 'pass',
        sampleSize: 1500,
        description: 'Slight variance in deal evaluation scores across company sizes'
      },
      {
        attribute: 'Geographic Region',
        variance: 1.3,
        threshold: 5.0,
        status: 'pass',
        sampleSize: 1500,
        description: 'No significant bias detected in geographic-based deal scoring'
      },
      {
        attribute: 'Industry Sector',
        variance: 7.2,
        threshold: 5.0,
        status: 'warning',
        sampleSize: 1500,
        description: 'Lower evaluation scores detected in certain industry sectors'
      }
    ],
    recommendations: [
      'Review sector evaluation model for potential bias',
      'Increase sample size for underperforming sectors',
      'Implement additional investment scoring constraints'
    ]
  },
  {
    id: 'br2',
    model: 'Portfolio Scoring Agent',
    category: 'Portfolio Management',
    timestamp: '2024-01-15 13:15:00',
    overallScore: 88.1,
    metrics: [
      {
        attribute: 'Company Age',
        variance: 8.7,
        threshold: 5.0,
        status: 'warning',
        sampleSize: 2300,
        description: 'Lower portfolio scores for mature companies detected'
      },
      {
        attribute: 'Investment Size',
        variance: 12.4,
        threshold: 10.0,
        status: 'fail',
        sampleSize: 2300,
        description: 'Bias detected in large investment portfolio scoring'
      },
      {
        attribute: 'Previous Performance',
        variance: 4.1,
        threshold: 5.0,
        status: 'pass',
        sampleSize: 2300,
        description: 'Fair treatment regardless of previous investment performance'
      }
    ],
    recommendations: [
      'Audit large investment portfolio scoring workflow',
      'Implement size-neutral evaluation guidelines',
      'Retrain model with balanced dataset'
    ]
  }
];

const BiasDetectionView: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<BiasReport>(mockBiasReports[0]);
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'warning':
        return <AlertTriangle size={20} className="text-yellow-500" />;
      case 'fail':
        return <AlertTriangle size={20} className="text-red-500" />;
      default:
        return <CheckCircle size={20} className="text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pass':
        return <Badge variant="success">Pass</Badge>;
      case 'warning':
        return <Badge variant="warning">Warning</Badge>;
      case 'fail':
        return <Badge variant="danger">Fail</Badge>;
      default:
        return <Badge variant="default">Unknown</Badge>;
    }
  };

  const getOverallStatus = (score: number) => {
    if (score >= 90) return { label: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 80) return { label: 'Good', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (score >= 70) return { label: 'Fair', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { label: 'Poor', color: 'text-red-600', bg: 'bg-red-100' };
  };

  return (
    <div className="space-y-6">
      {/* Model Selection */}
      <div className="flex flex-wrap gap-3">
        {mockBiasReports.map(report => {
          const status = getOverallStatus(report.overallScore);
          return (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className={`p-4 rounded-lg border transition-colors ${
                selectedReport.id === report.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${status.bg}`} />
                <div className="text-left">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {report.model}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Score: {report.overallScore}% • {report.category}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bias Analysis Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Score */}
        <Card className="p-6">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
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
                  strokeDasharray={`${selectedReport.overallScore * 2.51} 251`}
                  className={getOverallStatus(selectedReport.overallScore).color}
                />
              </svg>
              <span className="absolute text-lg font-bold text-gray-900 dark:text-white">
                {selectedReport.overallScore}%
              </span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
              Overall Bias Score
            </h3>
            <Badge variant={selectedReport.overallScore >= 90 ? 'success' : selectedReport.overallScore >= 80 ? 'warning' : 'danger'}>
              {getOverallStatus(selectedReport.overallScore).label}
            </Badge>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Last scan: {new Date(selectedReport.timestamp).toLocaleString()}
            </p>
          </div>
        </Card>

        {/* Metrics Breakdown */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Bias Metrics Analysis
            </h3>
            <div className="space-y-4">
              {selectedReport.metrics.map((metric, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(metric.status)}
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {metric.attribute}
                      </h4>
                      {getStatusBadge(metric.status)}
                    </div>
                    <button
                      onClick={() => setShowDetails(showDetails === metric.attribute ? null : metric.attribute)}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      <Eye size={16} className="inline mr-1" />
                      {showDetails === metric.attribute ? 'Hide' : 'Details'}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Variance:</span>
                      <div className="flex items-center mt-1">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {metric.variance}%
                        </span>
                        {metric.variance > metric.threshold ? (
                          <TrendingUp size={14} className="ml-1 text-red-500" />
                        ) : (
                          <TrendingDown size={14} className="ml-1 text-green-500" />
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Threshold:</span>
                      <p className="font-medium text-gray-900 dark:text-white mt-1">
                        {metric.threshold}%
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Sample Size:</span>
                      <p className="font-medium text-gray-900 dark:text-white mt-1">
                        {metric.sampleSize.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  {showDetails === metric.attribute && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {metric.description}
                      </p>
                      
                      {/* Visual variance indicator */}
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                          <span>Variance Level</span>
                          <span>{metric.variance}% / {metric.threshold}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              metric.variance > metric.threshold ? 'bg-red-500' : 'bg-green-500'
                            }`}
                            style={{
                              width: `${Math.min((metric.variance / metric.threshold) * 100, 100)}%`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Recommendations */}
      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Recommendations for {selectedReport.model}
        </h3>
        <div className="space-y-3">
          {selectedReport.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-medium mt-0.5">
                {index + 1}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{recommendation}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex space-x-3">
          <Button variant="primary">
            Generate Detailed Report
          </Button>
          <Button variant="outline">
            Schedule Re-scan
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BiasDetectionView;