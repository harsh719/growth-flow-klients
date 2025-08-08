import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Target, TrendingUp, ArrowRight, DollarSign, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import GrowthJourney from '@/components/GrowthJourney';

const Index = () => {
  const processes = [{
    step: "01",
    title: "Build System",
    description: "We create your custom outbound infrastructure with proven templates and sequences"
  }, {
    step: "02", 
    title: "Target Decision-Makers",
    description: "Our team identifies and reaches out to your ideal prospects with personalized messaging"
  }, {
    step: "03",
    title: "Deliver Results", 
    description: "Get consistent meetings and pipeline growth with our proven systematic approach"
  }];

  const niches = [{
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "IT Support (Healthcare)",
    description: "Specialized outreach for healthcare IT providers"
  }, {
    icon: <Target className="h-8 w-8 text-purple-400" />,
    title: "Cybersecurity",
    description: "Generate qualified leads for security solutions"
  }, {
    icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
    title: "B2B SaaS",
    description: "Scale your software business with targeted outreach"
  }, {
    icon: <DollarSign className="h-8 w-8 text-purple-400" />,
    title: "Recruitment",
    description: "Scale your talent acquisition business"
  }];

  const testimonials = [{
    quote: "KlientsGrowth transformed our lead generation completely. The quality of meetings was exceptional.",
    author: "Sarah Johnson",
    company: "HelpCare AI",
    result: "4 key clients secured"
  }, {
    quote: "We achieved +85K in additional revenue in just one quarter with their systematic approach.",
    author: "Michael Chen", 
    company: "Vention",
    result: "+85K revenue boost"
  }];

  const comparisonData = [{
    metric: "Time to get results",
    klientsgrowth: "21-30 Days",
    sdr: "3 Months",
    agency: "2-4 Weeks",
    diy: "3-6 Months"
  }, {
    metric: "Failure rate",
    klientsgrowth: "Unlikely",
    sdr: "Medium", 
    agency: "High",
    diy: "Very High"
  }, {
    metric: "Price",
    klientsgrowth: "Based On Results",
    sdr: "+₹8,000/month",
    agency: "+₹5K+ Media Buying Budget",
    diy: "₹3K For Software, Tools + Time Wasted"
  }];

  const faqData = [{
    question: "Why do this instead of hiring an SDR?",
    answer: "Hiring an SDR comes with significant overhead costs, training time, and no guarantee of results. Our proven system delivers qualified meetings faster and more cost-effectively than traditional SDR hiring."
  }, {
    question: "How much more cost-effective is this, really?",
    answer: "Our clients typically save 60-80% compared to hiring full-time SDRs or working with traditional agencies, while getting better results. We only succeed when you succeed."
  }, {
    question: "How does payment work?",
    answer: "We work on a performance-based model. You only pay when we deliver qualified meetings. This aligns our incentives with your success and removes the risk from your side."
  }, {
    question: "How quickly do we see results?",
    answer: "Most clients start seeing qualified meetings within 21-30 days of system implementation. We focus on fast execution and rapid iteration to get you results quickly."
  }, {
    question: "What's your refund policy?",
    answer: "We offer a results guarantee. If we don't deliver the agreed-upon number of qualified meetings within the specified timeframe, we'll continue working until we do or provide a full refund."
  }];

  return <>
      <Helmet>
        <title>#1 Growth Partner for B2B Leaders - KlientsGrowth</title>
        <meta name="description" content="KlientsGrowth helps B2B leaders scale faster with a proven outbound growth system — built to deliver consistent meetings, automate prospecting, and drive predictable revenue." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-block border border-blue-500 rounded-full px-6 py-2 mb-8">
                <span className="text-sm font-medium">Automate Lead Acquisition and Scale your Outbound</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                We build <span className="gradient-text">hands-off growth systems</span><br />
                for B2B leaders
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We've helped our clients unlock over <span className="text-purple-400 font-semibold">₹ 7M+</span> in potential deals, 
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
              <Card className="bg-gray-800 border-gray-700 text-center transition-colors hover:border-gradient">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-400 mb-2">+₹3M</div>
                  <div className="text-gray-300">Revenue generated</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-center transition-colors hover:border-gradient">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-400 mb-2">+2,500</div>
                  <div className="text-gray-300">Sales meetings</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-center transition-colors hover:border-gradient">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-purple-400 mb-2">+₹ 7M</div>
                  <div className="text-gray-300">Sales Pipeline</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* New Way to Scale Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The new way to scale.
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>
                Cold email has a frustrating tradeoff: either <span className="text-white font-semibold">you sacrifice quality for volume</span> (
                spray and pray ), or you spend way too much money for people to sit around 
                and write one or two great emails a day. Our Approach is different. Every email 
                we send is timely and relevant, and <span className="text-white font-semibold">we can do it at infinite scale. We win you 
                millions in pipeline.</span>
              </p>
              
              <p>
                <span className="text-white font-semibold">Scaling personalized cold outbound is also easy to do wrong</span>—which has 
                consequences for both your brand (making you look bad) and your business 
                (losing you money). When you work with us, you're in good hands.
              </p>
              
              <p>
                We've sent millions of emails, <span className="text-white font-semibold">generated nearly ₹10M in pipeline</span>, and are 
                neurotically obsessed with getting the little details right so everything goes 
                smoothly.
              </p>
              
              <div className="mt-12 pt-8">
                <div className="text-2xl font-script mb-4">
                  <span className="font-serif italic">Harsh Shah</span>
                </div>
                <p className="text-gray-400">Harsh Shah, Founder and Traveller</p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Journey Section - Moved here after "The new way to scale" */}
        <GrowthJourney />

        {/* Comparison Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's compare your options
              </h2>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-5 gap-4 mb-8">
                  <div className="text-center font-semibold"></div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-xl font-bold">KlientsGrowth</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold">Hiring an SDR</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold">Marketing Agency</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold">Do It Yourself</span>
                  </div>
                </div>

                {comparisonData.map((row, index) => <div key={index} className="grid grid-cols-5 gap-4 py-4 border-t border-gray-700">
                    <div className="font-medium text-gray-300">{row.metric}</div>
                    <div className="text-center bg-gray-800 rounded-lg p-3">
                      <span className="text-green-400 font-semibold">{row.klientsgrowth}</span>
                    </div>
                    <div className="text-center bg-gray-800 rounded-lg p-3">
                      <span className="text-gray-300">{row.sdr}</span>
                    </div>
                    <div className="text-center bg-gray-800 rounded-lg p-3">
                      <span className="text-gray-300">{row.agency}</span>
                    </div>
                    <div className="text-center bg-gray-800 rounded-lg p-3">
                      <span className="text-gray-300">{row.diy}</span>
                    </div>
                  </div>)}

                <div className="grid grid-cols-5 gap-4 py-4 border-t border-gray-700">
                  <div className="font-medium text-gray-300">Guarantees</div>
                  <div className="text-center bg-green-900 rounded-lg p-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mx-auto" />
                  </div>
                  <div className="text-center bg-red-900 rounded-lg p-3">
                    <X className="h-6 w-6 text-red-400 mx-auto" />
                  </div>
                  <div className="text-center bg-gray-800 rounded-lg p-3">
                    <span className="text-gray-400">Rarely</span>
                  </div>
                  <div className="text-center bg-red-900 rounded-lg p-3">
                    <X className="h-6 w-6 text-red-400 mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-6">
              {/* KlientsGrowth - Featured */}
              <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-gradient">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">KlientsGrowth</h3>
                    <div className="inline-flex items-center bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Recommended
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-gray-300">Time to results:</span>
                      <span className="text-green-400 font-semibold">21-30 Days</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-gray-300">Failure rate:</span>
                      <span className="text-green-400 font-semibold">Unlikely</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-gray-300">Price:</span>
                      <span className="text-green-400 font-semibold">Based On Results</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300">Guarantees:</span>
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Options */}
              <div className="space-y-4">
                {[{
                name: "Hiring an SDR",
                data: {
                  time: "3 Months",
                  failure: "Medium",
                  price: "+₹8,000/month",
                  guarantee: false
                }
              }, {
                name: "Marketing Agency",
                data: {
                  time: "2-4 Weeks",
                  failure: "High",
                  price: "+₹5K+ Media Buying Budget",
                  guarantee: "Rarely"
                }
              }, {
                name: "Do It Yourself",
                data: {
                  time: "3-6 Months",
                  failure: "Very High",
                  price: "₹3K For Software, Tools + Time Wasted",
                  guarantee: false
                }
              }].map((option, index) => <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gradient">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-center">{option.name}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-400 text-sm">Time to results:</span>
                          <span className="text-gray-300 text-sm">{option.data.time}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-400 text-sm">Failure rate:</span>
                          <span className="text-gray-300 text-sm">{option.data.failure}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-400 text-sm">Price:</span>
                          <span className="text-gray-300 text-sm text-right">{option.data.price}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-400 text-sm">Guarantees:</span>
                          {option.data.guarantee === false ? <X className="h-4 w-4 text-red-400" /> : <span className="text-gray-400 text-sm">{option.data.guarantee}</span>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 bg-gray-800/30">
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
              {processes.map((process, index) => <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gradient transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold gradient-text mb-4">{process.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-gray-400">{process.description}</p>
                  </CardContent>
                </Card>)}
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
              {niches.map((niche, index) => <Card key={index} className="bg-gray-800 border-gray-700 text-center hover:border-gradient transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{niche.icon}</div>
                    <h3 className="text-lg font-semibold mb-3">{niche.title}</h3>
                    <p className="text-gray-400 text-sm">{niche.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Commonly asked questions
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gray-800 border-gray-700 rounded-lg px-6 hover:border-gradient">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-purple-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Results from Real Clients
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => <Card key={index} className="bg-gray-800 border-l-4 border-l-purple-500 border-gray-700 hover:border-gradient">
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
                </Card>)}
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
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 hidden md:inline-flex">
              <a href="https://cal.com/harsh719/klientsgrowth" target="_blank" rel="noopener noreferrer">
                Book More Meetings
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 md:hidden z-50">
          <Button asChild size="lg" className="w-full gradient-bg hover:opacity-90 text-white border-0 text-lg py-4">
            <a href="https://cal.com/harsh719/klientsgrowth" target="_blank" rel="noopener noreferrer">
              Book More Meetings
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </>;
};

export default Index;
