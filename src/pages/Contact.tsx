
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Calendar, Users, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    industry: '',
    revenue: '',
    challenge: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Strategy call requested!",
      description: "We'll be in touch within 24 hours to schedule your free consultation.",
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      industry: '',
      revenue: '',
      challenge: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-purple-400" />,
      title: "Custom Strategy",
      description: "Tailored outbound plan for your specific industry and goals"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: "Expert Consultation",
      description: "60-minute session with our senior B2B strategists"
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-400" />,
      title: "Action Plan",
      description: "Clear roadmap to achieve your first 32 meetings"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Talk <span className="text-yellow-300">Growth</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Book a free strategy call and discover exactly how we can help you get 
              32 qualified sales meetings in the next 60 days.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <Card className="shadow-xl bg-gray-700 border-gray-600">
              <CardHeader className="gradient-bg text-white">
                <CardTitle className="text-2xl">Book Your Free Strategy Call</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                        className="mt-1 bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                        className="mt-1 bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="mt-1 bg-gray-600 border-gray-500 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-white">Company Name *</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      required
                      className="mt-1 bg-gray-600 border-gray-500 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-white">Industry *</Label>
                    <Select onValueChange={(value) => handleChange('industry', value)}>
                      <SelectTrigger className="mt-1 bg-gray-600 border-gray-500 text-white">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="it-support-healthcare">IT Support (Healthcare)</SelectItem>
                        <SelectItem value="recruitment">Recruitment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="revenue" className="text-white">Annual Revenue</Label>
                    <Select onValueChange={(value) => handleChange('revenue', value)}>
                      <SelectTrigger className="mt-1 bg-gray-600 border-gray-500 text-white">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Under $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m-plus">$10M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="challenge" className="text-white">Biggest Sales Challenge</Label>
                    <Textarea
                      id="challenge"
                      value={formData.challenge}
                      onChange={(e) => handleChange('challenge', e.target.value)}
                      placeholder="Tell us about your current sales challenges..."
                      className="mt-1 bg-gray-600 border-gray-500 text-white"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-white text-gray-900 hover:bg-gray-100 text-lg py-3">
                    Book My Free Strategy Call
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  What You'll Get on This Call
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-green-900 border-green-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">100% Free Consultation</h3>
                  </div>
                  <p className="text-gray-300">
                    No sales pitch, no obligation. Just valuable insights about how to scale 
                    your outbound sales system.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Perfect for:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span>B2B companies doing $1M+ in revenue</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span>Teams struggling with inconsistent lead generation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span>Companies ready to invest in predictable growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How quickly can we get started?
                </h3>
                <p className="text-gray-300">
                  We can begin building your outbound system within 1-2 weeks of our strategy call, 
                  depending on your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What if we don't get 32 meetings?
                </h3>
                <p className="text-gray-300">
                  That's our guarantee - if we don't deliver 32 qualified meetings in your first 
                  60 days, we'll continue working for free until we do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do you work with companies outside your core niches?
                </h3>
                <p className="text-gray-300">
                  While we specialize in cybersecurity, IT support, and recruitment, we do work 
                  with other B2B companies on a case-by-case basis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
