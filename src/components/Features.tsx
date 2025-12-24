"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    FileText,
    PieChart,
    TrendingUp,
    RotateCcw,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        title: "AI Insights Hub",
        description: "Personalized spending analysis and anomaly detection driven by advanced machine learning.",
        icon: BrainCircuit,
        isComingSoon: false,
    },
    {
        title: "Smart Document Vault",
        description: "Link receipts and PDFs directly to transactions for audit-ready records effortlessly.",
        icon: FileText,
        isComingSoon: true,
        comingSoonText: "OCR scanning to extract data automatically!",
    },
    {
        title: "Intelligent Budgets",
        description: "Real-time threshold alerts at 80% and 100% to prevent overspending before it happens.",
        icon: PieChart,
        isComingSoon: false,
    },
    {
        title: "Visual Net Worth",
        description: "Beautiful, high-fidelity charts and asset tracking for a complete financial overview.",
        icon: TrendingUp,
        isComingSoon: false,
    },
    {
        title: "Bank Statement Import",
        description: "Import bank statements to generate and categorize transactions in seconds.",
        icon: RotateCcw,
        isComingSoon: true,
    },
    {
        title: "Privacy First",
        description: "Local-first storage, biometrics, and a stealthy 'Privacy Mode' to keep your data safe.",
        icon: ShieldCheck,
        isComingSoon: false,
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Everything you need for <span className="text-gradient">Total Control.</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Powerful tools designed to simplify your financial life, powered by AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl glass hover:bg-white/[0.05] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl btn-primary flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                <feature.icon size={24} />
                            </div>

                            {feature.isComingSoon && (
                                <div className="absolute top-8 right-8">
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-primary-purple/20 text-primary-purple border border-primary-purple/30">
                                        Coming Soon
                                    </span>
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed mb-4">
                                {feature.description}
                            </p>

                            {feature.comingSoonText && (
                                <p className="text-xs font-semibold text-primary-pink">
                                    {feature.comingSoonText}
                                </p>
                            )}

                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-pink/5 to-primary-purple/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
