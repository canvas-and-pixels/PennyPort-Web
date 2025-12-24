"use client";

import Link from "next/link";
import { Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-pink/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Logo & Info */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center font-bold text-white">
                                P
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Penny<span className="text-primary-pink">Port</span>
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            Premium AI-powered personal finance manager for the modern age.
                            Take control of your wealth today.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            {["Features", "How it Works", "Pricing", "Roadmap"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-white/40 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Help Center"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/40 text-xs">
                        © {currentYear} PennyPort. All rights reserved. Built with ❤️ for financial freedom.
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-[10px] font-bold text-white/60 tracking-widest uppercase">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        System Operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
