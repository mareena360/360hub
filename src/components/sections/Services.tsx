"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DoodleShapes from "@/components/ui/DoodleShapes";

const mainServices = [
    {
        title: "Corporate Services & Business Setup",
        description: "We provide complete Corporate Services and Business Setup support, including company formation, licensing, and full assistance with ongoing corporate compliance across the UAE.",
        image: "/meeting.png",
    },
    {
        title: "Tax Support & Advisory",
        description: "Our Tax Support and Advisory services cover VAT registration, filing, tax planning, and full compliance management. We ensure your business meets all UAE regulatory requirements.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    }
];

const secondaryServices = [
    {
        title: "Business Structuring Solutions",
        description: "Strategic structuring of companies, subsidiaries, and group entities for operational efficiency and compliance.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Financial Modelling & Planning",
        description: "Tailored financial models, feasibility studies, and projections to support informed business decisions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Audit & Assurance Services",
        description: "Independent audit, internal audit, and compliance review services to strengthen governance and transparency.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Accounting & Bookkeeping",
        description: "End-to-end accounting services, monthly bookkeeping, financial statements, and reporting.",
        image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800",
    }
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-white relative overflow-hidden">
            <DoodleShapes type="squiggle" className="absolute top-10 right-10 rotate-45 opacity-20" delay={2} />
            <DoodleShapes type="plus" className="absolute bottom-20 left-[10%] rotate-12 opacity-10" delay={4} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-16 mb-24 items-center">
                    <div className="lg:col-span-1">
                        <h2 className="text-5xl font-bold tracking-tight mb-8">Our Services</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We offer a comprehensive range of services to help businesses thrive, adapt, and excel in a competitive environment.
                        </p>
                        {/* Design Shape */}
                        <div className="mt-20 opacity-[0.04]">
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40 100C40 60 70 40 100 40C130 40 160 60 160 100C160 140 130 160 100 160C70 160 40 140 40 100Z" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#f8f8f8] p-4 rounded-[40px] shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="relative aspect-[16/11] overflow-hidden rounded-[30px] mb-8">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="px-6 pb-8">
                                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Second Row of Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {secondaryServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-4 rounded-[40px] border border-zinc-100 hover:shadow-2xl transition-all group"
                        >
                            <div className="relative aspect-[16/11] overflow-hidden rounded-[30px] mb-8">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="px-4 pb-6">
                                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
