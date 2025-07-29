import { useState, useContext } from 'react'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const BuyCredit = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { user } = useContext(AppContext);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 9,
      yearlyPrice: 89,
      credits: 100,
      popular: false,
      features: [
        "100 AI image generations",
        "Standard resolution (1024x1024)",
        "Basic art styles",
        "Email support",
        "Commercial usage rights"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Pro",
      monthlyPrice: 19,
      yearlyPrice: 189,
      credits: 500,
      popular: true,
      features: [
        "500 AI image generations",
        "High resolution (2048x2048)",
        "Premium art styles",
        "Priority support",
        "Advanced editing tools",
        "Batch generation",
        "Commercial usage rights"
      ],
      color: "from-orange-400 to-red-400"
    },
    {
      name: "Enterprise",
      monthlyPrice: 49,
      yearlyPrice: 489,
      credits: 2000,
      popular: false,
      features: [
        "2000 AI image generations",
        "Ultra-high resolution (4096x4096)",
        "Exclusive art styles",
        "24/7 dedicated support",
        "Custom model training",
        "API access",
        "Team collaboration",
        "White-label solution",
        "Commercial usage rights"
      ],
      color: "from-purple-400 to-pink-400"
    },
  ];

  const handlePurchase = (plan) => {
    if (!user) {
      toast.error('Please login to purchase credits');
      return;
    }
    
    // Here you would integrate with a payment processor like Stripe
    toast.info(`Payment integration for ${plan.name} plan coming soon!`);
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Choose Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Creative Plan</span>
        </motion.h1>
        <motion.p 
          className="text-gray-300 text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Unlock unlimited creativity with our AI-powered image generation credits
        </motion.p>

        {/* Billing Toggle */}
        <motion.div 
          className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              !isYearly 
                ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              isYearly 
                ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Yearly
            <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
          </button>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
              plan.popular ? 'scale-105 border-orange-400/50' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-2">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-lg text-gray-400">
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>
              <p className="text-gray-400">
                {plan.credits} credits {isYearly ? 'per year' : 'per month'}
              </p>
              {isYearly && (
                <p className="text-green-400 text-sm mt-2">
                  Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually!
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <i className="ri-check-line text-green-400 mr-3 text-lg"></i>
                  {feature}
                </li>
              ))}
            </ul>

            <motion.button
              onClick={() => handlePurchase(plan)}
              className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <i className="ri-shopping-cart-line"></i>
                Get Started
              </span>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <i className="ri-shield-check-line text-3xl text-orange-400 mb-3"></i>
            <h4 className="text-white font-semibold mb-2">Secure Payment</h4>
            <p className="text-gray-400 text-sm">256-bit SSL encryption</p>
          </div>
          <div className="text-center">
            <i className="ri-refresh-line text-3xl text-orange-400 mb-3"></i>
            <h4 className="text-white font-semibold mb-2">Cancel Anytime</h4>
            <p className="text-gray-400 text-sm">No long-term commitments</p>
          </div>
          <div className="text-center">
            <i className="ri-customer-service-line text-3xl text-orange-400 mb-3"></i>
            <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-400 text-sm">Always here to help</p>
          </div>
          <div className="text-center">
            <i className="ri-money-dollar-circle-line text-3xl text-orange-400 mb-3"></i>
            <h4 className="text-white font-semibold mb-2">Money Back</h4>
            <p className="text-gray-400 text-sm">30-day guarantee</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto">
          <h4 className="text-white font-semibold mb-3">💡 Pro Tip</h4>
          <p className="text-gray-300">
            Start with the Starter plan to test our AI capabilities, then upgrade to Pro for the best value and advanced features!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BuyCredit;
