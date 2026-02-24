"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DoodleShapes from "@/components/ui/DoodleShapes";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen max-h-[100vh] flex items-center pt-16 overflow-hidden">
            {/* Decorative Background Elements */}
            <DoodleShapes type="squiggle" className="absolute top-1/4 left-10 text-gray-100 hidden lg:block" delay={0.5} />
            <DoodleShapes type="dots" className="absolute top-3/4 left-[15%] hidden lg:block" delay={1.2} />
            <DoodleShapes type="plus" className="absolute top-[20%] right-[10%] opacity-20 hidden lg:block" delay={2} />
            <DoodleShapes type="circle" className="absolute bottom-10 right-[25%] opacity-10 hidden lg:block" delay={0.8} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="section-padding grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4"
                    >
                        360° Degree Hub
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1]">
                        Global <br />
                        <span className="text-zinc-300">Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
                        Professional corporate services, tax advisory, and audit excellence tailored for the UAE market.
                    </p>
                    <div className="flex items-center gap-8">
                        <button className="px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-105 transition-all flex items-center gap-3 group">
                            Start Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-[60px] shadow-2xl group">
                        <Image
                            src="/meeting.png"
                            alt="360 Hub Expertise"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Creative floating cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 z-20 glass-card p-8 rounded-[40px] shadow-2xl"
                    >
                        <div className="text-4xl font-bold mb-1">360°</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Advisory Partner</div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
            >
                <div className="w-px h-12 bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
