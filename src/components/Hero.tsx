import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/config/siteData";

export default function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={siteData.hero.image}
                    alt={`${siteData.companyName} Hero`}
                    fill
                    priority
                    className="object-cover object-[center_30%]"
                    sizes="100vw"
                />
                {/* Elegant overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
            </div>

            {/* Content */}
            <div className="container relative z-20 mx-auto px-6 md:px-12 text-center md:text-left flex flex-col items-center md:items-start text-white">
                <span className="text-gold-300 font-medium tracking-[0.2em] uppercase text-sm mb-4 inline-block">
                    {siteData.hero.tagline}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6 max-w-3xl drop-shadow-md">
                    {siteData.hero.headingLine1} <br className="hidden md:block" />
                    <span className="text-gold-200 indent-2 italic">{siteData.hero.headingLine2}</span> {siteData.hero.headingLine3}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light drop-shadow">
                    {siteData.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        href="/contact"
                        className="group flex items-center justify-center bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 shadow-lg"
                    >
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/portfolio"
                        className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300"
                    >
                        Explore Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
