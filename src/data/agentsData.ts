import { AgentType } from '../types';
import { Users, Shield, BarChart, GraduationCap, UserPlus, LogOut, Search, Calendar, FileSearch, FileText, LineChart, FileEdit, BrainCircuit, File as FileReport, AlertTriangle, DollarSign, TrendingUp, Eye, Scale, Zap, Globe, Smartphone, Settings, MessageSquare, Mail, Megaphone, Target, Edit, Video, PieChart, Share2, Bot, Presentation, Building, Calculator, BarChart as ChartBar, Clock, Briefcase, Award } from 'lucide-react';

export const agents: AgentType[] = [
  // Deal-Team Agents (Deal 360)
  {
    id: 'cim-teaser-summarizer',
    title: 'CIM & Teaser Intelligence',
    description: 'Advanced NLP extraction of investment highlights, financial metrics, and strategic positioning from confidential memorandums with 94% accuracy and real-time risk assessment',
    icon: 'FileText',
    category: 'employee',
    examplePrompt: 'Analyze this 127-page CIM for a healthcare services platform with $45M EBITDA',
    exampleResponse: 'EXECUTIVE SUMMARY: Healthcare services consolidator, $200M revenue, $45M EBITDA (22.5% margin). Asset-light model, 78% recurring revenue, dominant positions across 3 verticals. INVESTMENT THESIS: Platform for add-on acquisitions with 15% margin expansion through operational excellence. KEY RISKS: Regulatory exposure, customer concentration. VALUATION: 12-14x EBITDA range.',
    status: 'online'
  },
  {
    id: 'company-profile-builder',
    title: 'Company Intelligence Platform',
    description: 'Enterprise-grade company profiling using 50+ data sources, competitive intelligence, and AI-powered market positioning analysis with real-time updates',
    icon: 'Building',
    category: 'employee',
    examplePrompt: 'Build comprehensive profile for TechFlow Solutions targeting acquisition',
    exampleResponse: 'COMPANY INTELLIGENCE: TechFlow Solutions - B2B workflow automation SaaS. FINANCIALS: $12M ARR, 89% gross margins, 125% NRR. MARKET POSITION: #3 in $2.4B addressable market. COMPETITIVE MOAT: 18-month implementation creates high switching costs. GROWTH DRIVERS: Enterprise expansion, international markets. RISKS: Customer concentration (top 3 = 34% of revenue).',
    status: 'online'
  },
  {
    id: 'diligence-scorecard',
    title: 'AI Due Diligence Engine',
    description: 'Systematic risk assessment across 12 diligence dimensions with ML-powered scoring, automated red flag detection, and predictive investment outcomes',
    icon: 'ChartBar',
    category: 'employee',
    examplePrompt: 'Generate diligence scorecard for $175M manufacturing acquisition',
    exampleResponse: 'DILIGENCE SCORECARD: Overall 7.4/10 (Proceed with Conditions). STRENGTHS: Market leadership (9/10), financial performance (8/10), operational efficiency (8/10). RISKS: Environmental compliance (5/10), management depth (6/10). CRITICAL ITEMS: 3 regulatory issues requiring remediation. RECOMMENDATION: Conditional approval with $12M escrow for environmental liabilities.',
    status: 'online'
  },
  {
    id: 'ic-memo-generator',
    title: 'Investment Committee Intelligence',
    description: 'Automated IC memo generation with sophisticated financial modeling, scenario analysis, and investment thesis validation using proprietary ML frameworks',
    icon: 'FileReport',
    category: 'employee',
    examplePrompt: 'Generate IC memo for $25M Series B in cybersecurity platform',
    exampleResponse: 'INVESTMENT COMMITTEE MEMO: $25M Series B in CyberShield Technologies at $125M pre-money. INVESTMENT RATIONALE: SMB cybersecurity leader with 89% gross margins, $12M ARR, 115% NRR. FINANCIAL PROJECTIONS: 3.2x multiple, 28% IRR over 4-year hold. EXIT STRATEGY: Strategic acquisition by platform or IPO. KEY RISKS: Competitive pressure, customer acquisition costs.',
    status: 'online'
  },
  {
    id: 'underwriting-reconciler',
    title: 'Performance Attribution Engine',
    description: 'Advanced ML analysis of underwriting accuracy vs. actual outcomes, providing predictive insights and continuous model improvement for enhanced investment precision',
    icon: 'TrendingUp',
    category: 'employee',
    examplePrompt: 'Analyze underwriting accuracy for DataCorp 18-month performance',
    exampleResponse: 'PERFORMANCE ATTRIBUTION: Revenue growth 23% vs 30% underwritten (-23% variance), EBITDA margin 18% vs 22% projected (-18% variance). ROOT CAUSE ANALYSIS: CAC inflation (+45%), market saturation ahead of forecast. MODEL IMPROVEMENTS: Enhanced market timing signals, refined CAC projections. PORTFOLIO LEARNINGS: Applied to 3 similar deals in pipeline.',
    status: 'online'
  },
  {
    id: 'value-creation-tracker',
    title: 'Value Creation Tracker',
    description: 'Monitors and tracks value creation initiatives across portfolio companies with KPI dashboards and milestone progress reporting',
    icon: 'Award',
    category: 'employee',
    examplePrompt: 'Track value creation progress for ManufacturingCo operational efficiency initiative',
    exampleResponse: 'Value Creation Update: Manufacturing efficiency program 78% complete. Achieved: 12% cost reduction, 18% throughput improvement. On track for $4.2M EBITDA impact by year-end. Next milestone: Digital transformation implementation Q3.',
    status: 'online'
  },
  {
    id: 'diligence-process-manager',
    title: 'Diligence Process Manager',
    description: 'Orchestrates multi-workstream due diligence processes with automated task assignment, progress tracking, and stakeholder coordination',
    icon: 'Settings',
    category: 'employee',
    examplePrompt: 'Manage diligence process for $150M healthcare acquisition with 6 workstreams',
    exampleResponse: 'Diligence Process: 6 workstreams active across Commercial (85% complete), Financial (92% complete), Legal (67% complete), IT (73% complete), HR (89% complete), Environmental (94% complete). 47 action items tracked, 12 red flags flagged for IC review.',
    status: 'online'
  },

  // Value Creation / Portfolio Operations Agents
  {
    id: 'financial-data-aggregator',
    title: 'Financial Data Aggregator',
    description: 'Consolidates financial data from multiple portfolio companies and systems into standardized reporting frameworks with automated variance analysis',
    icon: 'BarChart',
    category: 'hr',
    examplePrompt: 'Aggregate Q3 financial performance across 12 portfolio companies',
    exampleResponse: 'Financial Aggregation Complete: 12 portfolio companies reporting. Weighted average revenue growth: 18.3%, EBITDA margin expansion: +2.1pp, cash conversion: 89%. 3 companies ahead of plan, 2 behind plan, 7 on track.',
    status: 'online'
  },
  {
    id: 'operational-metrics-collector',
    title: 'Operational Metrics Collector',
    description: 'Automatically collects and standardizes operational KPIs across portfolio companies for trend analysis and benchmarking',
    icon: 'Calculator',
    category: 'hr',
    examplePrompt: 'Collect customer acquisition metrics across SaaS portfolio companies',
    exampleResponse: 'SaaS Metrics Collection: CAC ranging $450-$2,100 across portfolio, LTV/CAC ratios 3.2x-8.7x, average payback period 14 months. Top performer: CloudTech (LTV/CAC 8.7x), opportunity: DataFlow (improvement plan initiated).',
    status: 'online'
  },
  {
    id: 'vendor-spend-analyzer',
    title: 'Vendor Spend Analyzer',
    description: 'Analyzes vendor spending patterns across portfolio companies to identify consolidation opportunities and cost optimization strategies',
    icon: 'DollarSign',
    category: 'hr',
    examplePrompt: 'Analyze IT vendor spend across portfolio for consolidation opportunities',
    exampleResponse: 'Vendor Analysis: $4.2M annual IT spend across portfolio. Consolidation opportunity: 67% savings on software licensing, 34% on cloud infrastructure. Recommended: Portfolio-wide Microsoft Enterprise agreement, AWS consolidated billing.',
    status: 'online'
  },
  {
    id: 'contract-intelligence',
    title: 'Contract Intelligence Agent',
    description: 'Extracts key terms, identifies risks, and benchmarks contract provisions across customer agreements, vendor contracts, and partnership deals',
    icon: 'Scale',
    category: 'hr',
    examplePrompt: 'Analyze customer contract terms for SaaS portfolio company to identify renewal risks',
    exampleResponse: 'Contract Intelligence: 247 customer contracts analyzed. Renewal risk: 23% of ARR has termination clauses within 90 days, 67% have annual auto-renewal. Recommendation: Proactive renewal discussions for at-risk $2.3M ARR segment.',
    status: 'online'
  },
  {
    id: 'portfolio-chat',
    title: 'Kairos Portfolio Chat',
    description: 'Conversational AI interface for portfolio-wide data queries, performance analysis, and operational insights across all investments',
    icon: 'MessageSquare',
    category: 'hr',
    examplePrompt: 'What are the top 3 performing companies by EBITDA growth this quarter?',
    exampleResponse: 'Top EBITDA Growth Q3: 1) TechFlow (+34% vs plan), 2) HealthCare Solutions (+28% vs plan), 3) Manufacturing Co (+19% vs plan). Key drivers: TechFlow product expansion, HealthCare new contracts, Manufacturing operational improvements.',
    status: 'online'
  },

  // Investor Relations Agents (IR Suite)
  {
    id: 'pitchbook-generator',
    title: 'Investor Pitchbook Generator',
    description: 'Creates professional investor presentations with fund performance data, portfolio highlights, and market positioning for LP meetings',
    icon: 'Presentation',
    category: 'personal',
    examplePrompt: 'Generate LP presentation for Q3 fund performance review',
    exampleResponse: 'Pitchbook Generated: 24-slide presentation covering fund performance (18.3% net IRR), portfolio highlights (3 exits, 2 new investments), market environment analysis, and pipeline development. Executive summary and detailed appendix included.',
    status: 'online'
  },
  {
    id: 'quarterly-reporting',
    title: 'Quarterly Reporting Assistant',
    description: 'Automates quarterly investor reporting with portfolio performance summaries, financial metrics, and regulatory compliance documentation',
    icon: 'FileReport',
    category: 'personal',
    examplePrompt: 'Prepare Q3 quarterly report for Fund II investors',
    exampleResponse: 'Q3 Report Complete: Fund II performance summary, 12 portfolio company updates, $45M in new investments, $78M in realizations. NAV increased 12.3% quarter-over-quarter. All regulatory filings prepared and investor notices distributed.',
    status: 'online'
  },
  {
    id: 'ddq-response',
    title: 'DDQ Response Assistant',
    description: 'Streamlines due diligence questionnaire responses for institutional investors with automated data extraction and compliance verification',
    icon: 'FileSearch',
    category: 'personal',
    examplePrompt: 'Complete institutional investor DDQ for pension fund investment',
    exampleResponse: 'DDQ Response: 127-question institutional DDQ completed. ESG compliance verified, performance attribution detailed, risk management frameworks documented. All supporting materials compiled and reviewed for accuracy.',
    status: 'online'
  },
  {
    id: 'earnings-insights',
    title: 'Earnings Call Insights Agent',
    description: 'Analyzes portfolio company earnings calls to extract key themes, competitive intelligence, and market trend insights for investment decisions',
    icon: 'Eye',
    category: 'personal',
    examplePrompt: 'Analyze earnings calls from public comps in software vertical',
    exampleResponse: 'Earnings Analysis: 15 public software companies analyzed. Key themes: AI adoption driving 23% average revenue growth, subscription model strength, margin expansion through automation. Implications for portfolio: Accelerate AI initiatives.',
    status: 'online'
  },
  {
    id: 'press-release-agent',
    title: 'Press Release & Talking Points Agent',
    description: 'Creates press releases, investor communications, and executive talking points for fund announcements and portfolio milestones',
    icon: 'Megaphone',
    category: 'personal',
    examplePrompt: 'Create press release for $200M Fund III final closing',
    exampleResponse: 'Press Release: "Brownloop Announces $200M Final Closing of Fund III" - includes fund strategy, LP composition, investment focus areas, team expansion, and quotes from managing partners. Talking points prepared for media interviews.',
    status: 'online'
  },
  {
    id: 'lp-email-assistant',
    title: 'LP Email Response Assistant',
    description: 'Handles routine LP inquiries with intelligent response generation based on fund documents, performance data, and compliance requirements',
    icon: 'Mail',
    category: 'personal',
    examplePrompt: 'Respond to LP inquiry about co-investment opportunities in healthcare sector',
    exampleResponse: 'LP Response: Healthcare co-investment opportunities detailed: 2 active deals ($15M and $35M), investment criteria outlined, minimum commitment requirements specified, timeline for decisions provided. Follow-up call scheduled.',
    status: 'online'
  },

  // Finance Agents
  {
    id: 'comparable-analysis',
    title: 'Comparable Analysis Agent',
    description: 'Performs automated comparable company analysis with valuation multiples, financial benchmarking, and market positioning assessment',
    icon: 'Calculator',
    category: 'personal',
    examplePrompt: 'Run comparable analysis for B2B software company with $25M revenue',
    exampleResponse: 'Comparable Analysis: 12 public comps identified. Median EV/Revenue: 8.2x, EV/EBITDA: 24.5x. Target company metrics suggest 7.5-9.0x revenue multiple range. Recommendation: $188-225M valuation range based on growth profile.',
    status: 'online'
  },
  {
    id: 'valuation-memo',
    title: 'Valuation Memo Generator',
    description: 'Creates detailed valuation memorandums with multiple methodologies, sensitivity analysis, and investment recommendation frameworks',
    icon: 'TrendingUp',
    category: 'personal',
    examplePrompt: 'Generate valuation memo for manufacturing company acquisition',
    exampleResponse: 'Valuation Memo: ManufacturingCo analysis using DCF (12.5x EBITDA), comparable (11.8x EBITDA), precedent transactions (13.2x EBITDA). Recommended bid range: $145-160M representing 12.0-13.2x LTM EBITDA.',
    status: 'online'
  },
  {
    id: 'cash-flow-forecasting',
    title: 'Cash Flow Forecasting Assistant',
    description: 'Projects portfolio company cash flows with scenario modeling, capital requirements analysis, and liquidity planning across multiple time horizons',
    icon: 'LineChart',
    category: 'personal',
    examplePrompt: 'Forecast cash flow for SaaS company through next 18 months with growth scenarios',
    exampleResponse: 'Cash Flow Forecast: Base case projects $4.2M cash generation over 18 months. Bull case: $7.8M (45% growth), Bear case: $1.9M (20% growth). Working capital needs: $2.1M for growth investments. Liquidity adequate in all scenarios.',
    status: 'online'
  },
  {
    id: 'nav-calendar',
    title: 'NAV Calendar Tracker',
    description: 'Manages net asset value calculation schedules, valuation committee meetings, and regulatory reporting deadlines across fund portfolios',
    icon: 'Calendar',
    category: 'personal',
    examplePrompt: 'Track NAV reporting calendar for Q4 across all funds',
    exampleResponse: 'NAV Calendar: Q4 reporting schedule coordinated. Fund I: Dec 31 valuation committee, Jan 15 LP reporting. Fund II: Dec 31 valuation, Jan 10 auditor review, Jan 20 LP distribution. All portfolio companies submitted Q4 reporting packages.',
    status: 'online'
  },
  {
    id: 'fund-chat-assistant',
    title: 'Kairos Fund Chat Assistant',
    description: 'Conversational interface for fund-level data queries, performance analytics, and investment decision support across all fund activities',
    icon: 'BrainCircuit',
    category: 'personal',
    examplePrompt: 'What\'s our current Fund II TVPI and how does it compare to vintage peers?',
    exampleResponse: 'Fund II Performance: Current TVPI 1.8x, net IRR 19.4%. Vintage year comparison: Top quartile performance vs 2019 vintage (median TVPI 1.4x, IRR 14.2%). Strong performance driven by 3 successful exits and portfolio company growth.',
    status: 'online'
  },

  // Business Development Agents (BD Suite)
  {
    id: 'opportunity-sourcing',
    title: 'Opportunity Sourcing Agent',
    description: 'Identifies and prioritizes investment opportunities through market scanning, industry analysis, and relationship mapping for deal origination',
    icon: 'Search',
    category: 'personal',
    examplePrompt: 'Source healthcare services opportunities in $10-50M EBITDA range',
    exampleResponse: 'Healthcare Sourcing: 23 opportunities identified in target range. Top prospects: Regional surgery centers (3 companies), home health platforms (2 companies), specialty pharma services (4 companies). 12 warm introduction paths identified.',
    status: 'online'
  },
  {
    id: 'outreach-personalization',
    title: 'Outreach Personalization Agent',
    description: 'Creates personalized outreach campaigns for business development with tailored messaging based on relationship history and investment thesis',
    icon: 'Target',
    category: 'personal',
    examplePrompt: 'Create personalized outreach for CEO of FinTech startup we\'re targeting',
    exampleResponse: 'Personalized Outreach: Email customized for FinTech CEO highlighting our portfolio company Synergies (PaymentTech and LendingFlow), sector expertise, and value-add capabilities. Meeting request with specific value proposition for their growth stage.',
    status: 'online'
  },
  {
    id: 'call-transcript-analyzer',
    title: 'Call Transcript Analyzer',
    description: 'Analyzes management presentation calls and investor meetings to extract key insights, investment highlights, and follow-up action items',
    icon: 'MessageSquare',
    category: 'personal',
    examplePrompt: 'Analyze management presentation call for software company investment opportunity',
    exampleResponse: 'Call Analysis: 45-minute management presentation analyzed. Key highlights: 89% gross margins, 124% net revenue retention, $15M ARR growing 67% YoY. Red flags: Customer concentration (top 3 = 45% of revenue). Follow-up: Customer diversification strategy.',
    status: 'online'
  },
  {
    id: 'deal-funnel-tracker',
    title: 'Deal Funnel Performance Tracker',
    description: 'Tracks deal flow progression through investment pipeline with conversion analytics and process optimization recommendations',
    icon: 'BarChart',
    category: 'personal',
    examplePrompt: 'Analyze Q3 deal funnel performance and conversion rates',
    exampleResponse: 'Deal Funnel Q3: 247 initial screens → 89 first meetings → 23 IOIs → 7 LOIs → 2 closings. Conversion rates: Screen-to-meeting 36%, Meeting-to-IOI 26%, IOI-to-close 9%. Recommendation: Improve initial screening criteria.',
    status: 'online'
  },
  {
    id: 'relationship-analyzer',
    title: 'Relationship History Analyzer',
    description: 'Maps and analyzes relationship networks across investment banking, management teams, and co-investors to optimize deal sourcing strategies',
    icon: 'Users',
    category: 'personal',
    examplePrompt: 'Analyze relationship network for healthcare sector deal sourcing',
    exampleResponse: 'Healthcare Network: 89 relationships mapped across investment banks, management teams, and co-investors. Strongest connections: Goldman healthcare team (12 introductions), Bain healthcare consultants (8 connections), Industry CEO network (23 executives).',
    status: 'online'
  },
  {
    id: 'market-engagement-monitor',
    title: 'Market Engagement Monitor',
    description: 'Monitors market activity, competitive intelligence, and industry trends to identify investment timing and positioning opportunities',
    icon: 'Globe',
    category: 'personal',
    examplePrompt: 'Monitor B2B software market for emerging investment themes',
    exampleResponse: 'B2B Software Market Intelligence: AI-powered solutions driving 34% average revenue growth, vertical SaaS commanding premium multiples (12-15x revenue), cybersecurity segment seeing 67% increase in deal activity. Recommendation: Accelerate AI-enabled software sourcing.',
    status: 'online'
  }
];

export const getAgentIcon = (iconName: string) => {
  const icons = {
    Users,
    Shield,
    BarChart,
    GraduationCap,
    UserPlus,
    LogOut,
    Search,
    Calendar,
    FileSearch,
    FileText,
    LineChart,
    FileEdit,
    BrainCircuit,
    FileReport,
    AlertTriangle,
    DollarSign,
    TrendingUp,
    Eye,
    Scale,
    Zap,
    Globe,
    Smartphone,
    Settings,
    MessageSquare,
    Mail,
    Megaphone,
    Target,
    Edit,
    Video,
    PieChart,
    Share2,
    Bot,
    Presentation,
    Building,
    Calculator,
    ChartBar,
    Clock,
    Briefcase,
    Award
  };
  
  return icons[iconName as keyof typeof icons] || MessageSquare;
};

export const getAgentsByCategory = (category: 'employee' | 'hr' | 'personal') => {
  return agents.filter(agent => agent.category === category);
};