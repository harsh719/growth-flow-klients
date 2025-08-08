
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, Users, Target, IndianRupee, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Helmet } from 'react-helmet-async';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    emailCapacity: 9000,
    customerLifetimeValue: 5000,
    replyRate: 3,
    positiveReplyRate: 30,
    meetingRate: 75,
    conversionRate: 15
  });

  const [metrics, setMetrics] = useState({
    monthlyProspects: 0,
    monthlyLeads: 0,
    monthlyMeetings: 0,
    monthlyDeals: 0,
    monthlyRevenue: 0,
    roi: 0
  });

  const [comparison, setComparison] = useState({
    sdrApproach: {
      sdrsNeeded: 0,
      annualSdrCost: 0,
      roi: 0
    },
    ourModel: {
      meetings: 32,
      totalCost: 0,
      deals: 0,
      revenue: 0,
      roi: 0
    }
  });

  useEffect(() => {
    calculateMetrics();
  }, [inputs]);

  const calculateMetrics = () => {
    const monthlyProspects = inputs.emailCapacity / 3;
    const monthlyLeads = (inputs.emailCapacity * inputs.replyRate * inputs.positiveReplyRate) / 10000;
    const monthlyMeetings = (monthlyLeads * inputs.meetingRate) / 100;
    const monthlyDeals = (monthlyMeetings * inputs.conversionRate) / 100;
    const monthlyRevenue = monthlyDeals * inputs.customerLifetimeValue;
    
    setMetrics({
      monthlyProspects,
      monthlyLeads,
      monthlyMeetings,
      monthlyDeals,
      monthlyRevenue,
      roi: 0
    });

    // SDR Approach Calculations (Annual)
    const sdrsNeeded = Math.ceil(inputs.emailCapacity / 3000);
    const annualSdrCost = sdrsNeeded * 4000 * 12; // Annual cost
    const annualRevenueFromSdr = monthlyRevenue * 12;
    const sdrRoi = annualSdrCost > 0 ? ((annualRevenueFromSdr - annualSdrCost) / annualSdrCost) * 100 : 0;

    // Our Model Calculations - Total cost based on meetings booked
    const totalCost = monthlyMeetings * 298; // Total cost for meetings booked
    const ourModelDeals = (monthlyMeetings * inputs.conversionRate) / 100;
    const ourModelRevenue = ourModelDeals * inputs.customerLifetimeValue;
    const ourModelAnnualRevenue = ourModelRevenue * 12; // Calculate annual revenue
    const ourModelRoi = totalCost > 0 ? ((ourModelAnnualRevenue - totalCost) / totalCost) * 100 : 0;

    setComparison({
      sdrApproach: {
        sdrsNeeded,
        annualSdrCost,
        roi: sdrRoi
      },
      ourModel: {
        meetings: monthlyMeetings,
        totalCost: totalCost,
        deals: ourModelDeals,
        revenue: ourModelAnnualRevenue, // Store annual revenue
        roi: ourModelRoi
      }
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const annualSavings = comparison.sdrApproach.annualSdrCost - (comparison.ourModel.totalCost * 12);

  return (
    <>
      <Helmet>
        <title>ROI Calculator: SDR vs Pay-Per-Meeting Model | KlientsGrowth</title>
        <meta name="description" content="Calculate your ROI and see why our pay-per-meeting model beats hiring SDRs. Discover your potential savings and guaranteed meeting results with our interactive calculator." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10" />
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                What's Cheaper — Hiring SDRs or{' '}
                <span className="gradient-text">Paying Per Meeting?</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Use our calculator to discover how many deals you'll close and how much you'll save 
                with our guaranteed meeting-based model.
              </p>
              <Button 
                onClick={scrollToCalculator}
                className="gradient-bg hover:opacity-90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Calculator className="mr-2" />
                Calculate Your ROI
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Interactive ROI Calculator
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* User Inputs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Target className="mr-3 text-purple-400" />
                      Your Business Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="emailCapacity">Monthly Email Sending Capacity</Label>
                      <Input
                        id="emailCapacity"
                        type="number"
                        value={inputs.emailCapacity}
                        onChange={(e) => handleInputChange('emailCapacity', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="clv">Customer Lifetime Value (INR)</Label>
                      <Input
                        id="clv"
                        type="number"
                        value={inputs.customerLifetimeValue}
                        onChange={(e) => handleInputChange('customerLifetimeValue', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="replyRate">Reply Rate (%)</Label>
                      <Input
                        id="replyRate"
                        type="number"
                        step="0.1"
                        value={inputs.replyRate}
                        onChange={(e) => handleInputChange('replyRate', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="positiveReplyRate">Positive Reply Rate (%)</Label>
                      <Input
                        id="positiveReplyRate"
                        type="number"
                        value={inputs.positiveReplyRate}
                        onChange={(e) => handleInputChange('positiveReplyRate', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="meetingRate">Positive Replies → Meeting Rate (%)</Label>
                      <Input
                        id="meetingRate"
                        type="number"
                        value={inputs.meetingRate}
                        onChange={(e) => handleInputChange('meetingRate', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="conversionRate">Meeting → Conversion Rate (%)</Label>
                      <Input
                        id="conversionRate"
                        type="number"
                        value={inputs.conversionRate}
                        onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>

                    <div className="pt-4 border-t border-gray-600">
                      <Label className="text-purple-400">Monthly Unique Prospects (Auto-calculated)</Label>
                      <div className="text-2xl font-bold mt-2">
                        <AnimatedCounter value={metrics.monthlyProspects} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Performance Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <TrendingUp className="mr-3 text-purple-400" />
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-700 rounded-lg">
                        <div className="text-purple-400 font-semibold">Monthly Leads</div>
                        <div className="text-2xl font-bold">
                          <AnimatedCounter value={metrics.monthlyLeads} decimals={1} />
                        </div>
                      </div>
                      
                      <div className="text-center p-4 bg-gray-700 rounded-lg">
                        <div className="text-purple-400 font-semibold">Monthly Meetings</div>
                        <div className="text-2xl font-bold">
                          <AnimatedCounter value={metrics.monthlyMeetings} decimals={1} />
                        </div>
                      </div>

                      <div className="text-center p-4 bg-gray-700 rounded-lg">
                        <div className="text-purple-400 font-semibold">Monthly Deals</div>
                        <div className="text-2xl font-bold">
                          <AnimatedCounter value={metrics.monthlyDeals} decimals={1} />
                        </div>
                      </div>

                      <div className="text-center p-4 bg-gray-700 rounded-lg">
                        <div className="text-purple-400 font-semibold">Monthly Revenue</div>
                        <div className="text-2xl font-bold">
                          ₹<AnimatedCounter value={metrics.monthlyRevenue} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Comparison Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-3xl font-bold text-center mb-12">Cost Comparison</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Traditional SDR Approach */}
                <Card className="bg-gray-800 border-gray-700 hover:border-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="mr-3 text-red-400" />
                      🧑‍💼 Traditional SDR Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                      <p className="text-sm text-red-300">Pay fixed monthly fees regardless of results</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-gray-400">SDRs Needed</div>
                        <div className="text-2xl font-bold">
                          <AnimatedCounter value={comparison.sdrApproach.sdrsNeeded} />
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400">Annual Cost</div>
                        <div className="text-2xl font-bold">
                          ₹<AnimatedCounter value={comparison.sdrApproach.annualSdrCost} />
                        </div>
                        <div className="text-sm text-gray-500">
                          {comparison.sdrApproach.sdrsNeeded} SDRs × ₹4k/month × 12 months
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-600">
                      <div className="text-gray-400">Annual Revenue</div>
                      <div className="text-2xl font-bold text-green-400">
                        ₹<AnimatedCounter value={metrics.monthlyRevenue * 12} />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Annual ROI</div>
                      <div className="text-3xl font-bold text-green-400">
                        <AnimatedCounter value={comparison.sdrApproach.roi} decimals={1} />%
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Our Pay-Per-Meeting Model */}
                <Card className="bg-gray-800 border-gray-700 hover:border-gradient relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-blue-500 text-white px-4 py-2 text-sm font-bold">
                    RECOMMENDED
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <CheckCircle className="mr-3 text-green-400" />
                      ✅ Our Pay-Per-Meeting Model
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      <p className="text-sm text-green-300">Pay only after meetings are booked - zero risk!</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-gray-400">Monthly Meetings</div>
                        <div className="text-2xl font-bold">
                          <AnimatedCounter value={metrics.monthlyMeetings} decimals={1} />
                        </div>
                        <div className="text-sm text-gray-500">based on your metrics</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Total Cost</div>
                        <div className="text-2xl font-bold">
                          ₹<AnimatedCounter value={comparison.ourModel.totalCost} />
                        </div>
                        <div className="text-sm text-gray-500">
                          <AnimatedCounter value={metrics.monthlyMeetings} decimals={1} /> meetings × ₹298
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-400">Expected Deals</div>
                      <div className="text-2xl font-bold text-green-400">
                        <AnimatedCounter value={comparison.ourModel.deals} decimals={1} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-gray-400">Annual Revenue</div>
                      <div className="text-2xl font-bold text-green-400">
                        ₹<AnimatedCounter value={comparison.ourModel.revenue} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-gray-400">ROI</div>
                      <div className="text-3xl font-bold text-green-400">
                        <AnimatedCounter value={comparison.ourModel.roi} decimals={1} />%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Savings Highlight */}
              {annualSavings > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/50 max-w-2xl mx-auto">
                    <CardContent className="py-8">
                      <div className="text-2xl font-bold text-green-400 mb-2">
                        💡 You save ₹<AnimatedCounter value={annualSavings} /> annually and 90 days of ramp-up!
                      </div>
                      <div className="text-gray-300">
                        Skip the hiring hassle and get guaranteed results faster.
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Want to skip the hiring hassle and get{' '}
              <span className="gradient-text">guaranteed meetings</span> instead?
            </h3>
            <Button className="gradient-bg hover:opacity-90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105">
              <IndianRupee className="mr-2" />
              Book Free Strategy Call
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ROICalculator;
