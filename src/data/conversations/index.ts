// Define the interface first
export interface ConversationStep {
  sender: 'user' | 'agent';
  message: string;
  delay?: number;
  attachments?: {
    type: 'chart' | 'table' | 'metrics' | 'alert';
    data: any;
  }[];
}

// Export individual conversation modules
;
;

// Import all conversations
import { peConversations } from './peConversations';
import { peExecutiveScenarios, peExecutiveOverviewConversation } from './peExecutiveStoryMode';

// Combine all conversations - now structured by agent and topic
export const allAgentConversations: Record<string, Record<string, ConversationStep[]>> = {
  ...peConversations,
  
  // Executive story mode conversations
  'executive-overview': {
    'strategic-briefing': peExecutiveOverviewConversation
  },
  ...Object.fromEntries(
    peExecutiveScenarios.map(scenario => [
      scenario.id,
      { 'executive-demo': scenario.conversation }
    ])
  ),
  
  // Default conversation for any missing agents
  default: {
    'general-demo': [
      {
        sender: 'user',
        message: 'Hello! I\'d like to learn more about your private equity capabilities.',
        delay: 1000
      },
      {
        sender: 'agent',
        message: 'Hello! I\'m an AI agent specialized in private equity operations. I can help with deal analysis, portfolio management, and investment decision support across the PE lifecycle.',
        delay: 2000
      },
      {
        sender: 'user',
        message: 'Can you show me some example investment analysis?',
        delay: 1500
      },
      {
        sender: 'agent',
        message: 'Absolutely! Here\'s a sample of the kind of investment analysis I can provide:',
        delay: 1500,
        attachments: [{
          type: 'metrics',
          data: {
            title: 'Sample Investment Performance Metrics',
            metrics: [
              { label: 'Fund IRR', value: '19.3%', trend: 'up', change: 12 },
              { label: 'Portfolio Performance', value: '94.2%', trend: 'up', change: 2.1 },
              { label: 'Deal Analysis Time', value: '1.8 days', trend: 'down', change: 15 },
              { label: 'LP Satisfaction', value: '4.7/5', trend: 'up', change: 3 }
            ]
          }
        }]
      },
      {
        sender: 'agent',
        message: 'I can provide real-time analysis, generate investment memos, optimize portfolio performance, and help with decision-making across deal sourcing, due diligence, and portfolio management operations.',
        delay: 2500
      }
    ]
  }
};
