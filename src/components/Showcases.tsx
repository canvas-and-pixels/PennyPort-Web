"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Showcases() {
    return (
        <div className="space-y-24 pb-24">
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Meet your new <br />
                                <span className="text-gradient">AI Financial Coach.</span>
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
                                    "Real-time saving tips",
                                    "Automated anomaly detection",
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
                            className="relative"
                        >
                            <div className="glass rounded-[2rem] p-4 md:p-6 overflow-hidden">
                                <Image
                                    src="/images/ai-coach.png"
                                    alt="AI Financial Coach"
                                    width={600}
                                    height={800}
                                    className="rounded-[1.5rem] w-full h-auto"
                                />
                            </div>
                            {/* Background Glow */}
                            <div className="absolute -inset-4 bg-primary-pink/10 blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Showcase 2: Paperless Office */}
            <section id="paperless-office" className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1 relative"
                        >
                            <div className="glass rounded-[2rem] p-4 md:p-6 overflow-hidden">
                                <Image
                                    src="/images/paperless-office.png"
                                    alt="Paperless Office Receipt Scanner"
                                    width={600}
                                    height={800}
                                    className="rounded-[1.5rem] w-full h-auto"
                                />
                            </div>
                            {/* Background Glow */}
                            <div className="absolute -inset-4 bg-primary-purple/10 blur-3xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                The ultimate <br />
                                <span className="text-gradient">Paperless Office.</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                Tired of lost receipts and messy PDFs? PennyPort links every
                                document directly to its transaction. Use our powerful scanner
                                to digitize receipts in seconds and keep your financial records
                                audit-ready, anywhere, at any time.
                            </p>
                            <div className="bg-primary-pink/10 border border-primary-pink/20 rounded-2xl p-6">
                                <p className="text-primary-pink font-bold flex items-center gap-2">
                                    <span className="flex h-2 w-2 rounded-full bg-primary-pink animate-pulse" />
                                    Coming Soon: OCR Scanning
                                </p>
                                <p className="text-white/60 text-sm mt-2">
                                    Extract dates, amounts, and merchant names automatically from
                                    your documents using state-of-the-art OCR technology.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
