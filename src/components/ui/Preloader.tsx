"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 360 Hub elegant preloader delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        filter: "blur(10px)",
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                >
                    <div className="relative flex items-center justify-center">
                        {/* Spinning outward ring */}
                        <motion.div
                            className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-black/5 border-t-black/20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Inner inverse spinning ring */}
                        <motion.div
                            className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/5 border-b-black/20"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Logo scaling in */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative w-16 h-16 md:w-20 md:h-20"
                        >
                            <Image
                                src="/logo.svg"
                                alt="360° Degree Hub"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-8 flex gap-1 items-center justify-center"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-black/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-black/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-black/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
