'use client';

import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PremiumPlans() {
  const plans = [
    {
      name: "Spotify Free",
      price: "Free",
      period: "",
      description: "The basics of music, podcasts, and audiobooks",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Play music with occasional ads",
        "Download podcasts",
        "15-hour audiobook listening per month",
        "Shuffle play only",
        "Limited skips"
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Spotify Premium",
      price: "$9.99",
      period: "/month",
      description: "Ad-free music, downloads, and ultimate control",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Ad-free music",
        "Download music for offline listening",
        "Play any song in any order",
        "Unlimited skips",
        "High-quality audio",
        "Listen with friends in real time"
      ],
      buttonText: "Try Premium",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Spotify Premium Family",
      price: "$15.99",
      period: "/month",
      description: "Ad-free music for up to 6 family members",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "All Premium features",
        "6 Premium accounts",
        "Block explicit music",
        "Individual profiles",
        "Spotify Kids app access",
        "Family Mix playlist"
      ],
      buttonText: "Try Family",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your <span className="gradient-text">Premium</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Listen without limits. Try Premium free for 1 month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  plan.popular ? 'bg-green-500 text-black' : 'bg-gray-800 text-green-500'
                }`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.buttonVariant}
                size="lg"
                className={`w-full rounded-full font-semibold ${
                  plan.popular
                    ? 'bg-green-500 hover:bg-green-400 text-black'
                    : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Terms and conditions apply. 1 month free not available for users who have already tried Premium.
          </p>
        </div>
      </div>
    </section>
  );
}