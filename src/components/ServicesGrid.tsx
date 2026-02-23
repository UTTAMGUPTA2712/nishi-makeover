"use client";

import Link from "next/link";
import { Sparkles, Heart, Camera, Brush } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Heart,
        title: "Bridal Makeup",
        description: "Flawless HD & Airbrush makeup designed to last all day. Look radiant and timeless for your wedding ceremonies.",
        price: "Starting from ₹25,000",
    },
    {
        icon: Sparkles,
        title: "Engagement & Party",
        description: "Soft glam and elegant styling for pre-wedding functions, receptions, and special events.",
        price: "Starting from ₹15,000",
    },
    {
        icon: Camera,
        title: "Editorial & Fashion",
        description: "Creative, high-impact makeup for photoshoots, runway, and fashion campaigns.",
        price: "On Request",
    },
    {
        icon: Brush,
        title: "Makeup Lessons",
        description: "1-on-1 personalized sessions to master your everyday look or specialized techniques.",
        price: "Starting from ₹10,000",
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-purple-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        Offerings
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
                        Signature Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                key={index}
                                className="group flex flex-col p-8 bg-zinc-50 hover:bg-purple-50 transition-colors duration-300 border border-transparent hover:border-purple-200 rounded-lg"
                            >
                                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 text-purple-600">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-serif font-medium mb-3 text-gray-900">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow font-light">
                                    {service.description}
                                </p>
                                <p className="text-sm font-medium tracking-wide text-purple-700">
                                    {service.price}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center bg-transparent hover:bg-foreground border border-foreground text-foreground hover:text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300"
                    >
                        View Full Price List
                    </Link>
                </div>
            </div>
        </section>
    );
}
