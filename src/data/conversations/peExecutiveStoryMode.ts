import type { ConversationStep } from './index';

export interface ExecutiveScenario {
  id: string;
  title: string;
  description: string;
  businessValue: string;
  operationalMetrics: {
    efficiency: string;
    timeReduction: string;
    qualityImprovement: string;
    employeeImpact: string;
  };
  agents: string[];
  conversation: ConversationStep[];
}

export const peExecutiveScenarios: ExecutiveScenario[] = [
  {
    id: 'deal-evaluation-acceleration',
    title: 'Enterprise Deal Evaluation Excellence',
    description: 'End-to-end AI deal evaluation platform transforming traditional 8-week processes into 2-week competitive advantages through intelligent automation and risk assessment',
    businessValue: 'Achieve 75% faster deal execution, 94% diligence accuracy improvement, and 80% automation of routine analytical tasks with measurable competitive advantage',
    operationalMetrics: {
      efficiency: 'Deal evaluation: 8 weeks → 2 weeks (75% acceleration)',
      timeReduction: '180+ hours per deal cycle with senior team focus optimization',
      qualityImprovement: 'Diligence accuracy: 78% → 94% with AI-enhanced risk detection',
      employeeImpact: 'Investment professionals elevated to strategic judgment vs data processing'
    },
    agents: ['cim-teaser-summarizer', 'company-profile-builder', 'diligence-scorecard', 'ic-memo-generator'],
    conversation: [
      {
        sender: 'user',
        message: 'As Managing Partner, I need to evaluate 3 simultaneous opportunities for our investment committee in 2 weeks. Demonstrate how Brownloop\'s Kairos platform can transform our deal evaluation process with enterprise-grade AI coordination.',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '🎯 **MANAGING PARTNER: ENTERPRISE DEAL ACCELERATION ACTIVATED**\n\nBrownloop\'s Kairos platform is orchestrating comprehensive evaluation across 3 simultaneous opportunities. Experience how AI transforms traditional deal evaluation from 8-week bottleneck to 2-week competitive advantage.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: '**ENTERPRISE DEAL EVALUATION TRANSFORMATION IN ACTION:**\n\nKairos AI agents delivering measurable operational excellence across deal evaluation:',
        delay: 2000,
        attachments: [{
          type: 'table',
          data: {
            title: 'Kairos Enterprise Deal Evaluation Performance',
            headers: ['Kairos AI Agent', 'Process Transformation', 'Quality Enhancement', 'Efficiency Gain', 'Strategic Value'],
            rows: [
              ['CIM Intelligence', '127-page docs → 2-page executive summary', '94% critical insight capture rate', '18 hours → 45 minutes', 'Investment thesis focus vs data extraction'],
              ['Company Intelligence', '40-hour research → 4-hour analysis', '89% market positioning accuracy', '36 hours → 4 hours', 'Strategic assessment vs manual research'],
              ['AI Diligence Engine', 'Manual scoring → systematic AI evaluation', '92% risk identification precision', '24 hours → 3 hours', 'Risk judgment vs data compilation'],
              ['IC Memo Intelligence', '3-day writing → 3-hour generation', '96% institutional compliance', '21 hours → 3 hours', 'Investment decision vs document production']
            ]
          }
        }]
      },
      {
        sender: 'user',
        message: 'This coordination is remarkable! How does this improve our investment decision quality?',
        delay: 1800
      },
      {
        sender: 'agent',
        message: '**INVESTMENT DECISION QUALITY TRANSFORMATION:**\n\nAI enhances decision-making through comprehensive analysis:',
        delay: 1500,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Investment Decision Quality Improvements',
            items: [
              { label: 'Before AI: Data Analysis Time', value: '70% of deal time', percentage: 70 },
              { label: 'After AI: Data Analysis Time', value: '20% of deal time', percentage: 20 },
              { label: 'Before AI: Strategic Assessment', value: '20% of deal time', percentage: 20 },
              { label: 'After AI: Strategic Assessment', value: '65% of deal time', percentage: 65 },
              { label: 'Before AI: Risk Identification', value: '78% accuracy', percentage: 78 },
              { label: 'After AI: Risk Identification', value: '94% accuracy', percentage: 94 }
            ]
          }
        }]
      },
      {
        sender: 'agent',
        message: '**OPERATIONAL EXCELLENCE ACHIEVED:**\n\n🏆 **Deal Speed:** 8 weeks → 2 weeks evaluation (75% faster execution)\n🏆 **Decision Quality:** 94% diligence accuracy vs 78% manual process\n🏆 **Team Productivity:** Investment professionals focus on judgment vs data processing\n🏆 **Risk Management:** 89% improvement in risk factor identification\n🏆 **Competitive Advantage:** Respond to opportunities faster than competition\n\n**Bottom Line:** AI transforms deal evaluation from manual bottleneck to competitive advantage.',
        delay: 3000,
        attachments: [{
          type: 'alert',
          data: {
            type: 'info',
            title: 'Deal Evaluation Excellence Achieved',
            message: 'AI Deal Evaluation: 75% faster execution with superior quality and enhanced team focus'
          }
        }]
      }
    ]
  },
  {
    id: 'portfolio-management-optimization',
    title: 'AI-Enhanced Portfolio Management',
    description: 'Comprehensive portfolio monitoring and value creation tracking with automated reporting and performance analysis',
    businessValue: 'Achieve 85% reporting automation, improve portfolio visibility by 240%, reduce manual data work by 90%',
    operationalMetrics: {
      efficiency: '80 hours → 12 hours monthly reporting',
      timeReduction: '85% reduction in portfolio administration time',
      qualityImprovement: '96% data accuracy with real-time monitoring',
      employeeImpact: 'Portfolio team focuses on value creation vs data compilation'
    },
    agents: ['financial-data-aggregator', 'operational-metrics-collector', 'contract-intelligence', 'portfolio-chat'],
    conversation: [
      {
        sender: 'user',
        message: 'Show me how AI transforms portfolio management across our 15 portfolio companies with comprehensive monitoring and value creation tracking.',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '📊 **PORTFOLIO MANAGEMENT AI TRANSFORMATION:** Your AI portfolio team is orchestrating comprehensive monitoring across 15 investments. Experience real-time intelligence and automated value creation tracking.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: 'AI PORTFOLIO MANAGEMENT RESULTS:\n\n**Multi-Agent Portfolio Intelligence:**',
        delay: 2000,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'AI Portfolio Management Performance',
            metrics: [
              { label: 'Reporting Time Reduction', value: '85%', trend: 'down', change: 85 },
              { label: 'Data Accuracy', value: '96%', trend: 'up', change: 18 },
              { label: 'Portfolio Visibility', value: '240%', trend: 'up', change: 240 },
              { label: 'Value Creation Tracking', value: '94%', trend: 'up', change: 67 }
            ]
          }
        }]
      },
      {
        sender: 'user',
        message: 'How do the AI agents coordinate to provide this comprehensive portfolio intelligence?',
        delay: 1500
      },
      {
        sender: 'agent',
        message: '**SOPHISTICATED AI PORTFOLIO COORDINATION:**\n\nFour agents delivering portfolio excellence:',
        delay: 1500,
        attachments: [{
          type: 'table',
          data: {
            title: 'AI Portfolio Agent Coordination',
            headers: ['AI Agent', 'Process Transformation', 'Quality Enhancement', 'Time Efficiency', 'Strategic Benefit'],
            rows: [
              ['Financial Aggregator', '80hrs → 12hrs monthly reporting', '96% data accuracy', '85% time reduction', 'Real-time fund performance visibility'],
              ['Metrics Collector', 'Manual KPI gathering → automated', '89% completeness rate', '90% time savings', 'Proactive value creation insights'],
              ['Contract Intelligence', 'Manual contract review → AI analysis', '92% risk identification', '88% automation', 'Revenue security assessment'],
              ['Portfolio Chat', 'Email queries → conversational AI', 'Instant data access', '95% query automation', 'Immediate decision support']
            ]
          }
        }]
      },
      {
        sender: 'agent',
        message: '**PORTFOLIO MANAGEMENT EXCELLENCE:**\n\n🎯 **Real-time Intelligence:** 96% data accuracy with automated collection across 15 companies\n🎯 **Value Creation Focus:** Portfolio team spends 85% time on strategy vs 40% previously\n🎯 **Risk Management:** Proactive identification of portfolio company challenges\n🎯 **LP Communication:** Automated quarterly reporting with enhanced insights\n🎯 **Performance Optimization:** Data-driven value creation recommendations\n\n**Strategic Outcome:** Transform from reactive portfolio administration to proactive value creation',
        delay: 2500,
        attachments: [{
          type: 'alert',
          data: {
            type: 'info',
            title: 'Portfolio Excellence Achieved',
            message: 'AI Portfolio Management: 85% efficiency gain with superior insights and proactive value creation'
          }
        }]
      }
    ]
  },
  {
    id: 'investor-relations-automation',
    title: 'Investor Relations Excellence',
    description: 'Complete LP communication automation with pitchbook generation, quarterly reporting, and DDQ response management',
    businessValue: 'Achieve 80% IR automation, improve LP satisfaction by 94%, reduce compliance workload by 75%',
    operationalMetrics: {
      efficiency: '120 hours → 30 hours quarterly reporting',
      timeReduction: '75% reduction in IR administrative work',
      qualityImprovement: '94% LP satisfaction with communication quality',
      employeeImpact: 'IR team focuses on relationship building vs document creation'
    },
    agents: ['pitchbook-generator', 'quarterly-reporting', 'ddq-response', 'lp-email-assistant'],
    conversation: [
      {
        sender: 'user',
        message: 'Demonstrate how AI transforms our investor relations operations across LP communications, reporting, and compliance.',
        delay: 1000
      },
      {
        sender: 'agent',
        message: '💼 **LP RELATIONS AI TRANSFORMATION:** Your AI IR team is orchestrating comprehensive investor communications. Watch AI revolutionize LP engagement and compliance efficiency.',
        delay: 2000
      },
      {
        sender: 'agent',
        message: 'AI INVESTOR RELATIONS TRANSFORMATION:\n\n**Comprehensive LP Communication Automation:**',
        delay: 2000,
        attachments: [{
          type: 'chart',
          data: {
            title: 'Investor Relations Automation Impact',
            items: [
              { label: 'Quarterly Reporting Time', value: '120hrs → 30hrs', percentage: 75 },
              { label: 'LP Communication Quality', value: '94% satisfaction', percentage: 94 },
              { label: 'DDQ Response Speed', value: '3 days → 6 hours', percentage: 80 },
              { label: 'Pitchbook Creation', value: '5 days → 1 day', percentage: 80 }
            ]
          }
        }]
      },
      {
        sender: 'user',
        message: 'How does this automation improve our LP relationships and fund raising capabilities?',
        delay: 1800
      },
      {
        sender: 'agent',
        message: '**LP RELATIONSHIP ENHANCEMENT:**\n\nAI enables superior investor experience:',
        delay: 1500,
        attachments: [{
          type: 'table',
          data: {
            title: 'LP Experience Enhancement Through AI',
            headers: ['IR Function', 'Before AI', 'After AI', 'LP Benefit', 'Strategic Advantage'],
            rows: [
              ['Quarterly Reports', '120 hours manual work', '30 hours AI-assisted', 'Faster, more detailed reports', 'Enhanced transparency'],
              ['LP Inquiries', '24-48 hour response', '2-4 hour response', 'Immediate data access', 'Superior service quality'],
              ['DDQ Processing', '3 weeks turnaround', '6 hours turnaround', 'Rapid fund evaluation', 'Competitive advantage'],
              ['Pitchbook Creation', '5 days preparation', '1 day customization', 'Tailored presentations', 'Professional impression']
            ]
          }
        }]
      },
      {
        sender: 'agent',
        message: '**INVESTOR RELATIONS EXCELLENCE:**\n\n📈 **Communication Quality:** 94% LP satisfaction with enhanced reporting depth\n📈 **Response Efficiency:** 75% faster response times for all LP inquiries\n📈 **Compliance Excellence:** 100% regulatory compliance with automated verification\n📈 **Fund Raising Advantage:** Professional pitchbooks and rapid DDQ responses\n📈 **Team Productivity:** IR professionals focus on relationship strategy vs document production\n\n**Strategic Outcome:** Transform IR from administrative function to competitive fundraising advantage',
        delay: 3000,
        attachments: [{
          type: 'alert',
          data: {
            type: 'info',
            title: 'IR Excellence Achieved',
            message: 'AI Investor Relations: 80% automation with superior LP experience and fundraising advantage'
          }
        }]
      }
    ]
  }
];

