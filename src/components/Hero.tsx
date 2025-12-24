"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-pink/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-purple/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white text-balance">
                        The Most Reliable <br />
                        <span className="text-gradient">Expense & Budget Tracker.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 text-balance">
                        Master your money with total precision. Experience the most efficient
                        personal finance tool with AI-driven insights, smart document management,
                        and privacy-first tracking.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Link href="#pricing" className="btn-primary px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto text-center">
                            Download Now
                        </Link>
                        <Link href="#features" className="glass px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors w-full sm:w-auto">
                            <Play size={20} fill="currentColor" />
                            Watch Demo
                        </Link>
                    </div>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-sm mx-auto"
                >
                    <div className="relative z-10 glass rounded-[3rem] p-2 md:p-4">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50">
                            <Image
                                src="/images/hero-mockup.png"
                                alt="PennyPort Dashboard"
                                width={320}
                                height={691}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>

                    {/* Mockup Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/20 to-transparent blur-3xl -z-10 transform translate-y-10" />
                </motion.div>
            </div>
        </section>
    );
}
