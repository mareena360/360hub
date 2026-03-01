"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
];

export default function Navbar({ logoPath }: { logoPath: string }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 md:px-16",
                isScrolled
                    ? "py-4 bg-white/90 backdrop-blur-md"
                    : "py-8 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-32 h-10 md:w-48 md:h-14">
                        <Image
                            src={logoPath}
                            alt="360° Degree Hub"
                            fill
                            className="object-contain object-left md:object-center"
                        />
                    </div>
                    <div className="flex flex-col">

                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-500",
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
            >
                <button
                    className="absolute top-8 right-8"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-bold tracking-tight text-primary hover:text-muted-foreground transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
