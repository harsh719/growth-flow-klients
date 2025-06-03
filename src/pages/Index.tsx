
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Target, TrendingUp, ArrowRight, DollarSign } from 'lucide-react';

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
      title: "Deliver Results", 
      description: "Get consistent meetings and pipeline growth with our proven systematic approach"
    }
  ];

  const niches = [
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "IT Support (Healthcare)",
      description: "Specialized outreach for healthcare IT providers"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-400" />,
      title: "Cybersecurity",
      description: "Generate qualified leads for security solutions"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
      title: "B2B SaaS",
      description: "Scale your software business with targeted outreach"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-400" />,
      title: "Recruitment",
      description: "Scale your talent acquisition business"
    }
  ];

  const testimonials = [
    {
      quote: "KlientsGrowth transformed our lead generation completely. The quality of meetings was exceptional.",
      author: "Sarah Johnson",
      company: "HelpCare AI",
      result: "4 key clients secured"
    },
    {
      quote: "We achieved +85K in additional revenue in just one quarter with their systematic approach.",
      author: "Michael Chen", 
      company: "Vention",
      result: "+85K revenue boost"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              We build <span className="gradient-text">hands-off growth systems</span><br />
              for B2B leaders
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We've helped our clients unlock over <span className="text-purple-400 font-semibold">$7M+</span> in potential deals, 
              freeing them from the hassle of referrals, expensive SDRs, amateur agencies, and worries about the declining economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg hover:opacity-90 text-white border-0 text-lg px-8 py-4">
                <a href="https://cal.com/harsh719/klientsgrowth" target="_blank" rel="noopener noreferrer">
                  Book Free Strategy Call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-300 mb-8">We generated our clients:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-center transition-colors hover:border-[#49de80]">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">+$3M</div>
                <div className="text-gray-300">Revenue generated</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center transition-colors hover:border-[#49de80]">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">+2,500</div>
                <div className="text-gray-300">Sales meetings</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center transition-colors hover:border-[#49de80]">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">+$7M</div>
                <div className="text-gray-300">Sales Pipeline</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven 3-Step Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From system setup to consistent results in just 60 days
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Expertise in Your Industry
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We focus on specific B2B niches to deliver maximum results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {niches.map((niche, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center hover:border-purple-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{niche.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{niche.title}</h3>
                  <p className="text-gray-400 text-sm">{niche.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from Real Clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-l-4 border-l-purple-500 border-gray-700">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-400">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Growth System?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and discover how we can build your hands-off growth system
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100">
            <a href="https://cal.com/harsh719/klientsgrowth" target="_blank" rel="noopener noreferrer">
              Book More Meetings
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
