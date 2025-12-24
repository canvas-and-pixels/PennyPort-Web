"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "/mo",
        description: "Perfect for getting started with basic tracking.",
        features: [
            "Manual transaction logging",
            "Standard financial reports",
            "3 Smart budgets",
            "Basic categorizations",
        ],
        cta: "Start for Free",
        isPopular: false,
    },
    {
        name: "Premium",
        price: "$5.99",
        period: "/mo",
        yearlyPrice: "$49.99/yr",
        save: "Save 30%",
        description: "Unlock advanced management and cloud features.",
        features: [
            "Everything in Free",
            "Unlimited Smart budgets",
            "Document & Receipt Management",
            "Early Access: Cloud Sync",
        ],
        cta: "Upgrade to Premium",
        isPopular: false,
    },
    {
        name: "Pro + AI",
        price: "$8.99",
        period: "/mo",
        yearlyPrice: "$79.99/yr",
        save: "Best Value",
        description: "The full PennyPort experience with AI power.",
        features: [
            "Everything in Premium",
            "AI Insights Hub",
            "Advanced spending forecasts",
            "Bank Statement Import (Coming Soon)",
            "OCR Receipt Scanning (Coming Soon)",
        ],
        cta: "Get Full Access",
        isPopular: true,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Simple, Transparent <span className="text-gradient">Pricing.</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Choose the plan that fits your financial journey. Upgrade or cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-[2.5rem] ${plan.isPopular
                                    ? "bg-white/[0.05] border-2 border-primary-purple"
                                    : "glass"
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-purple text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                                    <Sparkles size={12} />
                                    RECOMMENDED
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8 flex flex-col">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-white tracking-tight">
                                        {plan.price}
                                    </span>
                                    <span className="text-white/40 font-medium">{plan.period}</span>
                                </div>
                                {plan.yearlyPrice && (
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="text-sm text-white/40">{plan.yearlyPrice}</span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-pink/20 text-primary-pink uppercase">
                                            {plan.save}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary-purple/10 flex items-center justify-center text-primary-purple shrink-0">
                                            <Check size={12} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.isPopular
                                        ? "btn-primary text-white"
                                        : "glass hover:bg-white/[0.08] text-white"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
