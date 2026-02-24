"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const audiences = [
    {
        title: "Small and Medium Enterprises",
        description: "Supporting growth, sustainability expansion.",
    },
    {
        title: "Large Global Corporations",
        description: "Providing scalable, customized solutions.",
    },
    {
        title: "Investors & Foreign Companies",
        description: "Delivering efficient, adaptable strategies.",
    },
];

export default function TargetAudience() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-5 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 bg-[#f2f2f4] p-12 md:p-16 rounded-[60px] relative overflow-hidden"
                >
                    <div className="absolute top-8 right-8 text-primary opacity-20">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" />
                        </svg>
                    </div>

                    <h2 className="text-5xl font-bold tracking-tight mb-10">
                        Target Audience & Market
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                        Our services are designed for entrepreneurs, startups, SMEs, and established companies across the UAE and globally. We cater to business owners looking for reliable corporate services, tax support, financial structuring, and audit solutions. Our target market includes individuals planning to set up new businesses, companies seeking restructuring, and organizations in need of professional accounting and compliance support to operate efficiently and stay aligned with UAE regulations.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {audiences.map((item, index) => (
                            <div key={item.title} className="text-center md:text-left">
                                <div className="w-12 h-12 rounded-full bg-zinc-800 mx-auto md:mx-0 flex items-center justify-center mb-6" />
                                <h3 className="font-bold mb-3">{item.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl group"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                        alt="Design Collaboration"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Design Decor */}
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[20px] border-white/20 rounded-full" />
                </motion.div>
            </div>

            {/* Decorative Squiggle at bottom */}
            <div className="absolute bottom-0 left-1/4 translate-y-1/2 opacity-10">
                <svg width="400" height="200" viewBox="0 0 400 200">
                    <path d="M10 100 Q 100 10, 200 100 T 390 100" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
            </div>
        </section>
    );
}
