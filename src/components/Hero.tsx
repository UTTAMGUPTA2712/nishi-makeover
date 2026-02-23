"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteData } from "@/config/siteData";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 to-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                <Image
                    src={siteData.hero.image}
                    alt={`${siteData.companyName} Hero`}
                    fill
                    priority
                    className="object-cover object-[center_30%]"
                    sizes="100vw"
                />
                {/* Elegant overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-950/60 to-black/30 w-full md:w-[70%] z-10" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container relative z-20 mx-auto px-6 md:px-12 text-center md:text-left flex flex-col items-center md:items-start text-white"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-pink-300 font-medium tracking-[0.2em] uppercase text-sm mb-4 inline-block"
                >
                    {siteData.hero.tagline}
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6 max-w-3xl drop-shadow-xl text-white"
                >
                    {siteData.hero.headingLine1} <br className="hidden md:block" />
                    <span className="text-pink-400 indent-2 italic">{siteData.hero.headingLine2}</span> {siteData.hero.headingLine3}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl text-zinc-200 mb-10 max-w-xl font-light drop-shadow-lg"
                >
                    {siteData.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link
                        href={`https://wa.me/${siteData.contact.phone.replace(/[^0-9]/g, '')}?text=Hi%20Nishi%2C%20I'd%20like%20to%20book%20a%20bridal%20makeup%20session`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 shadow-xl rounded-md"
                    >
                        Book Now
                        <MessageCircle className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Link>
                    <Link
                        href="/portfolio"
                        className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 rounded-md"
                    >
                        Explore Portfolio
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
