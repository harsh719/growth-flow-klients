
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Target, TrendingUp, ArrowRight } from 'lucide-react';

const Index = () => {
  const processes = [
    {
      step: "01",
      title: "Build System",
      description: "We create your custom outbound infrastructure with proven templates and sequences"
    },
    {
      step: "02", 
      title: "Target Decision-Makers",
      description: "Our team identifies and reaches out to your ideal prospects with personalized messaging"
    },
    {
      step: "03",
      title: "Guaranteed Results", 
      description: "Get 30 qualified sales meetings in 60 days or we work for free until you do"
    }
  ];

  const niches = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "IT Support (Healthcare)",
      description: "Specialized outreach for healthcare IT providers"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Cybersecurity",
      description: "Generate qualified leads for security solutions"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Recruitment",
      description: "Scale your talent acquisition business"
    }
  ];

  const testimonials = [
    {
      quote: "KlientsGrowth delivered exactly what they promised. We got 35 qualified meetings in just 45 days.",
      author: "Sarah Johnson",
      company: "SecureShield Cybersecurity",
      result: "$90k in new revenue"
    },
    {
      quote: "The ROI was immediate. We landed 2 retained contracts from the 28 meetings they generated.",
      author: "Michael Chen", 
      company: "TalentBridge Recruitment",
      result: "2 retained contracts"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get <span className="text-blue-600">30 Sales Meetings</span><br />
              in 60 Days — Guaranteed
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We build outbound systems for B2B companies. Stop struggling with cold outreach 
              and start booking qualified meetings consistently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link to="/contact">Book Free Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From system setup to guaranteed results in just 60 days
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Expertise in Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We focus on specific B2B niches to deliver maximum results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {niches.map((niche, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{niche.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{niche.title}</h3>
                  <p className="text-gray-600">{niche.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your First 30 Meetings?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and discover how we can build your outbound system
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link to="/contact">
              Book Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
