
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Shield, Gamepad2, Network, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: <Shield className="h-12 w-12 text-purple-400" />,
      company: "HelpCare AI",
      industry: "AI Healthcare Solutions",
      challenge: "Needed to reach healthcare IT decision makers with complex AI messaging",
      solution: "Custom outreach sequences targeting CTOs and IT Directors in healthcare with AI-focused messaging",
      results: {
        meetings: 42,
        timeline: "60 days",
        revenue: "$150,000",
        conversionRate: "14%"
      },
      testimonial: {
        quote: "KlientsGrowth transformed our sales process. The quality of meetings was exceptional - these were real decision makers ready to discuss our AI solutions.",
        author: "Dr. Sarah Johnson",
        title: "Chief Technology Officer"
      }
    },
    {
      icon: <Target className="h-12 w-12 text-purple-400" />,
      company: "Vention",
      industry: "Manufacturing Automation",
      challenge: "Struggling to connect with manufacturing executives about automation solutions",
      solution: "Multi-channel outreach targeting Manufacturing Directors and Plant Managers with automation ROI messaging",
      results: {
        meetings: 35,
        timeline: "45 days",
        revenue: "$200,000",
        conversionRate: "16%"
      },
      testimonial: {
        quote: "The ROI was immediate. We landed multiple six-figure automation contracts from the meetings they generated. Best investment we've made.",
        author: "Michael Chen",
        title: "VP of Sales"
      }
    },
    {
      icon: <Users className="h-12 w-12 text-purple-400" />,
      company: "Elate Staffing",
      industry: "Recruitment & Staffing",
      challenge: "Needed to scale client acquisition for executive search services",
      solution: "Strategic outreach targeting HR Directors and Chief People Officers with executive recruitment messaging",
      results: {
        meetings: 28,
        timeline: "50 days",
        revenue: "$120,000",
        conversionRate: "12%"
      },
      testimonial: {
        quote: "KlientsGrowth helped us connect with the right executives. We closed two major retained search contracts within the first month.",
        author: "Jennifer Rodriguez",
        title: "Founder & CEO"
      }
    },
    {
      icon: <Gamepad2 className="h-12 w-12 text-purple-400" />,
      company: "ForPlayers",
      industry: "Gaming Technology",
      challenge: "Difficulty reaching gaming industry executives and tournament organizers",
      solution: "Targeted outreach to Gaming Studio CEOs and Esports Tournament Directors with gaming platform messaging",
      results: {
        meetings: 31,
        timeline: "55 days",
        revenue: "$95,000",
        conversionRate: "13%"
      },
      testimonial: {
        quote: "They understood our niche market perfectly. The meetings were with exactly the right people in the gaming industry.",
        author: "Alex Thompson",
        title: "Head of Business Development"
      }
    },
    {
      icon: <Network className="h-12 w-12 text-purple-400" />,
      company: "Connect Group",
      industry: "IT Infrastructure",
      challenge: "Needed to penetrate enterprise IT market with infrastructure solutions",
      solution: "Enterprise-focused outreach targeting CISOs and Infrastructure Directors with security and scalability messaging",
      results: {
        meetings: 38,
        timeline: "52 days",
        revenue: "$180,000",
        conversionRate: "15%"
      },
      testimonial: {
        quote: "Outstanding results. We secured multiple enterprise contracts that transformed our business growth trajectory.",
        author: "David Park",
        title: "VP of Enterprise Sales"
      }
    }
  ];

  const metrics = [
    { label: "Average Meetings Delivered", value: "35", unit: "per 60 days" },
    { label: "Client Success Rate", value: "100%", unit: "meet guarantee" },
    { label: "Average Response Rate", value: "14%", unit: "industry leading" },
    { label: "Meeting Show Rate", value: "82%", unit: "qualified prospects" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Results from <span className="text-yellow-300">Real Clients</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              See how we've helped B2B companies generate qualified meetings and drive revenue growth across diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-white mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700 shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Company Info & Challenge */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      {study.icon}
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                        <p className="text-purple-400 font-medium">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results & Testimonial */}
                  <div className="bg-gray-700 p-8 lg:p-12">
                    <h4 className="text-lg font-semibold text-white mb-6">Results</h4>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">{study.results.meetings}</div>
                        <div className="text-sm text-gray-400">Meetings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">{study.results.timeline}</div>
                        <div className="text-sm text-gray-400">Timeline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-1">{study.results.revenue}</div>
                        <div className="text-sm text-gray-400">Revenue Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">{study.results.conversionRate}</div>
                        <div className="text-sm text-gray-400">Response Rate</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-l-purple-400">
                      <p className="text-gray-300 italic mb-4">"{study.testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-white">{study.testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{study.testimonial.title}, {study.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Our Clients Get Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our systematic approach ensures consistent, predictable outcomes across all industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Approach</h3>
                <p className="text-gray-300">Every decision backed by metrics and continuous optimization</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Industry Expertise</h3>
                <p className="text-gray-300">Specialized knowledge across healthcare, manufacturing, gaming, and IT</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
                <p className="text-gray-300">Your success is our priority with ongoing account management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the companies who've transformed their sales with our proven system
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
            <Link to="/contact">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
