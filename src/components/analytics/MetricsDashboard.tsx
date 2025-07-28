import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Card from '../ui/Card';
import { MetricData } from '../../types';

interface MetricsDashboardProps {
  metrics: MetricData[];
  title?: string;
  columns?: number;
}

const MetricsDashboard: React.FC<MetricsDashboardProps> = ({
  metrics,
  title,
  columns = 4
}) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-500" />;
      case 'down':
        return <TrendingDown size={16} className="text-red-500" />;
      default:
        return <Minus size={16} className="text-gray-400" />;
    }
  };

  const getTrendColor = (trend: string, isPositive?: boolean) => {
    if (trend === 'stable') return 'text-gray-500';
    
    // For metrics where lower is better (turnover, time to resolution, etc.)
    if (isPositive) {
      return trend === 'up' ? 'text-green-500' : 'text-red-500';
    }
    
    // For metrics where higher is better (satisfaction, efficiency, etc.)
    return trend === 'up' ? 'text-green-500' : 'text-red-500';
  };

  const isPositiveTrend = (label: string, trend: string) => {
    const negativeIndicators = ['turnover', 'time', 'cost', 'ratio', 'expense'];
    const isNegativeMetric = negativeIndicators.some(indicator => 
      label.toLowerCase().includes(indicator)
    );
    
    if (isNegativeMetric) {
      return trend === 'down';
    }
    
    return trend === 'up';
  };

  const gridColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  };

  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
      )}
      
      <div className={`grid gap-5 ${gridColumns[columns as keyof typeof gridColumns] || gridColumns[4]}`}>
        {metrics.map((metric, index) => {
          const isPositive = isPositiveTrend(metric.label, metric.trend);
          
          return (
            <Card key={index} className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {metric.label}
                </h3>
                <div className={`flex items-center space-x-1 ${getTrendColor(metric.trend, isPositive)}`}>
                  {getTrendIcon(metric.trend)}
                  <span className="text-sm font-medium">
                    {metric.change > 0 ? '+' : ''}{metric.change}
                    {metric.unit || '%'}
                  </span>
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">
                    {metric.unit && !metric.unit.includes('%') ? metric.unit : ''}
                  </span>
                </span>
              </div>
              
              {/* Progress bar for visual representation */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                <div
                  className={`h-1 rounded-full transition-all duration-1000 ${
                    isPositive ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  style={{
                    width: `${Math.min(Math.abs(metric.change) * 10, 100)}%`
                  }}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MetricsDashboard;