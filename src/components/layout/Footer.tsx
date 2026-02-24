import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Image
                                    src="/logo.png"
                                    alt="360° Degree Hub"
                                    fill
                                    className="object-contain p-1 invert"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tight text-white leading-none">
                                    360°
                                </span>
                                <span className="text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase">
                                    Degree Hub
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/60 leading-relaxed mb-6">
                            Your trusted partner for 360° business solutions in the UAE. We simplify complexity and drive sustainable growth.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#home" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="text-white/60 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#services" className="text-white/60 hover:text-white transition-colors">Business Setup</Link></li>
                            <li><Link href="#services" className="text-white/60 hover:text-white transition-colors">Tax Advisory</Link></li>
                            <li><Link href="#services" className="text-white/60 hover:text-white transition-colors">Audit & Assurance</Link></li>
                            <li><Link href="#services" className="text-white/60 hover:text-white transition-colors">Bookkeeping</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-white/60 mb-6 font-medium">Get the latest UAE business insights.</p>
                        <div className="flex bg-white/10 rounded-2xl p-1 border border-white/10 focus-within:border-white/30 transition-all">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border-none outline-none flex-grow px-4 py-2 text-sm text-white placeholder:text-white/30"
                            />
                            <button className="bg-white text-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/90 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} 360° Degree Hub. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
