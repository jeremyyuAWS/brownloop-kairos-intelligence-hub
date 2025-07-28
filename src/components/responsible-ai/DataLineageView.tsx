import React, { useState } from 'react';
import { ChevronRight, Database, Cpu, FileText, Users } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'manual';
  status: 'active' | 'inactive' | 'warning';
  lastUpdated: string;
  recordCount?: number;
}

interface ProcessingStep {
  id: string;
  name: string;
  type: 'transformation' | 'validation' | 'enrichment' | 'aggregation';
  duration: number;
  status: 'completed' | 'running' | 'failed';
}

interface DataLineage {
  id: string;
  name: string;
  sources: DataSource[];
  processing: ProcessingStep[];
  outputs: string[];
  agent: string;
  confidence: number;
}

const mockLineages: DataLineage[] = [
  {
    id: 'dl1',
    name: 'Investment Performance Assessment',
    sources: [
      { id: 'ds1', name: 'Portfolio Database', type: 'database', status: 'active', lastUpdated: '2 min ago', recordCount: 125000 },
      { id: 'ds2', name: 'Company Financial Data', type: 'database', status: 'active', lastUpdated: '5 min ago', recordCount: 45000 },
      { id: 'ds3', name: 'Market Data API', type: 'api', status: 'warning', lastUpdated: '1 hour ago' }
    ],
    processing: [
      { id: 'ps1', name: 'Data Validation', type: 'validation', duration: 120, status: 'completed' },
      { id: 'ps2', name: 'Performance Score Calculation', type: 'transformation', duration: 340, status: 'completed' },
      { id: 'ps3', name: 'Investment Performance Analysis', type: 'enrichment', duration: 180, status: 'running' }
    ],
    outputs: ['Performance Score', 'Investment Probability', 'Portfolio Recommendation'],
    agent: 'Portfolio Performance Agent',
    confidence: 94.2
  },
  {
    id: 'dl2',
    name: 'Deal Evaluation Decision',
    sources: [
      { id: 'ds4', name: 'Deal Data', type: 'file', status: 'active', lastUpdated: '30 sec ago' },
      { id: 'ds5', name: 'Market Intelligence API', type: 'api', status: 'active', lastUpdated: '1 min ago' },
      { id: 'ds6', name: 'Comparable Database', type: 'database', status: 'active', lastUpdated: '3 min ago', recordCount: 89000 }
    ],
    processing: [
      { id: 'ps4', name: 'Deal Score Analysis', type: 'transformation', duration: 95, status: 'completed' },
      { id: 'ps5', name: 'Investment Optimization', type: 'aggregation', duration: 450, status: 'completed' }
    ],
    outputs: ['Investment Decision', 'Valuation Recommendation', 'Deal Parameters'],
    agent: 'Deal Evaluation Assistant',
    confidence: 89.7
  }
];

const DataLineageView: React.FC = () => {
  const [selectedLineage, setSelectedLineage] = useState<DataLineage | null>(null);

  const getSourceIcon = (type: string) => {
    switch (type) {
      case 'database':
        return <Database size={16} className="text-blue-500" />;
      case 'api':
        return <Cpu size={16} className="text-green-500" />;
      case 'file':
        return <FileText size={16} className="text-purple-500" />;
      default:
        return <Users size={16} className="text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success">Active</Badge>;
      case 'warning':
        return <Badge variant="warning">Warning</Badge>;
      default:
        return <Badge variant="danger">Inactive</Badge>;
    }
  };

  const getProcessingStatus = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      case 'running':
        return <Badge variant="info">Running</Badge>;
      default:
        return <Badge variant="danger">Failed</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lineage List */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Active PE Data Lineages
            </h3>
            <div className="space-y-3">
              {mockLineages.map(lineage => (
                <button
                  key={lineage.id}
                  onClick={() => setSelectedLineage(lineage)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedLineage?.id === lineage.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {lineage.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {lineage.agent}
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Confidence: {lineage.confidence}%
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {lineage.sources.length} sources
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Lineage Details */}
        <div className="lg:col-span-2">
          {selectedLineage ? (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {selectedLineage.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Confidence Score:
                  </span>
                  <Badge variant="success">{selectedLineage.confidence}%</Badge>
                </div>
              </div>

              {/* Data Sources */}
              <div className="mb-6">
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
                  PE Investment Data Sources
                </h4>
                <div className="space-y-3">
                  {selectedLineage.sources.map(source => (
                    <div
                      key={source.id}
                      className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {getSourceIcon(source.type)}
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white">
                            {source.name}
                          </h5>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Last updated: {source.lastUpdated}
                            {source.recordCount && ` • ${source.recordCount.toLocaleString()} records`}
                          </p>
                        </div>
                      </div>
                      {getStatusBadge(source.status)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Processing Steps */}
              <div className="mb-6">
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
                  PE Processing Pipeline
                </h4>
                <div className="space-y-3">
                  {selectedLineage.processing.map((step, index) => (
                    <div key={step.id} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1 flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white">
                            {step.name}
                          </h5>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Duration: {step.duration}ms • Type: {step.type}
                          </p>
                        </div>
                        {getProcessingStatus(step.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
                  PE Output Artifacts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLineage.outputs.map((output, index) => (
                    <Badge key={index} variant="info">
                      {output}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-12 text-center">
              <Database size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Select a PE Data Lineage
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Choose a lineage from the list to view detailed PE data flow and processing steps.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataLineageView;