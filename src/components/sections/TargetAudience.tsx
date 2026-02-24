"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DoodleShapes from "@/components/ui/DoodleShapes";

export default function TargetAudience() {
    return (
        <section className="section-padding bg-white overflow-hidden relative">
            <DoodleShapes type="circle" className="absolute -top-10 left-[20%] opacity-10" delay={1} />
            <DoodleShapes type="dots" className="absolute top-1/2 right-5 opacity-20 scale-150" delay={2.5} />

            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-5 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-3"
                >
                    <div className="bg-[#f2f2f4] rounded-[60px] p-12 lg:p-20 relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -mr-32 -mt-32" />

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                            Our Target <br />
                            <span className="text-zinc-400">Audience</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We cater to a diverse range of clients, from startups and small businesses to large corporations and international investors looking to establish or expand their presence in the UAE.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                "Startups & SMEs",
                                "International Investors",
                                "Corporate Entities",
                                "Local Entrepreneurs"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="font-semibold text-zinc-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-2"
                >
                    <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Our Community"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
