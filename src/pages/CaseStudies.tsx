
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      company: "SecureShield Cybersecurity",
      industry: "Cybersecurity",
      challenge: "Struggling to reach enterprise IT decision makers with complex security messaging",
      solution: "Custom outreach sequences targeting CISOs and IT Directors with security-focused messaging",
      results: {
        meetings: 35,
        timeline: "45 days",
        revenue: "$90,000",
        conversionRate: "12%"
      },
      testimonial: {
        quote: "KlientsGrowth transformed our sales process. The quality of meetings was exceptional - these were real decision makers ready to discuss our solutions.",
        author: "Sarah Johnson",
        title: "VP of Sales"
      }
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      company: "TalentBridge Recruitment",
      industry: "Recruitment",
      challenge: "Needed to scale client acquisition for retained search services",
      solution: "Multi-channel outreach targeting HR Directors and Chief People Officers",
      results: {
        meetings: 28,
        timeline: "52 days", 
        revenue: "2 retained contracts",
        conversionRate: "15%"
      },
      testimonial: {
        quote: "The ROI was immediate. We landed two six-figure retained contracts from the meetings they generated. Best investment we've made.",
        author: "Michael Chen",
        title: "Founder & CEO"
      }
    }
  ];

  const metrics = [
    { label: "Average Meetings Delivered", value: "32", unit: "per 60 days" },
    { label: "Client Success Rate", value: "100%", unit: "meet guarantee" },
    { label: "Average Response Rate", value: "8.5%", unit: "industry leading" },
    { label: "Meeting Show Rate", value: "78%", unit: "qualified prospects" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results from <span className="text-blue-600">Real Clients</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how we've helped B2B companies generate qualified meetings and drive revenue growth
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Company Info & Challenge */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      {study.icon}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <p className="text-blue-600 font-medium">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results & Testimonial */}
                  <div className="bg-blue-50 p-8 lg:p-12">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Results</h4>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">{study.results.meetings}</div>
                        <div className="text-sm text-gray-600">Meetings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">{study.results.timeline}</div>
                        <div className="text-sm text-gray-600">Timeline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">{study.results.revenue}</div>
                        <div className="text-sm text-gray-600">Revenue Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">{study.results.conversionRate}</div>
                        <div className="text-sm text-gray-600">Response Rate</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border-l-4 border-l-blue-600">
                      <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900">{study.testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{study.testimonial.title}, {study.company}</p>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Clients Get Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures consistent, predictable outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Approach</h3>
                <p className="text-gray-600">Every decision backed by metrics and continuous optimization</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
                <p className="text-gray-600">Specialized knowledge in cybersecurity, IT support, and recruitment</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
                <p className="text-gray-600">Your success is our priority with ongoing account management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the companies who've transformed their sales with our proven system
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
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
