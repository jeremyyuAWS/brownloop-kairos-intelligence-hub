import React, { useState } from 'react';
import { BarChart, TrendingUp, AlertTriangle, FileText, DollarSign, Info, Search, Activity, Eye, RefreshCw } from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import InfoModal from '../ui/InfoModal';
import Button from '../ui/Button';
import MetricsDashboard from '../analytics/MetricsDashboard';
import DashboardChart from '../analytics/DashboardChart';
import AlertsPanel from '../analytics/AlertsPanel';
import { analyticsMetrics } from '../../data/analyticsData';
import { realtimeAlerts, enhancedChartData, performanceMetrics, operationalInsights } from '../../data/enhancedAnalyticsData';

const AnalyticsTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('overview');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [timeRange, setTimeRange] = useState('7d');
  
  const subTabs = [
    { id: 'overview', label: 'Fund Overview', icon: Activity },
    { id: 'dealteam', label: 'Deal Team Analytics', icon: FileText },
    { id: 'portfolio', label: 'Portfolio Performance', icon: TrendingUp },
    { id: 'investor', label: 'Investor Relations', icon: BarChart },
    { id: 'finance', label: 'Finance Analytics', icon: DollarSign },
    { id: 'bizdev', label: 'Business Development', icon: Eye }
  ];

  const timeRanges = [
    { id: '1h', label: '1 Hour' },
    { id: '24h', label: '24 Hours' },
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' }
  ];
  
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.realtime.map((metric, index) => (
          <Card key={index} className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.label}
              </h3>
              <div className={`text-xs px-2 py-1 rounded-full ${
                metric.trend === 'up' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                metric.trend === 'down' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
              }`}>
                {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit || '%'}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {typeof metric.value === 'number' && metric.value > 1000 
                ? metric.value.toLocaleString() 
                : metric.value}
              {metric.unit && !metric.unit.includes('%') && !metric.unit.includes('$') && (
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">
                  {metric.unit}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart
          title="Fund Performance Trend"
          type="line"
          data={enhancedChartData.fundPerformance}
          height={300}
        />
        <DashboardChart
          title="Portfolio Allocation by Sector"
          type="doughnut"
          data={enhancedChartData.sectorAllocation}
          height={300}
        />
      </div>

      {/* Alerts and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsPanel alerts={realtimeAlerts} maxItems={4} />
        
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Operational Insights
          </h3>
          <div className="space-y-4">
            {operationalInsights.map((insight, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {insight.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    insight.impact === 'high' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {insight.impact} impact
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {insight.description}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {insight.category}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
  
  const renderContentAnalytics = () => (
    <div className="space-y-6">
      <MetricsDashboard metrics={analyticsMetrics.dealTeam} columns={4} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart
          title="Deal Analysis Performance"
          type="bar"
          data={enhancedChartData.fundPerformance}
          height={300}
        />
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Deal Team Performance Insights
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div>
                <h4 className="font-medium text-green-800 dark:text-green-300">Deal Evaluation Excellence</h4>
                <p className="text-sm text-green-600 dark:text-green-400">AI analysis driving 75% faster deal evaluation</p>
              </div>
              <TrendingUp size={20} className="text-green-600 dark:text-green-400" />
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-300">Diligence Quality</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">AI enhanced risk identification by 94%</p>
              </div>
              <BarChart size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div>
                <h4 className="font-medium text-purple-800 dark:text-purple-300">IC Memo Quality</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">4.8/5 average quality score achieved</p>
              </div>
              <BarChart size={20} className="text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
  
  const renderCampaignAnalytics = () => (
    <div className="space-y-6">
      <MetricsDashboard metrics={analyticsMetrics.portfolioOps} columns={4} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DashboardChart
            title="Portfolio Performance by Sector"
            type="bar"
            data={enhancedChartData.portfolioGrowth}
            height={350}
          />
        </div>
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Portfolio Metrics
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">21.3%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Net IRR</div>
              <div className="text-sm text-green-600 dark:text-green-400">+2.1% vs benchmark</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Top Quartile Performance</span>
                <span className="font-medium">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Portfolio Companies</span>
                <span className="font-medium">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">TVPI Multiple</span>
                <span className="font-medium">2.1x</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
  
  const renderABMAnalytics = () => (
    <div className="space-y-6">
      <MetricsDashboard metrics={analyticsMetrics.investorRelations} columns={4} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            LP Satisfaction by Region
          </h3>
          <div className="space-y-3">
            {['North America', 'Europe', 'Asia Pacific', 'Other'].map((label, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{label}</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {[94, 91, 89, 87][index]}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${([94, 91, 89, 87][index] / 94) * 100}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            LP Relations Performance
          </h3>
          <div className="space-y-3">
            <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-300">Communication Excellence</h4>
              <p className="text-sm text-green-600 dark:text-green-400">94% LP satisfaction with quarterly reports</p>
            </div>
            <div className="p-3 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-300">Response Efficiency</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">75% faster response times achieved</p>
            </div>
            <div className="p-3 border border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <h4 className="font-medium text-purple-800 dark:text-purple-300">Fund Raising Success</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">$450M raised with enhanced materials</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
  
  const renderSocialAnalytics = () => (
    <div className="space-y-6">
      <MetricsDashboard metrics={analyticsMetrics.finance} columns={4} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart
          title="Valuation Analysis Distribution"
          type="doughnut"
          data={enhancedChartData.sectorAllocation}
          height={300}
        />
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Finance Team Performance
          </h3>
          <div className="space-y-4">
            <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-300">Valuation Analysis</h4>
              <p className="text-2xl font-bold text-green-900 dark:text-green-200">23</p>
              <p className="text-sm text-green-600 dark:text-green-400">Analyses completed this month</p>
            </div>
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-300">Analysis Accuracy</h4>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-200">92%</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">Comparable analysis accuracy</p>
            </div>
            <div className="border border-purple-200 dark:border-purple-800 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20">
              <h4 className="font-medium text-purple-800 dark:text-purple-300">Time Efficiency</h4>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-200">80%</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">Time reduction achieved</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
  
  const renderLeadGenAnalytics = () => (
    <div className="space-y-6">
      <MetricsDashboard metrics={analyticsMetrics.businessDev} columns={4} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DashboardChart
            title="Deal Sourcing Performance"
            type="line"
            data={enhancedChartData.dealFunnel}
            height={350}
          />
        </div>
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Deal Sourcing Projections
          </h3>
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">89</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Q4 Projected Deals</div>
              <div className="text-sm text-green-600 dark:text-green-400">34% increase from Q3</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Investment Banking</span>
                <span className="font-medium">34</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Direct Outreach</span>
                <span className="font-medium">28</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Network Referrals</span>
                <span className="font-medium">27</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case 'overview':
        return renderOverview();
      case 'dealteam':
        return renderContentAnalytics();
      case 'portfolio':
        return renderCampaignAnalytics();
      case 'investor':
        return renderABMAnalytics();
      case 'finance':
        return renderSocialAnalytics();
      case 'bizdev':
        return renderLeadGenAnalytics();
      default:
        return renderOverview();
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Kairos Analytics Command Center</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Enterprise intelligence across all private equity operations powered by Brownloop Kairos
            </p>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Info size={20} />
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Time Range Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Time Range:</span>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="text-sm border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              {timeRanges.map(range => (
                <option key={range.id} value={range.id}>{range.label}</option>
              ))}
            </select>
          </div>
          
          <Button variant="outline" size="sm" icon={<RefreshCw size={16} />}>
            Refresh
          </Button>
          
          <div className="w-64">
            <Input 
              placeholder="Search fund analytics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
              icon={<Search size={16} />}
            />
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="flex space-x-6 overflow-x-auto">
          {subTabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`
                  flex items-center py-3 px-1 font-medium text-sm border-b-2 transition-colors whitespace-nowrap
                  ${activeSubTab === tab.id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
                `}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      
      <div>
        {renderSubTabContent()}
      </div>
      
      <InfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title="Private Equity Analytics Command Center"
        content={
          <div className="space-y-4">
            <p>The Private Equity Analytics Command Center provides comprehensive insights across all PE operations with AI-powered analysis and real-time monitoring.</p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Fund Performance Dashboard</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Real-time KPIs, alerts, and investment insights across all funds and portfolio companies.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Deal Team Analytics</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Deal evaluation speed, diligence quality, and investment decision tracking across all opportunities.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Portfolio Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Portfolio company monitoring, value creation tracking, and operational metrics across investments.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Investor Relations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">LP satisfaction tracking, communication effectiveness, and fundraising performance analysis.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Finance Analytics</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Valuation analysis, comparable studies, and financial modeling performance tracking.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Business Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Deal sourcing effectiveness, pipeline conversion, and relationship mapping analytics.</p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default AnalyticsTab;