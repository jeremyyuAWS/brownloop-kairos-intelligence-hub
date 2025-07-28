import React from 'react';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: string;
  category: string;
  actionRequired?: boolean;
}

interface AlertsPanelProps {
  alerts: Alert[];
  onDismiss?: (id: string) => void;
  maxItems?: number;
}

const AlertsPanel: React.FC<AlertsPanelProps> = ({
  alerts,
  onDismiss,
  maxItems = 5
}) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle size={20} className="text-red-500" />;
      case 'warning':
        return <AlertTriangle size={20} className="text-yellow-500" />;
      case 'success':
        return <CheckCircle size={20} className="text-green-500" />;
      default:
        return <Info size={20} className="text-blue-500" />;
    }
  };

  const getAlertBadge = (type: string) => {
    switch (type) {
      case 'critical':
        return <Badge variant="danger">Critical</Badge>;
      case 'warning':
        return <Badge variant="warning">Warning</Badge>;
      case 'success':
        return <Badge variant="success">Success</Badge>;
      default:
        return <Badge variant="info">Info</Badge>;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-l-red-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'success':
        return 'border-l-green-500';
      default:
        return 'border-l-blue-500';
    }
  };

  const displayedAlerts = alerts.slice(0, maxItems);

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Recent Alerts
        </h3>
        <div className="flex space-x-2">
          <Badge variant="danger">{alerts.filter(a => a.type === 'critical').length}</Badge>
          <Badge variant="warning">{alerts.filter(a => a.type === 'warning').length}</Badge>
        </div>
      </div>
      
      <div className="space-y-3">
        {displayedAlerts.length === 0 ? (
          <div className="text-center py-8">
            <CheckCircle size={48} className="mx-auto text-green-500 mb-3" />
            <p className="text-gray-500 dark:text-gray-400">No alerts at this time</p>
          </div>
        ) : (
          displayedAlerts.map(alert => (
            <div
              key={alert.id}
              className={`p-4 border-l-4 bg-gray-50 dark:bg-gray-800 rounded-r-lg ${getBorderColor(alert.type)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {alert.title}
                      </h4>
                      {getAlertBadge(alert.type)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {alert.message}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <span>{alert.category}</span>
                      <span>•</span>
                      <span>{alert.timestamp}</span>
                      {alert.actionRequired && (
                        <>
                          <span>•</span>
                          <span className="text-red-600 dark:text-red-400 font-medium">
                            Action Required
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {onDismiss && (
                  <button
                    onClick={() => onDismiss(alert.id)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      
      {alerts.length > maxItems && (
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            View all {alerts.length} alerts
          </button>
        </div>
      )}
    </Card>
  );
};

export default AlertsPanel;