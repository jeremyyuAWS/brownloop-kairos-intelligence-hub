import React from 'react';
import { X, Award, TrendingUp, Users, Network, BarChart, Shield } from 'lucide-react';
import Button from './Button';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
              <img 
                src="/images/Brownloop-logo.jpeg" 
                alt="Brownloop" 
                className="h-6 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="currentColor" style={{ display: 'none' }}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to Kairos Intelligence Hub</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="px-6 py-5 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="text-center mb-6">
            <img 
              src="/images/Brownloop-logo-2.png" 
              alt="Brownloop Kairos Intelligence Platform" 
              className="h-16 w-auto mx-auto mb-4"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                // Brownloop branding maintained
              }}
            />
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
              Brownloop Kairos AI Intelligence Platform
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Experience Brownloop's enterprise-grade AI transformation platform for private equity operations. Kairos delivers measurable fund performance improvements through sophisticated AI agents, advanced investment intelligence, and institutional-grade governance frameworks.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Tab 1: Executive Demo */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">1. PE Executive Demo Mode</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  <strong>Interactive GP scenarios</strong> demonstrating AI transformation impact across critical private equity operations:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 ml-2 space-y-1">
                  <li><strong>Deal Evaluation Process:</strong> 75% faster diligence with 94% accuracy improvement</li>
                  <li><strong>Portfolio Operations:</strong> 85% reporting time reduction with 89% data consistency</li>
                  <li><strong>Investment Committee Preparation:</strong> 80% faster memo creation with comprehensive analysis</li>
                  <li><strong>LP Relations Management:</strong> 80% automation with superior communication quality</li>
                  <li><strong>Strategic Investment Case:</strong> Complete operational analysis with measurable efficiency gains</li>
                </ul>
                <div className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                  Business Value: Operational excellence with measurable efficiency and quality improvements
                </div>
              </div>
            </div>
            
            {/* Tab 2: AI Agents Hub */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">2. PE AI Agents Hub</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  <strong>17 specialized private equity AI agents</strong> with rich autoplay conversations covering every aspect of PE operations:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 ml-2 space-y-1">
                  <li><strong>Deal Team Operations:</strong> CIM analysis, company profiling, diligence coordination, IC memo generation</li>
                  <li><strong>Portfolio Management:</strong> Financial aggregation, operational metrics, contract intelligence, performance tracking</li>
                  <li><strong>Investor Relations:</strong> Pitchbook creation, quarterly reporting, DDQ responses, LP communications</li>
                  <li><strong>Interactive Scenarios:</strong> Deal evaluation, portfolio optimization, fund raising, market analysis</li>
                </ul>
                <div className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  Business Value: Team productivity and quality improvements across all private equity functions
                </div>
              </div>
            </div>

            {/* Tab 3: OGI Network */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Network className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">3. OGI Network (Operational Graph Intelligence)</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  <strong>Live private equity operations visualization</strong> showing interconnected relationships between all investment elements:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 ml-2 space-y-1">
                  <li><strong>Interactive Knowledge Graph:</strong> D3-powered network of deals, portfolio companies, metrics, and processes</li>
                  <li><strong>Real-time Intelligence:</strong> Live agent status, system connections, and investment data flow monitoring</li>
                  <li><strong>Relationship Analysis:</strong> Understanding how investment elements influence fund performance</li>
                  <li><strong>AI Assistant Integration:</strong> Query the knowledge graph with natural language</li>
                </ul>
                <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                  Business Value: Real-time operational visibility and intelligent decision support
                </div>
              </div>
            </div>
            
            {/* Tab 4: Analytics Center */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">4. Investment Analytics Center</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  <strong>Comprehensive investment intelligence</strong> across all PE operations with real-time insights and predictive analytics:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 ml-2 space-y-1">
                  <li><strong>Fund Performance:</strong> IRR, TVPI, DPI tracking with vintage year benchmarking and peer comparison</li>
                  <li><strong>Portfolio Analytics:</strong> Company performance, value creation tracking, and operational KPI monitoring</li>
                  <li><strong>Deal Flow Intelligence:</strong> Pipeline conversion, sourcing effectiveness, and competitive market analysis</li>
                  <li><strong>LP Relations Analytics:</strong> Investor engagement, communication effectiveness, and fundraising pipeline</li>
                  <li><strong>Market Intelligence:</strong> Sector trends, valuation multiples, and exit timing optimization</li>
                </ul>
                <div className="mt-2 text-sm font-medium text-orange-600 dark:text-orange-400">
                  Business Value: Performance visibility and data-driven optimization across all private equity operations
                </div>
              </div>
            </div>

            {/* Tab 5: AI Governance */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">5. PE AI Governance & Responsible AI</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  <strong>Complete AI ethics and governance framework</strong> ensuring responsible PE AI deployment with regulatory compliance:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 ml-2 space-y-1">
                  <li><strong>Investment Lineage Tracking:</strong> Complete visibility into investment data sources, analysis, and decision flow</li>
                  <li><strong>Bias Detection Monitoring:</strong> Automated scanning for demographic or sector bias in investment decisions</li>
                  <li><strong>Decision Explainability:</strong> AI-generated explanations for investment recommendations and portfolio decisions</li>
                  <li><strong>Compliance Audit Trails:</strong> Immutable logs for regulatory compliance and LP transparency</li>
                  <li><strong>Investment Policy Engine:</strong> Configurable fund mandates and investment approval workflows</li>
                </ul>
                <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Business Value: Regulatory protection, quality assurance, and responsible AI deployment
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p>
              <strong>Demo Features:</strong> All conversations are fully automated with realistic private equity scenarios. 
              Start with the PE Executive Demo for operational impact, then explore individual agents for detailed capabilities.
            </p>
            <p className="mt-2">
              <strong>Kairos Intelligence Hub:</strong> Advanced AI agent framework enabling sophisticated private equity operations automation 
              with measurable efficiency gains, quality improvements, and enhanced team productivity.
            </p>
          </div>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex justify-end">
          <Button variant="primary" onClick={onClose}>
            Explore Kairos Intelligence Platform
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;