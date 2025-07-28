import type { ConversationStep } from './index';

export const peConversations: Record<string, Record<string, ConversationStep[]>> = {
  // Deal-Team Agents (Deal 360)
  'cim-teaser-summarizer': {
    'healthcare-services-deal': [
      {
        sender: 'user',
        message: 'I need you to analyze this 127-page CIM for MedCare Partners, a healthcare services platform generating $45M EBITDA, and provide executive-level investment highlights with risk assessment.',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🎯 ENTERPRISE CIM INTELLIGENCE ACTIVATED: Processing 127-page confidential memorandum using advanced NLP extraction and financial modeling algorithms.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**EXECUTIVE INVESTMENT SUMMARY - MEDCARE PARTNERS:**\n\n🏥 **BUSINESS MODEL:** Healthcare services consolidator with asset-light operations\n💰 **FINANCIAL PROFILE:** $200M revenue, $45M EBITDA (22.5% margin), 15% revenue CAGR\n📊 **REVENUE QUALITY:** 78% recurring, 67% government payer mix, defensive characteristics\n🎯 **COMPETITIVE POSITION:** #2 market share in fragmented $8.2B TAM with regulatory moats\n💡 **INVESTMENT THESIS:** Platform for disciplined M&A with 15% EBITDA margin expansion through operational excellence\n⚠️ **KEY RISKS:** Regulatory exposure (CMS reimbursement), management depth, integration complexity',
        delay: 2500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'MedCare Partners Investment Analytics',
            metrics: [
              { label: 'Revenue Predictability', value: '78%', trend: 'up', change: 12 },
              { label: 'EBITDA Margin', value: '22.5%', trend: 'up', change: 320 },
              { label: 'Market Share', value: '18%', trend: 'up', change: 2 },
              { label: 'Acquisition Pipeline', value: '23 targets', trend: 'up', change: 150 }
            ]
          }
        }]
      },
      {
        sender: 'user',
        message: 'What\'s your confidence in the management team and their ability to execute the consolidation strategy?',
        delay: 1500
      },
      {
        sender: 'agent',
        message: '**MANAGEMENT TEAM ASSESSMENT:**\n\n👨‍💼 **LEADERSHIP QUALITY:** CEO (8 years experience), strong operational track record with 3 successful integrations\n📈 **EXECUTION CAPABILITY:** Demonstrated M&A expertise, integrated $67M in acquisitions over 24 months\n⚠️ **KEY PERSON RISK:** 65% of strategic decisions centralized through CEO, limited succession planning\n🎯 **CONSOLIDATION READINESS:** Proven integration playbook, dedicated M&A team, strong cultural assimilation\n📊 **RECOMMENDATION:** Experienced team with operational excellence, consider adding independent board members for governance',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Management Team Risk Assessment',
            items: [
              { label: 'Operational Execution', value: '9/10 - Strong track record', percentage: 90 },
              { label: 'M&A Experience', value: '8/10 - 3 successful deals', percentage: 80 },
              { label: 'Succession Planning', value: '4/10 - Limited depth', percentage: 40 },
              { label: 'Strategic Vision', value: '8/10 - Clear roadmap', percentage: 80 }
            ]
          }
        }]
      }
    ],
    'tech-saas-summary': [
      {
        sender: 'user',
        message: 'Summarize this B2B SaaS company teaser with focus on key metrics and growth drivers',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '💻 B2B SAAS TEASER ANALYSIS: Extracting key investment metrics and growth catalysts from teaser document.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**SAAS COMPANY TEASER SUMMARY:**\n\n🚀 **Business Model:** Workflow automation platform for financial services\n📊 **Key Metrics:** $25M ARR, 89% gross margins, 115% net revenue retention\n👥 **Customer Base:** 340 enterprise clients, average ACV $73K\n📈 **Growth Drivers:** Product expansion, international expansion, vertical penetration\n💡 **Competitive Moat:** 18-month implementation creates switching costs',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'SaaS Investment Metrics Analysis',
            items: [
              { label: 'ARR Growth Rate', value: '67% YoY', percentage: 85 },
              { label: 'Gross Margin', value: '89%', percentage: 89 },
              { label: 'Net Retention', value: '115%', percentage: 92 },
              { label: 'Customer Concentration', value: 'Top 10: 34%', percentage: 66 }
            ]
          }
        }]
      }
    ]
  },

  'company-profile-builder': {
    'fintech-platform-profile': [
      {
        sender: 'user',
        message: 'Build comprehensive company profile for PaymentFlow, a B2B payments platform we\'re evaluating',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🏦 FINTECH COMPANY PROFILING: Aggregating market data, financial performance, and competitive positioning for PaymentFlow.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**PAYMENTFLOW COMPANY PROFILE:**\n\n💳 **Market Position:** B2B payments platform, $150B addressable market\n📊 **Financial Profile:** $85M revenue, $23M EBITDA, 67% gross margins\n🎯 **Customer Segments:** SMB (45%), Mid-market (35%), Enterprise (20%)\n🏆 **Competitive Advantages:** API-first architecture, 99.97% uptime, integrated accounting\n⚡ **Key Risks:** Customer concentration, regulatory changes, competitive pressure',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'PaymentFlow Competitive Analysis',
            headers: ['Metric', 'PaymentFlow', 'Competitor A', 'Competitor B', 'Market Leader'],
            rows: [
              ['Market Share', '3.2%', '2.8%', '4.1%', '23.5%'],
              ['Take Rate', '2.9%', '3.1%', '2.7%', '2.8%'],
              ['Customer Count', '12,500', '9,800', '15,200', '245,000'],
              ['Retention Rate', '94%', '89%', '91%', '96%']
            ]
          }
        }]
      }
    ]
  },

  'diligence-scorecard': {
    'manufacturing-acquisition': [
      {
        sender: 'user',
        message: 'Create diligence scorecard for $175M manufacturing acquisition with environmental compliance complexity',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🏭 MANUFACTURING DILIGENCE SCORECARD: Evaluating acquisition across 12 risk dimensions with regulatory focus.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**MANUFACTURING ACQUISITION SCORECARD:**\n\n📊 **Overall Score:** 7.4/10 (Proceed with conditions)\n\n**Detailed Assessment:**\n✅ **Market Position:** 9/10 - Industry leader with moats\n✅ **Financial Performance:** 8/10 - Strong margins and cash flow\n⚠️ **Environmental Compliance:** 5/10 - Legacy issues requiring remediation\n⚠️ **Management Team:** 6/10 - Key person risk with CEO\n✅ **Technology/Operations:** 8/10 - Modern equipment and processes',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Diligence Risk Assessment Breakdown',
            items: [
              { label: 'Market & Competition', value: '9/10', percentage: 90 },
              { label: 'Financial Quality', value: '8/10', percentage: 80 },
              { label: 'Management Team', value: '6/10', percentage: 60 },
              { label: 'Environmental/Regulatory', value: '5/10', percentage: 50 },
              { label: 'Technology & Operations', value: '8/10', percentage: 80 }
            ]
          }
        }]
      }
    ]
  },

  'ic-memo-generator': {
    'series-b-investment': [
      {
        sender: 'user',
        message: 'Generate IC memo for $25M Series B investment in cybersecurity software company',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '💼 IC MEMO GENERATION: Creating comprehensive investment committee memorandum for cybersecurity Series B opportunity.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**INVESTMENT COMMITTEE MEMORANDUM - CYBERSECURITY SERIES B:**\n\n🎯 **Investment:** $25M Series B in CyberShield Technologies\n📈 **Business Case:** SMB cybersecurity platform, $12M ARR, 78% gross margins\n💰 **Valuation:** $125M pre-money (10.4x revenue multiple)\n📊 **Financial Projections:** 3.2x revenue multiple, 28% IRR over 4-year hold\n🎪 **Exit Strategy:** Strategic acquisition by cybersecurity platform or IPO path',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Investment Committee Analysis Summary',
            headers: ['Category', 'Assessment', 'Supporting Data', 'Risk Mitigation'],
            rows: [
              ['Market Opportunity', 'Strong', '$45B SMB cybersecurity market', 'Diversified customer base'],
              ['Financial Performance', 'Excellent', '89% gross margins, 125% NRR', 'Unit economics validated'],
              ['Management Team', 'Strong', 'Experienced security executives', 'Board oversight enhanced'],
              ['Competitive Position', 'Defensible', 'AI-powered threat detection', 'Patent portfolio expansion']
            ]
          }
        }]
      }
    ]
  },

  'underwriting-reconciler': {
    'performance-attribution': [
      {
        sender: 'user',
        message: 'Analyze underwriting accuracy for our DataCorp investment after 18 months of performance data',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 PERFORMANCE ATTRIBUTION ANALYSIS: Reconciling initial underwriting projections with 18-month actual performance for DataCorp investment.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**DATACORP PERFORMANCE ATTRIBUTION:**\n\n📈 **Revenue Performance:** 23% growth vs 30% underwritten (-23% variance)\n💰 **EBITDA Margin:** 18% vs 22% projected (-18% variance)\n🎯 **Key Variance Drivers:** CAC inflation (+45%), market saturation ahead of forecast\n🔍 **Root Cause Analysis:** Competitive landscape evolved faster than anticipated\n📚 **Portfolio Learnings:** Enhanced market timing models, refined CAC projections applied to 3 similar deals',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Underwriting vs Actual Performance Analysis',
            headers: ['Metric', 'Underwritten', 'Actual 18M', 'Variance', 'Root Cause'],
            rows: [
              ['Revenue Growth', '30% CAGR', '23% CAGR', '-23%', 'Market saturation'],
              ['EBITDA Margin', '22%', '18%', '-18%', 'CAC inflation'],
              ['Customer Count', '15,000', '12,400', '-17%', 'Acquisition challenges'],
              ['Market Share', '12%', '9.8%', '-18%', 'Competitive pressure']
            ]
          }
        }]
      }
    ]
  },

  'value-creation-tracker': {
    'operational-improvement': [
      {
        sender: 'user',
        message: 'Track value creation progress for ManufacturingCo operational excellence initiative',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🏭 VALUE CREATION TRACKING: Monitoring operational excellence program across ManufacturingCo\'s 3 facilities.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**MANUFACTURINGCO VALUE CREATION UPDATE:**\n\n✅ **Program Status:** 78% complete across operational efficiency initiatives\n📊 **Achieved Results:** 12% cost reduction, 18% throughput improvement\n💰 **EBITDA Impact:** $4.2M incremental EBITDA (vs $3.8M target)\n🎯 **Next Milestone:** Digital transformation rollout Q3\n📈 **ROI Performance:** 2.3x return on value creation investment',
        delay: 2500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'ManufacturingCo Value Creation Progress',
            metrics: [
              { label: 'Cost Reduction', value: '12%', trend: 'down', change: 12 },
              { label: 'Throughput Improvement', value: '18%', trend: 'up', change: 18 },
              { label: 'EBITDA Impact', value: '$4.2M', trend: 'up', change: 11 },
              { label: 'Program Completion', value: '78%', trend: 'up', change: 23 }
            ]
          }
        }]
      }
    ]
  },

  'diligence-process-manager': {
    'multi-workstream-coordination': [
      {
        sender: 'user',
        message: 'Manage diligence process for $150M healthcare acquisition with 6 workstreams',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🎯 DILIGENCE PROCESS ORCHESTRATION: Coordinating 6 parallel workstreams for healthcare services acquisition.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**HEALTHCARE ACQUISITION DILIGENCE STATUS:**\n\n📊 **Workstream Progress:** Commercial (85% complete), Financial (92%), Legal (67%), IT (73%), HR (89%), Environmental (94%)\n📋 **Action Items:** 47 items tracked across workstreams\n🚨 **Red Flags:** 12 issues flagged for IC review\n⏱️ **Timeline:** On track for 4-week completion\n🎯 **Next Milestone:** Management presentation scheduled',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Diligence Workstream Status',
            headers: ['Workstream', 'Lead', 'Progress', 'Key Findings', 'Red Flags'],
            rows: [
              ['Commercial', 'Partner A', '85%', 'Strong market position', '1 - Customer concentration'],
              ['Financial', 'Partner B', '92%', 'Clean financials', '0 - None identified'],
              ['Legal', 'External Counsel', '67%', 'Standard contracts', '3 - Regulatory matters'],
              ['IT/Technology', 'Tech Consultant', '73%', 'Modern infrastructure', '2 - Cybersecurity gaps'],
              ['HR/Management', 'Partner C', '89%', 'Strong team', '1 - Key person risk'],
              ['Environmental', 'ESG Consultant', '94%', 'Compliant operations', '5 - Legacy issues']
            ]
          }
        }]
      }
    ]
  },

  'financial-data-aggregator': {
    'portfolio-quarterly-review': [
      {
        sender: 'user',
        message: 'Aggregate Q3 financial performance across our 15 portfolio companies for fund reporting',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 PORTFOLIO FINANCIAL AGGREGATION: Consolidating Q3 performance data across 15 portfolio companies.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**Q3 PORTFOLIO FINANCIAL SUMMARY:**\n\n💼 **Portfolio Overview:** 15 companies reporting\n📈 **Revenue Performance:** Weighted average growth 19.2% YoY\n💰 **EBITDA Performance:** Margin expansion +1.8pp vs prior year\n💵 **Cash Position:** $127M aggregate cash, 18 months runway average\n🎯 **Plan vs Actual:** 11 ahead of plan, 3 on plan, 1 behind plan',
        delay: 2500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'Q3 Portfolio Financial Performance',
            metrics: [
              { label: 'Revenue Growth', value: '19.2%', trend: 'up', change: 3.1 },
              { label: 'EBITDA Margin', value: '23.4%', trend: 'up', change: 1.8 },
              { label: 'Cash Conversion', value: '87%', trend: 'up', change: 5.2 },
              { label: 'Plan Achievement', value: '93%', trend: 'up', change: 7.1 }
            ]
          }
        }]
      }
    ]
  },

  'operational-metrics-collector': {
    'saas-metrics-collection': [
      {
        sender: 'user',
        message: 'Collect customer acquisition metrics across our SaaS portfolio companies for quarterly review',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 SAAS METRICS COLLECTION: Aggregating customer acquisition data across 7 SaaS portfolio companies.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**SAAS PORTFOLIO METRICS COLLECTION:**\n\n🎯 **CAC Performance:** Ranging $450-$2,100 across portfolio\n📈 **LTV/CAC Ratios:** 3.2x-8.7x with median at 5.4x\n⏱️ **Payback Periods:** Average 14 months (range: 8-24 months)\n🏆 **Top Performer:** CloudTech (LTV/CAC 8.7x, 8-month payback)\n⚠️ **Improvement Target:** DataFlow (improvement plan initiated)',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'SaaS Portfolio CAC Performance',
            items: [
              { label: 'CloudTech', value: 'LTV/CAC: 8.7x', percentage: 87 },
              { label: 'SalesFlow', value: 'LTV/CAC: 6.2x', percentage: 62 },
              { label: 'WorkflowPro', value: 'LTV/CAC: 5.8x', percentage: 58 },
              { label: 'DataFlow', value: 'LTV/CAC: 3.2x', percentage: 32 }
            ]
          }
        }]
      }
    ]
  },

  'vendor-spend-analyzer': {
    'cost-optimization': [
      {
        sender: 'user',
        message: 'Analyze IT vendor spending across portfolio for consolidation opportunities',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '💻 VENDOR SPEND ANALYSIS: Scanning $4.2M annual IT expenditure across 15 portfolio companies.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**IT VENDOR CONSOLIDATION ANALYSIS:**\n\n💰 **Total IT Spend:** $4.2M annually across portfolio\n🎯 **Consolidation Opportunity:** 67% savings on software licensing\n☁️ **Cloud Infrastructure:** 34% savings through consolidated billing\n📋 **Recommendations:** Portfolio-wide Microsoft Enterprise agreement, AWS consolidated billing\n📊 **Projected Savings:** $1.8M annually through vendor consolidation',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Vendor Consolidation Opportunities',
            headers: ['Category', 'Current Spend', 'Consolidated Cost', 'Savings', 'Implementation'],
            rows: [
              ['Software Licensing', '$1.8M', '$0.6M', '67%', 'Enterprise agreements'],
              ['Cloud Infrastructure', '$1.2M', '$0.8M', '34%', 'Consolidated billing'],
              ['Security Tools', '$0.8M', '$0.5M', '38%', 'Platform consolidation'],
              ['Communication', '$0.4M', '$0.3M', '25%', 'Unified platforms']
            ]
          }
        }]
      }
    ]
  },

  'contract-intelligence': {
    'customer-contract-analysis': [
      {
        sender: 'user',
        message: 'Analyze customer contracts for SaaS portfolio company to identify renewal risks and revenue quality',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📋 CONTRACT INTELLIGENCE ANALYSIS: Scanning 347 customer contracts for renewal risks and revenue quality indicators.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**CUSTOMER CONTRACT ANALYSIS COMPLETE:**\n\n📊 **Contracts Analyzed:** 347 active customer agreements\n⚠️ **Renewal Risk:** 23% of ARR ($2.8M) has 90-day termination clauses\n💪 **Contract Strength:** 67% multi-year agreements, 89% auto-renewal\n🎯 **Upsell Opportunities:** $1.2M expansion revenue identified\n🔒 **Revenue Security:** 78% of revenue locked through 2025',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Contract Analysis Risk Distribution',
            items: [
              { label: 'Low Risk (Multi-year, Auto-renew)', value: '67% of ARR', percentage: 67 },
              { label: 'Medium Risk (Annual, Auto-renew)', value: '22% of ARR', percentage: 22 },
              { label: 'High Risk (Short-term, Manual)', value: '11% of ARR', percentage: 11 }
            ]
          }
        }]
      }
    ]
  },

  'portfolio-chat': {
    'performance-query': [
      {
        sender: 'user',
        message: 'Which portfolio companies are outperforming their growth plans this quarter?',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🎯 PORTFOLIO PERFORMANCE QUERY: Analyzing growth performance vs plan across all investments.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**TOP PERFORMING COMPANIES vs PLAN:**\n\n🥇 **TechFlow Solutions:** +34% vs plan (SaaS, product expansion)\n🥈 **HealthCare Partners:** +28% vs plan (services, new contracts)\n🥉 **ManufacturingCo:** +19% vs plan (efficiency improvements)\n\n📊 **Performance Distribution:** 11 companies ahead of plan, 3 on plan, 1 behind plan\n🎯 **Key Success Drivers:** Product innovation, operational excellence, market expansion',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Portfolio Growth Performance vs Plan',
            headers: ['Company', 'Sector', 'Plan vs Actual', 'Key Driver', 'Outlook'],
            rows: [
              ['TechFlow Solutions', 'Software', '+34%', 'Product expansion', 'Strong'],
              ['HealthCare Partners', 'Healthcare', '+28%', 'New contracts', 'Strong'],
              ['ManufacturingCo', 'Industrial', '+19%', 'Efficiency gains', 'Positive'],
              ['RetailTech', 'Technology', '+12%', 'Market share', 'Stable']
            ]
          }
        }]
      }
    ]
  },

  'pitchbook-generator': {
    'lp-presentation': [
      {
        sender: 'user',
        message: 'Generate LP presentation for Q3 fund performance highlighting our healthcare and technology exits',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 LP PITCHBOOK GENERATION: Creating Q3 fund presentation with exit highlights and performance metrics.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**LP PRESENTATION Q3 COMPLETE:**\n\n📈 **Fund Performance:** 22.1% net IRR, 1.9x TVPI\n🏆 **Notable Exits:** HealthTech ($78M, 3.2x) and DataFlow ($156M, 2.8x)\n💼 **Portfolio Highlights:** 2 new investments, 15 companies strong performance\n📊 **Market Environment:** Favorable exit conditions, selective deployment\n🎯 **Fund Status:** 78% deployed, $89M available for investment',
        delay: 2500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'Q3 Fund Performance Highlights',
            metrics: [
              { label: 'Net IRR', value: '22.1%', trend: 'up', change: 2.3 },
              { label: 'TVPI Multiple', value: '1.9x', trend: 'up', change: 12 },
              { label: 'Realized Gains', value: '$234M', trend: 'up', change: 45 },
              { label: 'Portfolio Score', value: '4.2/5', trend: 'up', change: 8 }
            ]
          }
        }]
      }
    ]
  },

  'quarterly-reporting': {
    'investor-report': [
      {
        sender: 'user',
        message: 'Prepare comprehensive Q3 investor report with portfolio updates and fund performance',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📄 Q3 INVESTOR REPORTING: Compiling comprehensive fund and portfolio performance for LP distribution.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**Q3 INVESTOR REPORT COMPLETE:**\n\n📊 **Fund Overview:** Performance summary, deployment status, pipeline\n💼 **Portfolio Updates:** 15 company profiles with financial performance\n💰 **Financial Statements:** NAV calculation, cash flows, commitments\n📈 **Market Commentary:** Sector trends, valuation environment, outlook\n🔔 **Notices:** Upcoming capital calls, distribution projections',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Q3 Investor Report Distribution',
            headers: ['Section', 'Content', 'LP Interest Level', 'Key Insights'],
            rows: [
              ['Fund Performance', 'IRR, TVPI, DPI metrics', 'High', 'Strong returns vs benchmark'],
              ['Portfolio Updates', '15 company summaries', 'High', '93% performing above plan'],
              ['Market Commentary', 'Sector trends analysis', 'Medium', 'Favorable exit environment'],
              ['Financial Statements', 'NAV and cash flows', 'High', 'Strong cash position']
            ]
          }
        }]
      }
    ]
  },

  'ddq-response': {
    'institutional-ddq': [
      {
        sender: 'user',
        message: 'Complete institutional investor DDQ for pension fund considering $50M commitment',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📋 INSTITUTIONAL DDQ PROCESSING: Completing 127-question due diligence questionnaire for pension fund institutional investor.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**INSTITUTIONAL DDQ COMPLETION:**\n\n✅ **ESG Compliance:** Verified across all portfolio companies\n📊 **Performance Attribution:** Detailed fund and portfolio analysis\n🛡️ **Risk Management:** Comprehensive framework documentation\n📁 **Supporting Materials:** 47 documents compiled and verified\n⏱️ **Completion Time:** 6 hours vs industry standard 3 days',
        delay: 2500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'DDQ Response Performance',
            metrics: [
              { label: 'Response Speed', value: '6 hrs', trend: 'down', change: 80 },
              { label: 'Accuracy Score', value: '98%', trend: 'up', change: 12 },
              { label: 'Compliance Rate', value: '100%', trend: 'stable', change: 0 },
              { label: 'LP Satisfaction', value: '4.8/5', trend: 'up', change: 15 }
            ]
          }
        }]
      }
    ]
  },

  'earnings-insights': {
    'public-comps-analysis': [
      {
        sender: 'user',
        message: 'Analyze earnings calls from public comps in software vertical for investment insights',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📈 EARNINGS CALL ANALYSIS: Processing earnings calls from 15 public software companies for competitive intelligence.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**PUBLIC SOFTWARE EARNINGS ANALYSIS:**\n\n📊 **Companies Analyzed:** 15 public software comps\n🎯 **Key Themes:** AI adoption driving 23% average revenue growth\n💪 **Business Model Strength:** Subscription resilience, margin expansion through automation\n🚀 **Portfolio Implications:** Accelerate AI initiatives across software investments\n⚠️ **Risk Factors:** Macro headwinds affecting enterprise spending',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Public Software Earnings Insights',
            items: [
              { label: 'AI-Driven Revenue Growth', value: '23% average', percentage: 85 },
              { label: 'Subscription Strength', value: '94% retention', percentage: 94 },
              { label: 'Margin Expansion', value: '+180bps', percentage: 78 },
              { label: 'Enterprise Demand', value: 'Strong pipeline', percentage: 82 }
            ]
          }
        }]
      }
    ]
  },

  'press-release-agent': {
    'fund-closing-announcement': [
      {
        sender: 'user',
        message: 'Create press release for $200M Fund III final closing',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📰 PRESS RELEASE CREATION: Drafting professional announcement for Fund III final closing.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**FUND III CLOSING PRESS RELEASE:**\n\n🎉 **Headline:** "Brownloop Announces $200M Final Closing of Fund III"\n🎯 **Fund Strategy:** Growth equity investments in B2B software and healthcare technology\n👥 **LP Composition:** 45% institutional investors, 35% family offices, 20% HNW individuals\n📊 **Investment Focus:** $10-50M investments in proven business models\n💬 **Executive Quotes:** Managing partners on market opportunity and investment approach',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Fund III Press Release Components',
            headers: ['Section', 'Content', 'Key Messages', 'Target Audience'],
            rows: [
              ['Opening', 'Final closing announcement', 'Fund scale and success', 'Industry media'],
              ['Strategy', 'Investment focus areas', 'Sector expertise', 'Potential portfolio cos'],
              ['LP Base', 'Investor composition', 'Institutional backing', 'Future LPs'],
              ['Team', 'Investment professionals', 'Experience and track record', 'Management teams']
            ]
          }
        }]
      }
    ]
  },

  'lp-email-assistant': {
    'co-investment-inquiry': [
      {
        sender: 'user',
        message: 'Respond to LP inquiry about co-investment opportunities in healthcare sector',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📧 LP EMAIL RESPONSE: Crafting detailed response about healthcare co-investment opportunities.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**LP CO-INVESTMENT RESPONSE:**\n\n🏥 **Healthcare Opportunities:** 2 active deals ($15M and $35M co-investment sizes)\n📋 **Investment Criteria:** Healthcare services and technology, $25M+ EBITDA\n💰 **Minimum Commitment:** $5M minimum co-investment threshold\n⏱️ **Timeline:** 30-45 day decision window for co-investment participation\n📞 **Follow-up:** Call scheduled to discuss specific opportunities in detail',
        delay: 2500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'Healthcare Co-Investment Pipeline',
            metrics: [
              { label: 'Active Opportunities', value: '2 deals', trend: 'stable', change: 0 },
              { label: 'Co-Investment Size', value: '$15-35M', trend: 'up', change: 25 },
              { label: 'Decision Timeline', value: '30-45 days', trend: 'stable', change: 0 },
              { label: 'LP Interest Level', value: '4.3/5', trend: 'up', change: 12 }
            ]
          }
        }]
      }
    ]
  },

  'comparable-analysis': {
    'valuation-benchmarking': [
      {
        sender: 'user',
        message: 'Run comparable analysis for B2B software company with $30M revenue targeting acquisition',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 COMPARABLE ANALYSIS: Benchmarking B2B software target against public and private market comps.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**COMPARABLE ANALYSIS RESULTS:**\n\n🎯 **Target Profile:** B2B software, $30M revenue, 78% gross margins\n📈 **Public Comps:** 14 companies, median 8.2x revenue, 24.5x EBITDA\n💰 **Private Comps:** 23 transactions, median 7.5x revenue premium\n📊 **Valuation Range:** $225-270M (7.5-9.0x revenue multiple)\n🎪 **Recommendation:** Target 8.0x revenue ($240M) based on growth profile',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'B2B Software Valuation Benchmarking',
            items: [
              { label: 'Public Market Median', value: '8.2x Revenue', percentage: 82 },
              { label: 'Private Market Median', value: '7.5x Revenue', percentage: 75 },
              { label: 'High-Growth Premium', value: '9.5x Revenue', percentage: 95 },
              { label: 'Target Valuation Range', value: '7.5-9.0x', percentage: 84 }
            ]
          }
        }]
      }
    ]
  },

  'valuation-memo': {
    'acquisition-valuation': [
      {
        sender: 'user',
        message: 'Generate valuation memo for $125M manufacturing company acquisition with multiple methodologies',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 VALUATION MEMO GENERATION: Creating comprehensive valuation analysis using DCF, comparable, and precedent transaction methodologies.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**MANUFACTURING COMPANY VALUATION MEMO:**\n\n💰 **DCF Analysis:** 12.5x EBITDA ($150M value)\n📊 **Comparable Companies:** 11.8x EBITDA median ($142M value)\n📈 **Precedent Transactions:** 13.2x EBITDA median ($158M value)\n🎯 **Recommended Bid Range:** $145-160M (12.0-13.2x LTM EBITDA)\n✅ **Investment Recommendation:** Proceed at midpoint $152M valuation',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Valuation Methodology Comparison',
            items: [
              { label: 'DCF Analysis', value: '$150M (12.5x)', percentage: 83 },
              { label: 'Public Comparables', value: '$142M (11.8x)', percentage: 79 },
              { label: 'Transaction Comps', value: '$158M (13.2x)', percentage: 88 },
              { label: 'Recommended Range', value: '$145-160M', percentage: 85 }
            ]
          }
        }]
      }
    ]
  },

  'cash-flow-forecasting': {
    'scenario-modeling': [
      {
        sender: 'user',
        message: 'Forecast cash flow for our SaaS company through next 18 months with multiple growth scenarios',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📈 CASH FLOW FORECASTING: Projecting 18-month cash flows with scenario modeling for SaaS portfolio company.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**18-MONTH CASH FLOW FORECAST:**\n\n💰 **Base Case:** $4.2M cash generation over 18 months\n🚀 **Bull Case:** $7.8M (45% growth scenario)\n⚠️ **Bear Case:** $1.9M (20% growth scenario)\n💼 **Working Capital:** $2.1M needed for growth investments\n✅ **Liquidity Assessment:** Adequate cash in all scenarios',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Cash Flow Scenario Analysis',
            headers: ['Scenario', 'Growth Rate', 'Cash Generation', 'Working Capital', 'Net Position'],
            rows: [
              ['Bull Case', '45%', '$7.8M', '$2.1M', '$5.7M'],
              ['Base Case', '30%', '$4.2M', '$2.1M', '$2.1M'],
              ['Bear Case', '20%', '$1.9M', '$2.1M', '-$0.2M'],
              ['Stress Case', '10%', '$0.8M', '$2.1M', '-$1.3M']
            ]
          }
        }]
      }
    ]
  },

  'nav-calendar': {
    'quarterly-nav-coordination': [
      {
        sender: 'user',
        message: 'Track NAV reporting calendar for Q4 across all funds',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📅 NAV CALENDAR COORDINATION: Managing Q4 valuation and reporting schedules across fund portfolio.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**Q4 NAV REPORTING CALENDAR:**\n\n📊 **Fund I:** Dec 31 valuation committee, Jan 15 LP reporting\n📈 **Fund II:** Dec 31 valuation, Jan 10 auditor review, Jan 20 LP distribution\n📋 **Portfolio Submissions:** All 15 companies submitted Q4 packages\n✅ **Audit Coordination:** External auditors scheduled for January reviews\n⏱️ **Regulatory Deadlines:** All filings on track for compliance',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Q4 NAV Reporting Schedule',
            headers: ['Fund', 'Valuation Date', 'Committee Review', 'Audit Review', 'LP Reporting'],
            rows: [
              ['Fund I', 'Dec 31', 'Jan 5', 'Jan 12', 'Jan 15'],
              ['Fund II', 'Dec 31', 'Jan 5', 'Jan 10', 'Jan 20'],
              ['Fund III', 'Dec 31', 'Jan 8', 'Jan 15', 'Jan 25']
            ]
          }
        }]
      }
    ]
  },

  'fund-chat-assistant': {
    'fund-performance-query': [
      {
        sender: 'user',
        message: 'What\'s our current Fund II TVPI and how does it compare to vintage peers?',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 FUND PERFORMANCE ANALYSIS: Analyzing Fund II performance vs vintage year peer group.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**FUND II PERFORMANCE vs PEERS:**\n\n📈 **Current TVPI:** 1.8x multiple\n💰 **Net IRR:** 19.4% (strong performance)\n🏆 **Vintage Comparison:** Top quartile vs 2019 vintage (median TVPI 1.4x, IRR 14.2%)\n🎯 **Performance Drivers:** 3 successful exits, strong portfolio company growth\n📊 **Benchmark Position:** Significantly outperforming peer median',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Fund II Vintage Year Performance Comparison',
            items: [
              { label: 'Our Fund II TVPI', value: '1.8x multiple', percentage: 90 },
              { label: 'Vintage Median TVPI', value: '1.4x multiple', percentage: 70 },
              { label: 'Our Fund II IRR', value: '19.4%', percentage: 87 },
              { label: 'Vintage Median IRR', value: '14.2%', percentage: 64 }
            ]
          }
        }]
      }
    ]
  },

  'opportunity-sourcing': {
    'sector-sourcing': [
      {
        sender: 'user',
        message: 'Source healthcare technology opportunities in $20-75M EBITDA range with AI/automation themes',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🔍 HEALTHCARE TECH SOURCING: Scanning market for AI/automation opportunities in target EBITDA range.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**HEALTHCARE TECH SOURCING RESULTS:**\n\n🎯 **Opportunities Identified:** 34 companies in target range\n🏥 **Top Categories:** Clinical workflow (12), Revenue cycle (9), Patient engagement (8), Analytics (5)\n🤖 **AI/Automation Focus:** 23 companies with meaningful AI capabilities\n🔗 **Warm Paths:** 18 introductions available through network\n⭐ **Priority Targets:** 8 companies flagged for immediate outreach',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Healthcare Technology Deal Pipeline',
            headers: ['Company', 'Sub-sector', 'EBITDA Range', 'AI Component', 'Introduction Path'],
            rows: [
              ['MedWorkflow', 'Clinical Operations', '$25-30M', 'Scheduling AI', 'Alumni connection'],
              ['RevCycle Solutions', 'Revenue Management', '$40-50M', 'Billing automation', 'Investment bank'],
              ['PatientConnect', 'Engagement Platform', '$20-25M', 'Communication AI', 'Board member'],
              ['HealthAnalytics', 'Data Platform', '$35-45M', 'Predictive models', 'Management team']
            ]
          }
        }]
      }
    ]
  },

  'outreach-personalization': {
    'ceo-outreach': [
      {
        sender: 'user',
        message: 'Create personalized outreach for CEO of FinTech startup we\'re targeting for Series B',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📧 PERSONALIZED OUTREACH CREATION: Crafting targeted communication for FinTech CEO leveraging relationship intelligence.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**PERSONALIZED CEO OUTREACH:**\n\n🎯 **Relationship Context:** Connected through portfolio company synergies (PaymentTech, LendingFlow)\n💡 **Value Proposition:** Sector expertise + operational support + strategic introductions\n📈 **Growth Stage Alignment:** Series B specialization with 23 FinTech investments\n🤝 **Meeting Request:** Specific discussion of their growth challenges and our value-add\n📊 **Success Rate:** 67% response rate with personalized approach',
        delay: 2500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'Outreach Personalization Performance',
            metrics: [
              { label: 'Response Rate', value: '67%', trend: 'up', change: 34 },
              { label: 'Meeting Conversion', value: '43%', trend: 'up', change: 28 },
              { label: 'Relationship Depth', value: '8.2/10', trend: 'up', change: 15 },
              { label: 'Deal Pipeline', value: '89 prospects', trend: 'up', change: 67 }
            ]
          }
        }]
      }
    ]
  },

  'call-transcript-analyzer': {
    'management-presentation': [
      {
        sender: 'user',
        message: 'Analyze management presentation call transcript for software company investment opportunity',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🎧 CALL TRANSCRIPT ANALYSIS: Processing 67-minute management presentation for investment insights.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**MANAGEMENT PRESENTATION ANALYSIS:**\n\n💼 **Company Strengths:** 89% gross margins, 124% net revenue retention, $18M ARR\n⚠️ **Risk Factors:** Customer concentration (top 3 = 42% revenue), competitive pressure\n🎯 **Growth Strategy:** Geographic expansion, product suite broadening, enterprise move\n📈 **Financial Projections:** 3-year path to $75M ARR, 25% EBITDA margins\n🔍 **Follow-up Items:** Customer concentration mitigation, competitive differentiation deep-dive',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Management Presentation Key Insights',
            items: [
              { label: 'Revenue Quality Score', value: '8.3/10', percentage: 83 },
              { label: 'Growth Sustainability', value: '7.8/10', percentage: 78 },
              { label: 'Competitive Position', value: '6.9/10', percentage: 69 },
              { label: 'Management Credibility', value: '8.7/10', percentage: 87 }
            ]
          }
        }]
      }
    ]
  },

  'deal-funnel-tracker': {
    'quarterly-funnel-analysis': [
      {
        sender: 'user',
        message: 'Analyze Q3 deal funnel performance and conversion rates',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 DEAL FUNNEL ANALYSIS: Evaluating Q3 pipeline performance and conversion metrics.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**Q3 DEAL FUNNEL PERFORMANCE:**\n\n📈 **Pipeline Flow:** 247 initial screens → 89 first meetings → 23 IOIs → 7 LOIs → 2 closings\n📊 **Conversion Rates:** Screen-to-meeting 36%, Meeting-to-IOI 26%, IOI-to-close 9%\n🎯 **Improvement Area:** Initial screening criteria need refinement\n📈 **Success Factors:** Strong relationship-sourced deals converting at 45% higher rate\n💡 **Recommendation:** Focus on warm introduction channels',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Q3 Deal Funnel Conversion Analysis',
            items: [
              { label: 'Initial Screens', value: '247 opportunities', percentage: 100 },
              { label: 'First Meetings', value: '89 (36% conversion)', percentage: 36 },
              { label: 'IOIs Submitted', value: '23 (26% conversion)', percentage: 26 },
              { label: 'Deals Closed', value: '2 (9% conversion)', percentage: 9 }
            ]
          }
        }]
      }
    ]
  },

  'relationship-analyzer': {
    'network-mapping': [
      {
        sender: 'user',
        message: 'Analyze relationship network for healthcare sector deal sourcing',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🔗 RELATIONSHIP NETWORK ANALYSIS: Mapping healthcare sector connections for enhanced deal sourcing.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**HEALTHCARE NETWORK ANALYSIS:**\n\n📊 **Total Relationships:** 89 mapped across investment banks, management teams, co-investors\n🏦 **Strongest Connections:** Goldman healthcare team (12 introductions), Bain healthcare consultants (8 connections)\n👥 **Industry Network:** 23 healthcare executives with deal flow potential\n🎯 **Warm Introduction Paths:** 34 potential deals with relationship coverage\n📈 **Sourcing Effectiveness:** Relationship deals convert 67% faster',
        delay: 2500,
        attachments: [{
          type: 'table',
          data: {
            title: 'Healthcare Relationship Network Mapping',
            headers: ['Network Type', 'Contact Count', 'Deal Referrals', 'Conversion Rate', 'Quality Score'],
            rows: [
              ['Investment Banks', '23', '12 annually', '34%', '8.2/10'],
              ['Industry Executives', '34', '18 annually', '45%', '7.8/10'],
              ['Consultants', '15', '8 annually', '67%', '9.1/10'],
              ['Co-investors', '17', '6 annually', '28%', '7.5/10']
            ]
          }
        }]
      }
    ]
  },

  'market-engagement-monitor': {
    'sector-intelligence': [
      {
        sender: 'user',
        message: 'Monitor B2B software market for emerging investment themes',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 B2B SOFTWARE MARKET INTELLIGENCE: Monitoring sector trends and investment themes.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**B2B SOFTWARE MARKET INTELLIGENCE:**\n\n🤖 **AI-Powered Solutions:** 34% average revenue growth across AI-enabled platforms\n📈 **Vertical SaaS Premium:** Commanding 12-15x revenue multiples vs 8-10x horizontal\n🔒 **Cybersecurity Surge:** 67% increase in deal activity, defensive spending resilience\n💡 **Investment Recommendation:** Accelerate AI-enabled software sourcing\n⚠️ **Market Risks:** Valuation compression in non-AI software segments',
        delay: 2500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'B2B Software Market Trends',
            items: [
              { label: 'AI-Enabled Growth Rate', value: '34% revenue growth', percentage: 85 },
              { label: 'Vertical SaaS Multiples', value: '12-15x revenue', percentage: 92 },
              { label: 'Cybersecurity Activity', value: '67% deal increase', percentage: 78 },
              { label: 'Market Opportunity', value: 'High conviction', percentage: 88 }
            ]
          }
        }]
      }
    ]
  }
};