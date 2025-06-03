
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
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

  const teamMembers = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-white text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About KlientsGrowth
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              We're a team of B2B growth experts dedicated to building hands-off systems that consistently deliver qualified meetings and revenue growth for ambitious companies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                We believe every B2B company deserves predictable, scalable growth without the headaches of managing complex outbound systems. That's why we build, manage, and optimize complete growth infrastructures that work while you focus on what you do best.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Our systematic approach has helped companies across IT, cybersecurity, SaaS, and recruitment generate millions in pipeline value through consistent, qualified meetings.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white mb-4">
                32
              </div>
              <p className="text-xl text-white">
                Qualified meetings guaranteed in 60 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Track Record */}
      <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              The experts behind your growth system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 shadow-xl rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-white flex items-center justify-center border-4 border-gradient-to-r from-blue-500 to-white">
                    <span className="text-xl font-bold text-blue-900">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-white leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-b from-blue-700 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Why our systematic method delivers consistent results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-4">01</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Industry Specialization
              </h3>
              <p className="text-white">
                We focus on specific B2B niches, allowing us to create highly targeted campaigns that resonate with your ideal prospects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-4">02</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Proven Systems
              </h3>
              <p className="text-white">
                Our methodologies are battle-tested across hundreds of campaigns, ensuring your growth system is built on what actually works.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-4">03</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Guaranteed Results
              </h3>
              <p className="text-white">
                We're so confident in our approach that we guarantee 32 qualified meetings in 60 days, or we work for free until we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's discuss how we can build your hands-off growth system and deliver guaranteed results
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-white text-white hover:from-white hover:to-blue-500 hover:text-blue-900 transition-all duration-300 text-lg px-8 py-4">
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
