export const realtimeAlerts = [
  {
    id: 'alert1',
    type: 'critical' as const,
    title: 'Portfolio Performance Alert',
    message: 'TechFlow Solutions EBITDA margin declined 12% below investment committee projections. Immediate operational review recommended with value creation partner engagement.',
    timestamp: '5 minutes ago',
    category: 'Portfolio Risk Management',
    actionRequired: true
  },
  {
    id: 'alert2',
    type: 'warning' as const,
    title: 'Deal Flow Intelligence',
    message: 'Healthcare services deal flow decreased 20% this quarter vs. target pipeline velocity. Enhanced sector-specific sourcing strategy recommended.',
    timestamp: '12 minutes ago',
    category: 'Deal Sourcing',
    actionRequired: false
  },
  {
    id: 'alert6',
    type: 'info' as const,
    title: 'Fund Performance Recognition',
    message: 'Fund II net IRR achieved 21.3% - maintaining top quartile performance vs. 2022 vintage year peer group.',
    timestamp: '6 hours ago',
    category: 'LP Performance',
    actionRequired: false
  },
  {
    id: 'alert7',
    type: 'info' as const,
    title: 'LP Engagement Excellence',
    message: 'Q3 limited partner satisfaction survey achieved 94% positive sentiment across institutional investor base.',
    timestamp: '8 hours ago',
    category: 'LP Relations',
    actionRequired: false
  },
  {
    id: 'alert3',
    type: 'info' as const,
    title: 'Due Diligence Excellence',
    message: 'Weekly deal evaluation metrics: 94% risk identification accuracy achieved across 7 active opportunities.',
    timestamp: '1 hour ago',
    category: 'Due Diligence',
    actionRequired: false
  },
  {
    id: 'alert4',
    type: 'warning' as const,
    title: 'Portfolio Company Risk',
    message: 'DataCorp customer concentration increased to 45% (target: <30%)',
    timestamp: '2 hours ago',
    category: 'Portfolio Risk',
    actionRequired: false
  },
  {
    id: 'alert5',
    type: 'success' as const,
    title: 'Investment Success',
    message: 'HealthTech exit completed at 3.2x multiple - exceeding projections by 28%.',
    timestamp: '4 hours ago',
    category: 'Realizations',
    actionRequired: false
  }
];

export const enhancedChartData = {
  fundPerformance: {
    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024'],
    values: [16.2, 17.8, 19.1, 20.4, 21.3],
    colors: ['#3B82F6']
  },
  portfolioGrowth: {
    labels: ['Healthcare', 'Technology', 'Financial Services', 'Industrial'],
    values: [23.4, 28.7, 19.2, 15.8],
    colors: ['#EF4444', '#F59E0B', '#10B981', '#8B5CF6']
  },
  dealFunnel: {
    labels: ['Initial Screen', 'Management Meeting', 'LOI', 'Closed'],
    values: [247, 89, 23, 7],
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
  },
  sectorAllocation: {
    labels: ['Technology', 'Healthcare', 'Financial Services', 'Industrial'],
    values: [35, 28, 22, 15],
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']
  },
  performanceTrend: {
    labels: ['Fund I', 'Fund II', 'Fund III', 'Industry Median'],
    values: [18.7, 21.3, 19.8, 14.2],
    colors: ['#3B82F6']
  },
  exitDistribution: {
    labels: ['Strategic Sale', 'Financial Buyer', 'IPO', 'Continuation'],
    values: [45, 30, 15, 10],
    colors: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444']
  }
};

export const performanceMetrics = {
  realtime: [
    { label: 'Active Deals', value: 12, trend: 'up', change: 3, unit: '' },
    { label: 'Portfolio Companies', value: 18, trend: 'stable', change: 0, unit: '' },
    { label: 'Fund IRR', value: 21.3, trend: 'up', change: 2.1, unit: '%' },
    { label: 'Portfolio Performance', value: 94, trend: 'up', change: 8, unit: '%' }
  ],
  daily: [
    { label: 'New Opportunities', value: 8, trend: 'up', change: 23, unit: '' },
    { label: 'Deal Analysis Completed', value: 5, trend: 'up', change: 15, unit: '' },
    { label: 'Portfolio Data Updates', value: 247, trend: 'stable', change: 2, unit: '' },
    { label: 'LP Communications', value: 12, trend: 'up', change: 8, unit: '' }
  ],
  weekly: [
    { label: 'Investment Committee Items', value: 3, trend: 'up', change: 2, unit: '' },
    { label: 'Due Diligence Scorecards', value: 7, trend: 'up', change: 4, unit: '' },
    { label: 'Portfolio Company Reviews', value: 18, trend: 'stable', change: 0, unit: '' },
    { label: 'Market Intelligence Reports', value: 23, trend: 'up', change: 12, unit: '' }
  ]
};

export const operationalInsights = [
  {
    title: 'AI Deal Evaluation Success',
    description: 'Deal evaluation time reduced from 8 weeks to 2 weeks with 94% accuracy improvement',
    impact: 'high',
    category: 'Deal Team'
  },
  {
    title: 'Portfolio Reporting Automation',
    description: 'Monthly portfolio reporting automated with 85% time reduction and 96% data accuracy',
    impact: 'high',
    category: 'Portfolio Ops'
  },
  {
    title: 'LP Communication Excellence',
    description: 'Investor relations automation improved LP satisfaction to 94% with 75% efficiency gain',
    impact: 'medium',
    category: 'Investor Relations'
  },
  {
    title: 'Investment Decision Quality',
    description: 'AI-enhanced diligence improved risk identification from 78% to 94% accuracy',
    impact: 'high',
    category: 'Deal Quality'
  },
  {
    title: 'Market Intelligence Automation',
    description: 'Deal sourcing efficiency increased 240% through AI market scanning and relationship mapping',
    impact: 'medium',
    category: 'Business Development'
  },
  {
    title: 'Fund Performance Optimization',
    description: 'Portfolio monitoring enabled proactive value creation with 23% performance improvement',
    impact: 'high',
    category: 'Fund Performance'
  }
];