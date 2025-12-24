"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Showcases() {
    return (
        <div className="space-y-32 pb-24">
            {/* Showcase 1: AI Coach */}
            <section id="ai-coach" className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                Meet your new <br />
                                <span className="text-gradient">Intelligence Hub.</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                Experience intelligence that works for you. PennyPort doesn't just
                                track your spend — it understands it. Get real-time advice,
                                personalized savings goals, and instant anomaly detection through
                                an interactive AI coach that learns your habits.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Personalized spending analysis",
                                    "Wellness breakdowns and tracking",
                                    "Automated smart savings insights",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-white/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-pink" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative flex justify-center"
                        >
                            <div className="glass rounded-[3rem] p-2 md:p-4 overflow-hidden max-w-[320px]">
                                <Image
                                    src="/images/ai-coach.png"
                                    alt="AI Financial Coach"
                                    width={320}
                                    height={690}
                                    className="rounded-[2.5rem] w-full h-auto"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-primary-pink/10 blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Showcase 2: Reports */}
            <section id="reports" className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1 relative flex justify-center"
                        >
                            <div className="glass rounded-[3rem] p-2 md:p-4 overflow-hidden max-w-[320px]">
                                <Image
                                    src="/images/reports-showcase.png"
                                    alt="Financial Reports"
                                    width={320}
                                    height={690}
                                    className="rounded-[2.5rem] w-full h-auto"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-primary-purple/10 blur-3xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                Beautiful <br />
                                <span className="text-gradient">Visual Reports.</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                Gain clarity on where your money goes with vibrant charts and
                                comprehensive spending categories. Track your progress over weeks,
                                months, or years with high-fidelity visualizations.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Categorized spending analysis",
                                    "Net worth growth tracking",
                                    "Flexible time-range reporting",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-white/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-purple" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Showcase 3: Loans */}
            <section id="loans" className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                Manage Loans <br />
                                <span className="text-gradient">With Precision.</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                Keep track of who owes you and what you owe others. Our dedicated
                                loan management tool ensures you never lose sight of your
                                liabilities or credits.
                            </p>
                            <div className="bg-primary-pink/10 border border-primary-pink/20 rounded-2xl p-6">
                                <p className="text-primary-pink font-bold flex items-center gap-2">
                                    <span className="flex h-2 w-2 rounded-full bg-primary-pink animate-pulse" />
                                    Smart Debt Tracking
                                </p>
                                <p className="text-white/60 text-sm mt-2">
                                    Link loans to specific contacts and get alerts for pending
                                    repayments automatically.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative flex justify-center"
                        >
                            <div className="glass rounded-[3rem] p-2 md:p-4 overflow-hidden max-w-[320px]">
                                <Image
                                    src="/images/loans-showcase.png"
                                    alt="Loan Management Tracking"
                                    width={320}
                                    height={690}
                                    className="rounded-[2.5rem] w-full h-auto"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-primary-pink/10 blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
