import { OGINode, OGILink, MetricData } from '../types';

// Enhanced knowledge graph nodes with richer data
export const ogiNodes: OGINode[] = [
  { 
    id: 'n1', 
    label: 'Investment Mandates', 
    category: 'policy',
    size: 35, 
    connections: ['n2', 'n8', 'n12', 'n5']
  },
  { 
    id: 'n2', 
    label: 'Deal Sourcing Strategy', 
    category: 'policy', 
    size: 40, 
    connections: ['n1', 'n3', 'n6', 'n8'] 
  },
  { 
    id: 'n3', 
    label: 'Due Diligence Process', 
    category: 'process', 
    size: 45, 
    connections: ['n2', 'n5', 'n7', 'n11', 'n13'] 
  },
  { 
    id: 'n4', 
    label: 'Portfolio Performance', 
    category: 'process', 
    size: 42, 
    connections: ['n5', 'n9', 'n10', 'n15'] 
  },
  { 
    id: 'n5', 
    label: 'Value Creation', 
    category: 'metric', 
    size: 50, 
    connections: ['n3', 'n4', 'n7', 'n13', 'n1'] 
  },
  { 
    id: 'n6', 
    label: 'Deal Flow Management', 
    category: 'process', 
    size: 38, 
    connections: ['n2', 'n10', 'n14', 'n9'] 
  },
  { 
    id: 'n7', 
    label: 'Investment Returns', 
    category: 'concept', 
    size: 44, 
    connections: ['n3', 'n5', 'n15', 'n1'] 
  },
  { 
    id: 'n8', 
    label: 'LP Relations Strategy', 
    category: 'policy', 
    size: 32, 
    connections: ['n1', 'n6', 'n14', 'n2'] 
  },
  { 
    id: 'n9', 
    label: 'Portfolio Monitoring', 
    category: 'process', 
    size: 36, 
    connections: ['n4', 'n10', 'n15', 'n6'] 
  },
  { 
    id: 'n10', 
    label: 'Performance Tracking', 
    category: 'process', 
    size: 30, 
    connections: ['n4', 'n6', 'n9'] 
  },
  { 
    id: 'n11', 
    label: 'Investor Communications', 
    category: 'process', 
    size: 25, 
    connections: ['n3', 'n13'] 
  },
  { 
    id: 'n12', 
    label: 'Market Intelligence', 
    category: 'policy', 
    size: 28, 
    connections: ['n1', 'n2'] 
  },
  { 
    id: 'n13', 
    label: 'Investment Lifecycle', 
    category: 'concept', 
    size: 33, 
    connections: ['n5', 'n11', 'n3'] 
  },
  { 
    id: 'n14', 
    label: 'Deal Process Automation', 
    category: 'process', 
    size: 34, 
    connections: ['n6', 'n8'] 
  },
  { 
    id: 'n15', 
    label: 'Investment Analysis', 
    category: 'process', 
    size: 39, 
    connections: ['n7', 'n9', 'n4'] 
  }
];

// PE investment relationships with varying strengths
export const ogiLinks: OGILink[] = [
  // Strong connections (primary PE relationships)
  { source: 'n1', target: 'n2', strength: 0.9 }, // Investment Mandates → Deal Sourcing Strategy
  { source: 'n3', target: 'n5', strength: 0.8 }, // Due Diligence Process → Value Creation
  { source: 'n4', target: 'n5', strength: 0.7 }, // Portfolio Performance → Value Creation
  { source: 'n5', target: 'n7', strength: 0.8 }, // Value Creation → Investment Returns
  { source: 'n6', target: 'n14', strength: 0.9 }, // Deal Flow Management → Deal Process Automation
  
  // Medium connections (secondary PE relationships)
  { source: 'n1', target: 'n5', strength: 0.6 }, // Investment Mandates → Value Creation
  { source: 'n2', target: 'n3', strength: 0.5 }, // Deal Sourcing Strategy → Due Diligence Process
  { source: 'n3', target: 'n7', strength: 0.7 }, // Due Diligence Process → Investment Returns
  { source: 'n4', target: 'n9', strength: 0.6 }, // Portfolio Performance → Portfolio Monitoring
  { source: 'n6', target: 'n10', strength: 0.6 }, // Deal Flow Management → Performance Tracking
  { source: 'n8', target: 'n14', strength: 0.5 }, // LP Relations Strategy → Deal Process Automation
  { source: 'n9', target: 'n15', strength: 0.7 }, // Portfolio Monitoring → Investment Analysis
  
  // Weaker connections (tertiary PE relationships)
  { source: 'n1', target: 'n8', strength: 0.4 }, // Investment Mandates → LP Relations Strategy
  { source: 'n2', target: 'n8', strength: 0.4 }, // Deal Sourcing Strategy → LP Relations Strategy
  { source: 'n3', target: 'n11', strength: 0.3 }, // Due Diligence Process → Investor Communications
  { source: 'n3', target: 'n13', strength: 0.4 }, // Due Diligence Process → Investment Lifecycle
  { source: 'n4', target: 'n10', strength: 0.5 }, // Portfolio Performance → Performance Tracking
  { source: 'n5', target: 'n13', strength: 0.4 }, // Value Creation → Investment Lifecycle
  { source: 'n7', target: 'n15', strength: 0.5 }, // Investment Returns → Investment Analysis
  { source: 'n9', target: 'n10', strength: 0.6 }, // Portfolio Monitoring → Performance Tracking
  { source: 'n11', target: 'n13', strength: 0.4 }, // Investor Communications → Investment Lifecycle
  { source: 'n12', target: 'n1', strength: 0.6 }, // Market Intelligence → Investment Mandates
  { source: 'n12', target: 'n2', strength: 0.5 }, // Market Intelligence → Deal Sourcing Strategy
  { source: 'n15', target: 'n4', strength: 0.5 }  // Investment Analysis → Portfolio Performance
];

