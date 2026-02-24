"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Globe, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        {/* Tiny Arrow Decor from Design */}
                        <div className="mb-12 opacity-10 rotate-180">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>

                        <h2 className="text-7xl font-bold tracking-tight mb-12">
                            Thank You
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
                            Thank you for trusting 360° HUB. We look forward to supporting your business journey
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 bg-[#f2f2f4] p-12 rounded-[60px] border border-transparent shadow-sm hover:shadow-xl transition-all"
                    >
                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <Phone size={24} className="text-primary" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</p>
                                    <p className="text-lg font-bold">+971 54 265 8225</p>
                                </div>
                            </div>

                            <div className="h-px bg-zinc-300/50" />

                            <div className="flex items-center gap-6">
                                <Mail size={24} className="text-primary" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
                                    <p className="text-lg font-bold truncate">info@360degreehub.ae</p>
                                </div>
                            </div>

                            <div className="h-px bg-zinc-300/50" />

                            <div className="flex items-center gap-6">
                                <Instagram size={24} className="text-primary" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Website</p>
                                    <p className="text-lg font-bold">www.360degreehub.ae</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
                            <Image
                                src="/support.png"
                                alt="Support Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Design Decor */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-zinc-100 rounded-full -z-10 blur-xl opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
