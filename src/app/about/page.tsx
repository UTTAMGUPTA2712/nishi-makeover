import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "About Uttam | Premium Makeup Artist",
    description: "Learn more about Uttam, a professional makeup artist with 10+ years of experience in bridal, fashion, and editorial styling.",
};

export default function AboutPage() {
    return (
        <div className="pt-12 bg-white pb-24">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-start">

                {/* Left Side: Images */}
                <div className="w-full lg:w-5/12 relative">
                    <div className="relative aspect-[3/4] w-full">
                        <Image
                            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1964&auto=format&fit=crop"
                            alt="Uttam Artist Portrait"
                            fill
                            className="object-cover rounded-sm"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <div className="absolute -bottom-12 -right-8 w-1/2 aspect-square hidden md:block">
                        <Image
                            src="https://images.unsplash.com/photo-1516975080661-469bcfc70b80?q=80&w=1000&auto=format&fit=crop"
                            alt="Makeup Brushes"
                            fill
                            className="object-cover rounded-sm border-8 border-white shadow-lg"
                            sizes="25vw"
                        />
                    </div>
                </div>

                {/* Right Side: Copy */}
                <div className="w-full lg:w-7/12 pt-8 lg:pl-8">
                    <span className="text-gold-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        The Artist
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-8">
                        Meet Uttam
                    </h1>

                    <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg mb-12">
                        <p>
                            With over 10 years of experience traversing the worlds of high fashion, editorial shoots, and luxury bridal events, my approach to makeup is deeply personalized and art-focused.
                        </p>
                        <p>
                            I believe that makeup is not a mask to hide behind, but a powerful tool to elevate your natural beauty. My signature style—often described as <em>"glowing, flawless, and timeless"</em>—focuses on impeccable skin prep, seamless blending, and a minimalist elegance that photographs beautifully both in natural daylight and under studio flashes.
                        </p>
                        <p>
                            Having trained under internationally renowned artists and certified by the best academies in Europe, I bring global techniques and premium international products (Charlotte Tilbury, Tom Ford, NARS, Dior) to every client's vanity.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-12 border-y border-black/10 py-8">
                        <div>
                            <div className="flex items-center text-gold-600 mb-2">
                                <Award size={20} className="mr-2" />
                                <span className="font-serif text-xl">10+ Years</span>
                            </div>
                            <p className="text-sm font-light text-foreground/60 uppercase tracking-widest">Experience</p>
                        </div>
                        <div>
                            <div className="flex items-center text-gold-600 mb-2">
                                <Award size={20} className="mr-2" />
                                <span className="font-serif text-xl">500+ Brides</span>
                            </div>
                            <p className="text-sm font-light text-foreground/60 uppercase tracking-widest">Styled</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            href="/portfolio"
                            className="bg-foreground hover:bg-gold-700 text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300"
                        >
                            View My Work
                        </Link>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center border border-black/20 hover:border-gold-600 text-foreground hover:text-gold-700 px-6 py-4 uppercase tracking-widest text-sm transition-all duration-300"
                        >
                            <Instagram size={18} className="mr-2" />
                            Follow
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
