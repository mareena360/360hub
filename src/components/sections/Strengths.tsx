"use client";

import { motion } from "framer-motion";
import { Monitor, Share2, Phone, Hexagon } from "lucide-react";
import DoodleShapes from "@/components/ui/DoodleShapes";

const strengths = [
    {
        icon: Monitor,
        title: "Expert Team",
        description: "Our team consists of experienced professionals with deep knowledge of UAE regulations, corporate structuring, and financial management.",
    },
    {
        icon: Share2,
        title: "Extensive Network",
        description: "Global reach with localized expertise across multiple industries.",
    },
    {
        icon: Phone,
        title: "24/7 Services",
        description: "Round-the-clock support for seamless operations and continuous assistance.",
    },
    {
        icon: Hexagon,
        title: "Competitive Pricing",
        description: "High-value solutions at affordable and cost-effective rates.",
    },
];

export default function Strengths() {
    return (
        <section id="about" className="section-padding relative overflow-hidden bg-white">
            {/* Background Shapes like in Image 1 */}
            <div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2 -z-10 w-[800px] h-[800px] opacity-[0.05] rotate-12">
                <div className="bg-shape-grey w-[300px] h-[500px] top-0 left-0" />
                <div className="bg-shape-grey w-[400px] h-[400px] bottom-0 right-0 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <DoodleShapes type="dots" className="absolute -top-10 left-[40%] opacity-40" delay={3} />
                <DoodleShapes type="triangle" className="absolute bottom-20 left-0 opacity-20 -rotate-12" delay={1.5} />

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Our Strengths & <br />
                            <span className="text-zinc-400">Competitive Advantage</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            We provide comprehensive 360° solutions, offering end-to-end support from company formation and corporate compliance to tax advisory, financial modeling, and audit services.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our expert team delivers tailored strategies to meet each client's unique needs while ensuring full compliance with UAE regulations. Acting as a trusted advisory partner, we guide businesses to make informed decisions and achieve sustainable growth.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:translate-x-10">
                        {strengths.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#f2f2f4] p-10 rounded-[50px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
