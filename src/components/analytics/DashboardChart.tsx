import React from 'react';
import Card from '../ui/Card';

interface ChartData {
  labels: string[];
  values: number[];
  colors?: string[];
}

interface DashboardChartProps {
  title: string;
  type: 'bar' | 'line' | 'doughnut' | 'area';
  data: ChartData;
  height?: number;
  showLegend?: boolean;
  className?: string;
}

const DashboardChart: React.FC<DashboardChartProps> = ({
  title,
  type,
  data,
  height = 300,
  showLegend = true,
  className = ''
}) => {
  const { labels, values, colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'] } = data;
  const maxValue = Math.max(...values);

  const renderBarChart = () => (
    <div className="space-y-3">
      {labels.map((label, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">{label}</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {values[index]?.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="h-3 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${(values[index] / maxValue) * 100}%`,
                backgroundColor: colors[index % colors.length]
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderLineChart = () => {
    const points = values.map((value, index) => ({
      x: (index / (values.length - 1)) * 100,
      y: 100 - (value / maxValue) * 80
    }));

    const pathData = points.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`);
    }, '');

    return (
      <div className="relative">
        <svg className="w-full" style={{ height: height - 100 }} viewBox="0 0 100 100">
          {/* Grid lines */}
          {[20, 40, 60, 80].map(y => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gray-300 dark:text-gray-600"
            />
          ))}
          
          {/* Area under curve */}
          <path
            d={`${pathData} L 100 100 L 0 100 Z`}
            fill={`${colors[0]}20`}
            className="transition-all duration-1000"
          />
          
          {/* Line */}
          <path
            d={pathData}
            fill="none"
            stroke={colors[0]}
            strokeWidth="2"
            className="transition-all duration-1000"
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="2"
              fill={colors[0]}
              className="transition-all duration-1000"
            />
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
          {labels.map(label => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    );
  };

  const renderDoughnutChart = () => {
    const total = values.reduce((sum, value) => sum + value, 0);
    let currentAngle = 0;
    const radius = 40;
    const centerX = 50;
    const centerY = 50;

    return (
      <div className="flex items-center space-x-6">
        <div className="relative">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            {values.map((value, index) => {
              const percentage = value / total;
              const angle = percentage * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              
              const x1 = centerX + radius * Math.cos((startAngle - 90) * Math.PI / 180);
              const y1 = centerY + radius * Math.sin((startAngle - 90) * Math.PI / 180);
              const x2 = centerX + radius * Math.cos((endAngle - 90) * Math.PI / 180);
              const y2 = centerY + radius * Math.sin((endAngle - 90) * Math.PI / 180);
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const pathData = [
                `M ${centerX} ${centerY}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ');
              
              currentAngle += angle;
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={colors[index % colors.length]}
                  className="transition-all duration-1000"
                />
              );
            })}
            
            {/* Center circle */}
            <circle
              cx={centerX}
              cy={centerY}
              r="20"
              fill="white"
              className="dark:fill-gray-800"
            />
            
            {/* Total in center */}
            <text
              x={centerX}
              y={centerY + 2}
              textAnchor="middle"
              className="text-xs font-semibold fill-gray-900 dark:fill-white"
            >
              {total.toLocaleString()}
            </text>
          </svg>
        </div>
        
        {showLegend && (
          <div className="space-y-2">
            {labels.map((label, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {((values[index] / total) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return renderBarChart();
      case 'line':
      case 'area':
        return renderLineChart();
      case 'doughnut':
        return renderDoughnutChart();
      default:
        return renderBarChart();
    }
  };

  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h3>
      <div style={{ minHeight: height - 100 }}>
        {renderChart()}
      </div>
    </Card>
  );
};

export default DashboardChart;