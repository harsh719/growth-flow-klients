
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Target, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Lead Research & Targeting",
      description: "We identify and qualify your ideal prospects using advanced data intelligence"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-400" />,
      title: "Personalized Outreach",
      description: "Custom messaging sequences tailored to your industry and value proposition"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
      title: "CRM Setup & Management",
      description: "Complete sales infrastructure with automated follow-ups and tracking"
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-400" />,
      title: "Calendar Integration",
      description: "Seamless booking system that converts prospects into scheduled meetings"
    }
  ];

  const included = [
    "Dedicated account manager",
    "Custom outreach sequences",
    "Lead research and qualification",
    "CRM setup and management",
    "Monthly strategy sessions",
    "Real-time reporting dashboard",
    "Email deliverability optimization",
    "A/B testing and optimization"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Done-For-You <span className="text-yellow-300">Growth Systems</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We build, manage, and optimize your entire outbound sales infrastructure. 
              Focus on closing deals while we generate qualified meetings.
            </p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Start Your Growth System</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Outbound Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to scale your B2B sales, managed by experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-700 border-gray-600">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything Included in Your Growth System
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                No hidden fees, no surprises. Get a complete outbound sales system 
                with ongoing optimization and support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-gray-800 border-gray-700 shadow-xl">
              <CardHeader className="gradient-bg text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Our Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-4">32</div>
                <p className="text-xl font-semibold text-white mb-4">
                  Qualified Meetings in 60 Days
                </p>
                <p className="text-gray-300 mb-6">
                  If we don't deliver 32 qualified sales meetings in your first 60 days, 
                  we'll work for free until we do.
                </p>
                <Button asChild className="w-full bg-white text-gray-900 hover:bg-gray-100">
                  <Link to="/contact">
                    Claim Your Guarantee
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Journey to 32 Meetings
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here's exactly what happens in your first 60 days
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 gradient-bg text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Week 1-2: Setup & Strategy</h3>
                <p className="text-gray-300">CRM configuration, messaging development, and target list building</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 gradient-bg text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Week 3-4: Launch & Optimize</h3>
                <p className="text-gray-300">Begin outreach campaigns and optimize based on initial response data</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 gradient-bg text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Week 5-8: Scale & Deliver</h3>
                <p className="text-gray-300">Ramp up successful sequences and deliver your guaranteed 32 meetings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Growth System?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a custom outbound strategy
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
            <Link to="/contact">
              Schedule Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