// Simulated PE metrics
const peMetrics: MetricData[] = [
  { label: 'Fund IRR', value: 18.3, trend: 'up', change: 2.1, unit: '%' },
  { label: 'Portfolio EBITDA Growth', value: 24, trend: 'up', change: 6, unit: '%' },
  { label: 'Deal Analysis Time', value: 3.2, trend: 'down', change: 65, unit: 'days' },
  { label: 'Due Diligence Accuracy', value: 92, trend: 'up', change: 8, unit: '%' },
  { label: 'LP Satisfaction', value: 89, trend: 'up', change: 12, unit: '%' },
  { label: 'Investment TVPI', value: 2.1, trend: 'up', change: 0.4, unit: 'x' }
];

// Enhanced chat messages with more context
export const chatHistory = [
  { 
    id: '1', 
    sender: 'user', 
    text: 'What\'s driving our improved fund performance this quarter?', 
    timestamp: new Date(Date.now() - 3600000) 
  },
  { 
    id: '2', 
    sender: 'assistant', 
    text: 'Fund performance has improved significantly to 18.3% IRR (+2.1 points). Key drivers include: AI-enhanced due diligence (85% accuracy improvement), automated portfolio monitoring, and optimized value creation tracking. The correlation analysis shows AI-powered deal analysis has the strongest positive impact.', 
    timestamp: new Date(Date.now() - 3590000),
    attachments: [
      {
        type: 'chart',
        data: {
          type: 'bar',
          labels: ['AI Due Diligence', 'Portfolio Monitoring', 'Deal Sourcing', 'Value Creation', 'LP Relations'],
          values: [0.9, 0.7, 0.6, 0.5, 0.4]
        }
      }
    ]
  },
  { 
    id: '3', 
    sender: 'user', 
    text: 'How is our fund performing compared to industry benchmarks?', 
    timestamp: new Date(Date.now() - 3500000) 
  },
  { 
    id: '4', 
    sender: 'assistant', 
    text: 'Our fund is performing above industry averages. Net IRR of 18.3% vs industry median of 14.2% for our vintage year. TVPI of 2.1x vs peer median of 1.6x. Portfolio company value creation has increased 45% since AI implementation. Overall investment accuracy scores are 4.3/5, significantly higher than the industry average of 3.1/5.', 
    timestamp: new Date(Date.now() - 3490000),
    attachments: [
      {
        type: 'chart',
        data: {
          type: 'pie',
          labels: ['Excellent (4.5-5.0)', 'Good (3.5-4.4)', 'Fair (2.5-3.4)', 'Needs Improvement (<2.5)'],
          values: [52, 38, 8, 2]
        }
      }
    ]
  },
  { 
    id: '5', 
    sender: 'user', 
    text: 'Show me the network connections between portfolio performance and value creation', 
    timestamp: new Date(Date.now() - 3400000) 
  },
  { 
    id: '6', 
    sender: 'assistant', 
    text: 'Portfolio performance has strong connections to value creation initiatives (0.8 correlation) and investment analysis quality (0.7 correlation). 91% of top-performing portfolio companies in the past year had active value creation programs, compared to 45% industry average. The system effectively identifies investments that drive returns and creates clear value creation strategies.', 
    timestamp: new Date(Date.now() - 3390000),
    attachments: [
      {
        type: 'table',
        data: {
          title: 'Portfolio Performance Impact Analysis',
          headers: ['Investment Rating', 'Value Creation', 'IRR Performance', 'Multiple Score'],
          rows: [
            ['Excellent (4.5-5.0)', '91%', '25.2% IRR', '3.8x TVPI'],
            ['Good (3.5-4.4)', '67%', '18.7% IRR', '2.4x TVPI'],
            ['Satisfactory (2.5-3.4)', '23%', '12.1% IRR', '1.6x TVPI'],
            ['Needs Improvement (<2.5)', '8%', '6.3% IRR', '1.1x TVPI']
          ]
        }
      }
    ]
  }
] as ChatMessage[];