
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const trackRecord = [
    {
      number: "30+",
      label: "Companies Scaled"
    },
    {
      number: "2500+", 
      label: "Meetings Generated"
    },
    {
      number: "$3M+",
      label: "Revenue Generated"
    },
    {
      number: "100%",
      label: "Guaranteed Success"
    }
  ];

  const team = [
    {
      name: "Harsh Shah",
      role: "Founder & CEO",
      initials: "HS",
      description: "3+ years of experience in B2B Outbound and SEO. Scaled 30+ companies using outbound and SEO."
    },
    {
      name: "Twinkal Shah",
      role: "CTO", 
      initials: "TS",
      description: "2+ years of experience building tech infrastructure for outbound and inbound strategies, including success-enabling tools."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-purple-400" />,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes in mind"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Client-Focused",
      description: "Your success is our success. We're invested in your growth"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
      title: "Innovation",
      description: "We stay ahead of industry trends to keep you competitive"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-400" />,
      title: "Transparency",
      description: "Clear communication and honest reporting in everything we do"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">KlientsGrowth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're the growth partner that B2B companies trust to build predictable, 
              scalable systems that generate consistent revenue without the typical headaches.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              KlientsGrowth was born from a simple observation: too many great B2B companies 
              were struggling with inconsistent lead generation, despite having excellent products and services.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We saw businesses relying on referrals, dealing with underperforming SDRs, 
              or working with agencies that overpromised and underdelivered. The result? 
              Unpredictable revenue and constant stress about where the next client would come from.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              That's why we created a different approach - one that combines proven outbound strategies, 
              systematic processes, and dedicated expertise to deliver consistent, predictable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Track Record */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackRecord.map((metric, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold gradient-text mb-2">{metric.number}</div>
                  <div className="text-gray-300">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The experts behind your growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="bg-purple-600 text-white text-xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center hover:border-purple-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
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
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can build your hands-off growth system
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100">
            <a href="https://cal.com/harsh719/klientsgrowth" target="_blank" rel="noopener noreferrer">
              Book Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
