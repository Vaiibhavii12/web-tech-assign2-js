'use client';

import Link from 'next/link';
import { Check, Zap, Star, Sparkles } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out NEXUS-AI',
      features: [
        '100 API calls per month',
        'Basic AI tools access',
        'Community support',
        'Standard speed processing',
        '1 GB file storage',
      ],
      highlighted: false,
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'For individual creators and professionals',
      features: [
        'Unlimited API calls',
        'All AI tools access',
        'Priority support',
        'Fast processing (10x speed)',
        '100 GB file storage',
        'Advanced analytics',
        'Custom API keys',
        'Batch processing',
      ],
      highlighted: true,
      cta: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations',
      features: [
        'Everything in Professional',
        'Dedicated support team',
        'Custom integrations',
        'SSO & team management',
        'Unlimited file storage',
        'Advanced security features',
        'Custom training & onboarding',
        'SLA guarantee',
      ],
      highlighted: false,
      cta: 'Contact Sales',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 gold-text" />
            <span className="text-2xl font-bold gold-text">NEXUS-AI</span>
          </div>
          <Link href="/" className="text-foreground/70 hover:text-primary transition-all duration-300 ease-out">Back Home</Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gold-text">Simple, Transparent</span>
              <br />
              <span className="text-foreground">Pricing</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always flexible, always scalable.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`card-elegant ${plan.highlighted ? 'ring-2 ring-primary relative md:scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-primary px-4 py-1 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div>
                    <div className="text-4xl font-bold gold-text">{plan.price}</div>
                    {plan.period && <div className="text-foreground/60 text-sm">{plan.period}</div>}
                  </div>
                  <p className="text-foreground/70">{plan.description}</p>
                </div>

                <button className={plan.highlighted ? 'button-primary w-full mb-8' : 'button-secondary w-full mb-8'}>
                  {plan.cta}
                </button>

                <div className="space-y-3 border-t border-border/50 pt-8">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center mb-12 gold-text">Frequently Asked Questions</h2>

            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Yes, all paid plans come with a 14-day free trial. No credit card required to get started.',
              },
              {
                q: 'What about refunds?',
                a: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your plan.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="card-elegant">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="gold-text">Ready to unlock</span>
              <br />
              <span className="text-foreground">unlimited potential?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="button-primary">
                Start Free Trial
              </Link>
              <button className="button-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
