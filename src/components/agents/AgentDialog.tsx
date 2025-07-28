import React, { useState, useEffect, useRef } from 'react';
import { X, Send, ChevronDown, PanelRightOpen, BarChart, Play, Pause, RotateCcw } from 'lucide-react';
import { AgentType } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import { getAgentIcon } from '../../data/agentsData';
import { allAgentConversations, type ConversationStep } from '../../data/conversations';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: Date;
  isTyping?: boolean;
  attachments?: {
    type: 'chart' | 'table' | 'metrics' | 'alert';
    data: any;
  }[];
}

interface AgentDialogProps {
  agent: AgentType;
  onClose: () => void;
}

// Topic configurations for different conversation scenarios
const conversationTopics: Record<string, { label: string; color: string; description: string }[]> = {
  'cim-teaser-summarizer': [
    { label: 'Healthcare Services Deal', color: 'bg-green-100 text-green-800 border-green-200', description: '$45M EBITDA healthcare platform analysis' },
    { label: 'Tech SaaS Summary', color: 'bg-blue-100 text-blue-800 border-blue-200', description: 'B2B SaaS company teaser analysis' }
  ],
  'company-profile-builder': [
    { label: 'FinTech Platform Profile', color: 'bg-purple-100 text-purple-800 border-purple-200', description: 'B2B payments platform evaluation' }
  ],
  'diligence-scorecard': [
    { label: 'Manufacturing Acquisition', color: 'bg-orange-100 text-orange-800 border-orange-200', description: '$175M manufacturing deal with compliance complexity' }
  ],
  'ic-memo-generator': [
    { label: 'Series B Investment', color: 'bg-blue-100 text-blue-800 border-blue-200', description: '$25M cybersecurity company investment' }
  ],
  'underwriting-reconciler': [
    { label: 'Performance Attribution', color: 'bg-red-100 text-red-800 border-red-200', description: 'DataCorp 18-month performance analysis' }
  ],
  'value-creation-tracker': [
    { label: 'Operational Improvement', color: 'bg-green-100 text-green-800 border-green-200', description: 'ManufacturingCo efficiency initiative tracking' }
  ],
  'financial-data-aggregator': [
    { label: 'Portfolio Quarterly Review', color: 'bg-green-100 text-green-800 border-green-200', description: 'Q3 performance across 15 companies' }
  ],
  'operational-metrics-collector': [
    { label: 'SaaS Metrics Collection', color: 'bg-blue-100 text-blue-800 border-blue-200', description: 'Customer acquisition metrics across SaaS portfolio' }
  ],
  'vendor-spend-analyzer': [
    { label: 'Cost Optimization', color: 'bg-purple-100 text-purple-800 border-purple-200', description: 'IT vendor consolidation analysis' }
  ],
  'contract-intelligence': [
    { label: 'Customer Contract Analysis', color: 'bg-purple-100 text-purple-800 border-purple-200', description: 'SaaS renewal risk assessment' }
  ],
  'portfolio-chat': [
    { label: 'Performance Query', color: 'bg-blue-100 text-blue-800 border-blue-200', description: 'Portfolio company performance analysis' }
  ],
  'pitchbook-generator': [
    { label: 'LP Presentation', color: 'bg-indigo-100 text-indigo-800 border-indigo-200', description: 'Q3 fund performance with exit highlights' }
  ],
  'quarterly-reporting': [
    { label: 'Investor Report', color: 'bg-green-100 text-green-800 border-green-200', description: 'Q3 comprehensive investor reporting' }
  ],
  'ddq-response': [
    { label: 'Institutional DDQ', color: 'bg-blue-100 text-blue-800 border-blue-200', description: 'Pension fund due diligence response' }
  ],
  'comparable-analysis': [
    { label: 'Valuation Benchmarking', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', description: 'B2B software company valuation' }
  ],
  'valuation-memo': [
    { label: 'Acquisition Valuation', color: 'bg-green-100 text-green-800 border-green-200', description: '$125M manufacturing company valuation' }
  ],
  'cash-flow-forecasting': [
    { label: 'Scenario Modeling', color: 'bg-purple-100 text-purple-800 border-purple-200', description: 'SaaS 18-month cash flow forecast' }
  ],
  'opportunity-sourcing': [
    { label: 'Sector Sourcing', color: 'bg-purple-100 text-purple-800 border-purple-200', description: 'Healthcare tech AI opportunities' }
  ],
  'outreach-personalization': [
    { label: 'CEO Outreach', color: 'bg-blue-100 text-blue-800 border-blue-200', description: 'FinTech Series B targeted outreach' }
  ],
  'call-transcript-analyzer': [
    { label: 'Management Presentation', color: 'bg-orange-100 text-orange-800 border-orange-200', description: 'Software company investment analysis' }
  ]
};

const AgentDialog: React.FC<AgentDialogProps> = ({ agent, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTopicIndex, setActiveTopicIndex] = useState<number | null>(null);
  const [currentTypingText, setCurrentTypingText] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayStopRef = useRef(false);
  
  const Icon = getAgentIcon(agent.icon);
  const availableTopics = conversationTopics[agent.id] || [
    { label: 'General Demo', color: 'bg-gray-100 text-gray-800 border-gray-200', description: 'Standard agent capabilities' }
  ];
  
  useEffect(() => {
    if (inputRef.current && !isAutoplay) {
      inputRef.current.focus();
    }
  }, [isAutoplay]);
  
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => {
      autoplayTimeoutRef.current = setTimeout(resolve, ms);
    });
  };

  const simulateUserTyping = async (text: string): Promise<void> => {
    if (autoplayStopRef.current) return;
    
    setCurrentTypingText('');
    setInput('');
    
    for (let i = 0; i <= text.length; i++) {
      if (autoplayStopRef.current) break;
      
      const currentText = text.substring(0, i);
      setCurrentTypingText(currentText);
      setInput(currentText);
      
      const typingDelay = 53 + Math.random() * 27;
      await sleep(typingDelay);
    }
    
    setCurrentTypingText('');
  };

  const simulateAgentTyping = async (text: string, attachments?: any[]): Promise<void> => {
    if (autoplayStopRef.current) return;
    
    const typingMessage = addMessage({
      sender: 'agent',
      text: '',
      isTyping: true
    });

    await sleep(1000);
    
    if (autoplayStopRef.current) return;

    for (let i = 0; i <= text.length; i++) {
      if (autoplayStopRef.current) break;
      
      const currentText = text.substring(0, i);
      setMessages(prev => prev.map(msg => 
        msg.id === typingMessage.id 
          ? { ...msg, text: currentText }
          : msg
      ));
      
      const typingDelay = 30 + Math.random() * 20;
      await sleep(typingDelay);
    }
    
    if (!autoplayStopRef.current) {
      setMessages(prev => prev.map(msg => 
        msg.id === typingMessage.id 
          ? { ...msg, isTyping: false, attachments }
          : msg
      ));
    }
  };

  const getConversationForTopic = (topicIndex: number): ConversationStep[] => {
    console.log('Getting conversation for agent:', agent.id, 'topic index:', topicIndex);
    
    // Get agent conversations
    const agentConversations = allAgentConversations[agent.id];
    
    if (!agentConversations) {
      console.log('No conversations found for agent:', agent.id, 'using default');
      return allAgentConversations.default?.['general-demo'] || [
        {
          sender: 'user',
          message: `Tell me about your ${agent.title} capabilities.`,
          delay: 1000
        },
        {
          sender: 'agent', 
          message: `I'm the ${agent.title}. ${agent.description}`,
          delay: 2000
        },
        {
          sender: 'agent',
          message: agent.exampleResponse || 'I can help you with various marketing tasks and provide detailed analysis and insights.',
          delay: 2000,
          attachments: [{
            type: 'metrics',
            data: {
              title: 'Sample Performance Metrics',
              metrics: [
                { label: 'Processing Efficiency', value: '94%', trend: 'up', change: 12 },
                { label: 'Accuracy Rate', value: '96.8%', trend: 'up', change: 2.1 },
                { label: 'Response Time', value: '1.2s', trend: 'down', change: 15 },
                { label: 'Client Satisfaction', value: '4.7/5', trend: 'up', change: 3 }
              ]
            }
          }]
        }
      ];
    }
    
    // Get available conversation keys
    const conversationKeys = Object.keys(agentConversations);
    console.log('Available conversation keys for', agent.id, ':', conversationKeys);
    
    if (conversationKeys.length === 0) {
      return allAgentConversations.default?.['general-demo'] || [];
    }
    
    // Check if this is a nested structure (agent has subcategories)
    const firstKey = conversationKeys[0];
    const firstConversation = agentConversations[firstKey];
    
    if (Array.isArray(firstConversation)) {
      // This is a flat structure - conversations are directly under agent id
      const selectedKey = conversationKeys[topicIndex] || conversationKeys[0];
      console.log('Using flat structure, selected key:', selectedKey);
      return agentConversations[selectedKey] || [];
    } else if (typeof firstConversation === 'object') {
      // This is a nested structure - need to go one level deeper
      const nestedKeys = Object.keys(firstConversation);
      console.log('Nested structure detected, nested keys:', nestedKeys);
      
      if (nestedKeys.length > topicIndex) {
        const selectedNestedKey = nestedKeys[topicIndex];
        console.log('Selected nested key:', selectedNestedKey);
        return firstConversation[selectedNestedKey] || [];
      } else {
        // Use first available nested conversation
        const firstNestedKey = nestedKeys[0];
        console.log('Using first nested key:', firstNestedKey);
        return firstConversation[firstNestedKey] || [];
      }
    }
    
    // Fallback to default
    return allAgentConversations.default?.['general-demo'] || [];
  };

  const startTopicDemo = async (topicIndex: number) => {
    console.log('Starting topic demo for:', agent.id, 'topic index:', topicIndex);
    
    setIsAutoplay(true);
    setActiveTopicIndex(topicIndex);
    setMessages([]);
    setAutoplayProgress(0);
    setCurrentTypingText('');
    setInput('');
    autoplayStopRef.current = false;

    const conversationFlow = getConversationForTopic(topicIndex);
    console.log('Conversation flow:', conversationFlow);

    if (!conversationFlow || conversationFlow.length === 0) {
      console.error('No conversation flow found for agent:', agent.id, 'topic:', topicIndex);
      
      // Create a fallback conversation
      const fallbackConversation: ConversationStep[] = [
        {
          sender: 'user',
          message: `Tell me about your ${agent.title} capabilities.`,
          delay: 1000
        },
        {
          sender: 'agent',
          message: `I'm the ${agent.title}. ${agent.description}`,
          delay: 2000
        },
        {
          sender: 'agent',
          message: agent.exampleResponse || 'I can help you with various insurance-related tasks and provide detailed analysis and insights.',
          delay: 2000,
          attachments: [{
            type: 'metrics',
            data: {
              title: 'Sample Performance Metrics',
              metrics: [
                { label: 'Processing Efficiency', value: '94%', trend: 'up', change: 12 },
                { label: 'Accuracy Rate', value: '96.8%', trend: 'up', change: 2.1 },
                { label: 'Response Time', value: '1.2s', trend: 'down', change: 15 },
                { label: 'Client Satisfaction', value: '4.7/5', trend: 'up', change: 3 }
              ]
            }
          }]
        }
      ];
      
      // Use fallback conversation
      for (let i = 0; i < fallbackConversation.length; i++) {
        if (autoplayStopRef.current) break;

        const step = fallbackConversation[i];
        setAutoplayProgress(((i + 1) / fallbackConversation.length) * 100);

        await sleep(step.delay || 1500);

        if (autoplayStopRef.current) break;

        if (step.sender === 'user') {
          await simulateUserTyping(step.message);
          
          if (autoplayStopRef.current) break;
          
          await sleep(500);
          
          if (autoplayStopRef.current) break;
          
          addMessage({
            sender: 'user',
            text: step.message
          });
          
          setInput('');
          setCurrentTypingText('');
          
        } else {
          await simulateAgentTyping(step.message, step.attachments);
        }
      }
      
      if (!autoplayStopRef.current) {
        setAutoplayProgress(100);
        setTimeout(() => {
          setIsAutoplay(false);
          setActiveTopicIndex(null);
          setCurrentTypingText('');
        }, 1000);
      }
      return;
    }

    for (let i = 0; i < conversationFlow.length; i++) {
      if (autoplayStopRef.current) break;

      const step = conversationFlow[i];
      setAutoplayProgress(((i + 1) / conversationFlow.length) * 100);

      await sleep(step.delay || 1500);

      if (autoplayStopRef.current) break;

      if (step.sender === 'user') {
        await simulateUserTyping(step.message);
        
        if (autoplayStopRef.current) break;
        
        await sleep(500);
        
        if (autoplayStopRef.current) break;
        
        addMessage({
          sender: 'user',
          text: step.message
        });
        
        setInput('');
        setCurrentTypingText('');
        
      } else {
        await simulateAgentTyping(step.message, step.attachments);
      }
    }

    if (!autoplayStopRef.current) {
      setAutoplayProgress(100);
      setTimeout(() => {
        setIsAutoplay(false);
        setActiveTopicIndex(null);
        setCurrentTypingText('');
      }, 1000);
    }
  };

  const stopAutoplay = () => {
    autoplayStopRef.current = true;
    setIsAutoplay(false);
    setActiveTopicIndex(null);
    setCurrentTypingText('');
    setInput('');
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  };

  const resetConversation = () => {
    stopAutoplay();
    setMessages([]);
    setAutoplayProgress(0);
    setActiveTopicIndex(null);
    setCurrentTypingText('');
    setInput('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing || isAutoplay) return;
    
    const userMessage = input;
    setInput('');
    setIsProcessing(true);

    addMessage({
      sender: 'user',
      text: userMessage
    });
    
    await sleep(1000);
    
    await simulateAgentTyping(agent.exampleResponse || 'Thank you for your question. I\'m processing your request and will provide detailed analysis shortly.');
    
    setIsProcessing(false);
  };

  const renderVisualization = (attachment: any) => {
    switch (attachment.type) {
      case 'chart':
        return (
          <Card className="mt-3 p-4 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-3">
              <BarChart size={16} className="text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {attachment.data.title}
              </span>
            </div>
            <div className="space-y-2">
              {attachment.data.items.map((item: any, i: number) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );

      case 'metrics':
        return (
          <Card className="mt-3 p-4 bg-white dark:bg-gray-800">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {attachment.data.title}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {attachment.data.metrics.map((metric: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {metric.label}
                  </div>
                  {metric.trend && (
                    <div className={`text-xs ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.trend === 'up' ? '↑' : '↓'} {metric.change}%
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        );

      case 'table':
        return (
          <Card className="mt-3 p-4 bg-white dark:bg-gray-800 overflow-x-auto">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {attachment.data.title}
            </h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  {attachment.data.headers.map((header: string, i: number) => (
                    <th key={i} className="text-left py-2 px-3 font-medium text-gray-700 dark:text-gray-300">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attachment.data.rows.map((row: any[], i: number) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                    {row.map((cell, j) => (
                      <td key={j} className="py-2 px-3 text-gray-600 dark:text-gray-400">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        );

      case 'alert':
        return (
          <div className={`mt-3 p-3 rounded-lg border-l-4 ${
            attachment.data.type === 'warning' 
              ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400'
              : attachment.data.type === 'error'
              ? 'bg-red-50 dark:bg-red-900/20 border-red-400'
              : 'bg-blue-50 dark:bg-blue-900/20 border-blue-400'
          }`}>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {attachment.data.title}
              </span>
              <Badge 
                variant={
                  attachment.data.type === 'warning' ? 'warning' : 
                  attachment.data.type === 'error' ? 'danger' : 'info'
                }
                className="ml-2"
              >
                {attachment.data.type}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {attachment.data.message}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div className="flex items-center">
            <div className="rounded-lg p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
              <Icon size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{agent.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{agent.description}</p>
              <div className="flex items-center mt-1 space-x-2">
                <Badge variant={agent.status === 'online' ? 'success' : 'warning'}>
                  {agent.status}
                </Badge>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Specialized in private equity operations
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Chat area */}
        <div className="flex-1 overflow-hidden flex">
          {/* Main chat */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6 max-w-4xl mx-auto">
                {messages.length === 0 && !isAutoplay && (
                  <div className="text-center py-12">
                    <div className="rounded-full p-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Start a conversation with {agent.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Choose a scenario below or ask your own questions
                    </p>
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      Try: "{agent.examplePrompt || `What are your key PE capabilities?`}"
                    </div>
                  </div>
                )}

                {messages.map(message => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.sender === 'agent' && (
                      <div className="flex h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                    )}
                    
                    <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                      <div 
                        className={`px-6 py-4 rounded-2xl ${
                          message.sender === 'user' 
                            ? 'bg-indigo-600 text-white rounded-tr-none' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {message.text}
                          {message.isTyping && (
                            <span className="inline-block w-2 h-5 bg-current opacity-50 animate-pulse ml-1" />
                          )}
                        </p>
                      </div>
                      
                      {/* Render attachments */}
                      {message.attachments?.map((attachment, i) => (
                        <div key={i}>
                          {renderVisualization(attachment)}
                        </div>
                      ))}
                      
                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="flex h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-700 items-center justify-center ml-3 mt-1 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-medium">
                          U
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                <div ref={messageEndRef} />
              </div>
            </div>
            
            {/* Topic Tags Section */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    PE Demo Scenarios
                  </h4>
                  {isAutoplay && (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={stopAutoplay}
                        className="flex items-center space-x-2 px-3 py-1 rounded-md text-xs font-medium bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
                      >
                        <Pause size={12} />
                        <span>Stop</span>
                      </button>
                      <button
                        onClick={resetConversation}
                        className="flex items-center space-x-2 px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        <RotateCcw size={12} />
                        <span>Reset</span>
                      </button>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div 
                            className="bg-indigo-500 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${autoplayProgress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          {Math.round(autoplayProgress)}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {availableTopics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => startTopicDemo(index)}
                      disabled={isAutoplay}
                      className={`
                        group relative px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200
                        ${isAutoplay && activeTopicIndex === index 
                          ? 'ring-2 ring-indigo-500 ring-offset-1' 
                          : ''
                        }
                        ${isAutoplay 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:shadow-sm hover:-translate-y-0.5 cursor-pointer'
                        }
                        ${topic.color}
                      `}
                      title={topic.description}
                    >
                      <div className="flex items-center space-x-1">
                        {isAutoplay && activeTopicIndex === index && (
                          <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
                        )}
                        <span>{topic.label}</span>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {topic.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Input area */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="flex space-x-3 max-w-4xl mx-auto">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder={isAutoplay ? "Auto-conversation in progress..." : `Ask ${agent.title}...`}
                  value={isAutoplay ? currentTypingText : input}
                  onChange={(e) => !isAutoplay && setInput(e.target.value)}
                  fullWidth
                  className="flex-1"
                  disabled={isAutoplay}
                  readOnly={isAutoplay}
                />
                <Button 
                  type="submit" 
                  variant="primary"
                  icon={<Send size={18} />}
                  isLoading={isProcessing}
                  disabled={!input.trim() || isAutoplay}
                  className="px-6"
                >
                  Send
                </Button>
              </form>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center max-w-4xl mx-auto">
                Enterprise AI agent demonstration powered by Brownloop Kairos Intelligence Platform. Conversations showcase realistic private equity operational scenarios.
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="ml-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {showDetails ? 'Hide' : 'Show'} agent details
                </button>
              </p>
            </div>
          </div>

          {/* Side panel with details */}
          {showDetails && (
            <div className="w-80 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 overflow-y-auto">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Agent Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Capabilities</h4>
                  <div className="space-y-2">
                    {[
                      'Private equity analysis',
                      'Deal evaluation & diligence',
                      'Portfolio company monitoring',
                      'Financial modeling & valuation',
                      'LP relations & reporting'
                    ].map((capability, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Performance</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Accuracy</span>
                        <span className="font-medium text-gray-900 dark:text-white">94.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.2%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Response Time</span>
                        <span className="font-medium text-gray-900 dark:text-white">1.2s</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Activity</h4>
                  <div className="space-y-2">
                    {[
                      'Analyzed 47 investment opportunities',
                      'Generated 18 IC memorandums',
                      'Completed 23 portfolio company reviews',
                      'Updated 12 company valuations'
                    ].map((activity, i) => (
                      <div key={i} className="text-sm text-gray-600 dark:text-gray-400">
                        • {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDialog;