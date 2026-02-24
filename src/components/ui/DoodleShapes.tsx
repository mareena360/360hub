"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DoodleProps {
    className?: string;
    type: "squiggle" | "dots" | "circle" | "plus" | "triangle";
    color?: string;
    delay?: number;
}

export default function DoodleShapes({ className, type, color = "bg-gray-200", delay = 0 }: DoodleProps) {
    const getShape = () => {
        switch (type) {
            case "squiggle":
                return (
                    <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 38C15.5 38 22.5 2 36 2C49.5 2 56.5 38 70 38C83.5 38 90.5 2 104 2"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                );
            case "dots":
                return (
                    <div className="grid grid-cols-4 gap-2">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className={cn("w-1.5 h-1.5 rounded-full", color)} />
                        ))}
                    </div>
                );
            case "circle":
                return (
                    <div className={cn("w-12 h-12 rounded-full border-4 border-dashed", color.replace('bg-', 'border-'))} />
                );
            case "plus":
                return (
                    <div className="relative w-8 h-8">
                        <div className={cn("absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 rounded-full", color)} />
                        <div className={cn("absolute top-0 left-1/2 w-1 h-full -translate-x-1/2 rounded-full", color)} />
                    </div>
                );
            case "triangle":
                return (
                    <div
                        className={cn("w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px]", color.replace('bg-', 'border-b-'))}
                        style={{ filter: 'opacity(0.4)' }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            className={cn("pointer-events-none select-none", className)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
            }}
        >
            <div className={cn(type === "squiggle" ? "text-gray-200" : "")}>
                {getShape()}
            </div>
        </motion.div>
    );
}