export const peExecutiveOverviewConversation: ConversationStep[] = [
  {
    sender: 'user',
    message: 'I\'m a Managing Partner evaluating Brownloop\'s Kairos platform. Show me the comprehensive operational case for private equity AI transformation.',
    delay: 1000
  },
  {
    sender: 'agent',
    message: '🎯 **MANAGING PARTNER OPERATIONAL BRIEFING:** Welcome to the future of private equity operations. I\'ll demonstrate how Kairos AI agents transform your entire investment lifecycle with measurable efficiency and performance improvements.',
    delay: 2000
  },
  {
    sender: 'agent',
    message: '**PRIVATE EQUITY AI TRANSFORMATION OVERVIEW:**\n\nYour investment in Kairos AI delivers measurable operational excellence:',
    delay: 2000,
    attachments: [{
      type: 'chart',
      data: {
        title: 'Kairos AI Transformation Operational Impact',
        items: [
          { label: 'Deal Evaluation Speed', value: '75% faster execution', percentage: 75 },
          { label: 'Portfolio Reporting Efficiency', value: '85% time reduction', percentage: 85 },
          { label: 'Investment Decision Accuracy', value: '94% quality improvement', percentage: 94 },
          { label: 'LP Communication Excellence', value: '80% automation', percentage: 80 },
          { label: 'Team Productivity', value: '89% strategic focus increase', percentage: 89 }
        ]
      }
    }]
  },
  {
    sender: 'user',
    message: 'What\'s the comprehensive operational impact and implementation timeline for our fund operations?',
    delay: 1500
  },
  {
    sender: 'agent',
    message: '**COMPREHENSIVE PE OPERATIONAL TRANSFORMATION:**\n\nTotal fund operations enhancement with measurable improvements:',
    delay: 1500,
    attachments: [{
      type: 'table',
      data: {
        title: 'Kairos AI Operational Impact Analysis',
        headers: ['Operational Area', 'Efficiency Gain', 'Quality Improvement', 'Team Benefit', 'Implementation Timeline'],
        rows: [
          ['Deal Evaluation', '8 weeks → 2 weeks', '94% diligence accuracy', 'Strategic focus vs data processing', '2-4 months'],
          ['Portfolio Management', '80 hours → 12 hours reporting', '96% data accuracy', 'Value creation vs administration', '1-3 months'],
          ['Investor Relations', '120 hours → 30 hours quarterly', '94% LP satisfaction', 'Relationship building vs document creation', '2-4 months'],
          ['Financial Analysis', '5 days → 1 day valuation', '92% accuracy improvement', 'Investment judgment vs calculation', '1-2 months']
        ]
      }
    }]
  },
  {
    sender: 'agent',
    message: '**MANAGING PARTNER STRATEGIC ADVANTAGES:**\n\n🏆 **Competitive Edge:** Faster deal execution and superior diligence quality\n🏆 **Portfolio Excellence:** Real-time monitoring and proactive value creation\n🏆 **LP Relations:** Enhanced communication quality and fundraising advantage\n🏆 **Team Satisfaction:** 89% of professionals prefer AI-enhanced workflows\n🏆 **Operational Leverage:** Handle 3x more deals with same team size\n🏆 **Fund Performance:** Data-driven decisions and risk management\n\n**Bottom Line:** Kairos transforms PE operations from manual processes to strategic competitive advantage.',
    delay: 3000,
    attachments: [{
      type: 'alert',
      data: {
        type: 'info',
        title: 'PE Transformation Complete',
        message: 'Kairos AI Platform: Measurable operational excellence with superior performance and enhanced team productivity'
      }
    }]
  }
];