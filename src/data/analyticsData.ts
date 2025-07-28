import { MetricData } from '../types';

export const analyticsMetrics = {
  dealTeam: [
    { label: 'Deal Analysis Speed', value: 2.3, trend: 'down', change: 75, unit: 'days' },
    { label: 'Diligence Accuracy', value: 94, trend: 'up', change: 18, unit: '%' },
    { label: 'IC Memo Quality', value: 4.8, trend: 'up', change: 23, unit: '/5' },
    { label: 'Risk Identification', value: 92, trend: 'up', change: 15, unit: '%' }
  ] as MetricData[],
  
  portfolioOps: [
    { label: 'Reporting Efficiency', value: 85, trend: 'up', change: 85, unit: '%' },
    { label: 'Data Accuracy', value: 96, trend: 'up', change: 12, unit: '%' },
    { label: 'Portfolio Visibility', value: 94, trend: 'up', change: 240, unit: '%' },
    { label: 'Value Creation Tracking', value: 89, trend: 'up', change: 156, unit: '%' }
  ] as MetricData[],
  
  investorRelations: [
    { label: 'LP Satisfaction', value: 94, trend: 'up', change: 12, unit: '%' },
    { label: 'Report Generation Time', value: 30, trend: 'down', change: 75, unit: 'hours' },
    { label: 'DDQ Response Speed', value: 6, trend: 'down', change: 80, unit: 'hours' },
    { label: 'Communication Quality', value: 4.7, trend: 'up', change: 18, unit: '/5' }
  ] as MetricData[],
  
  finance: [
    { label: 'Valuation Analysis Time', value: 1, trend: 'down', change: 80, unit: 'days' },
    { label: 'Comparable Accuracy', value: 92, trend: 'up', change: 15, unit: '%' },
    { label: 'Cash Flow Forecast Precision', value: 89, trend: 'up', change: 23, unit: '%' },
    { label: 'NAV Calculation Efficiency', value: 94, trend: 'up', change: 67, unit: '%' }
  ] as MetricData[],
  
  businessDev: [
    { label: 'Deal Sourcing Efficiency', value: 340, trend: 'up', change: 89, unit: '%' },
    { label: 'Outreach Response Rate', value: 23, trend: 'up', change: 67, unit: '%' },
    { label: 'Pipeline Conversion', value: 18, trend: 'up', change: 45, unit: '%' },
    { label: 'Relationship Mapping', value: 156, trend: 'up', change: 234, unit: 'connections' }
  ] as MetricData[]
};