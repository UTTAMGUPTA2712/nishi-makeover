"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Bride",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        quote: "Uttam is a magician! She translated exactly what I wanted into reality. My bridal makeup was extremely natural, glowing, and stayed flawless throughout the entire night. I felt like the best version of myself.",
    },
    {
        name: "Ananya Mehta",
        role: "Fashion Model",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        quote: "Working with Uttam on set is always a dream. Her editorial eye is unmatched and she understands lighting perfectly. The makeup never looks heavy, yet photographs beautifully.",
    },
    {
        name: "Riya Kapoor",
        role: "Bride",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        quote: "I was super nervous about my destination wedding in Rajasthan, but Uttam's airbrush technique saved the day. The makeup didn't budge despite the heat, and the glow was breathtaking.",
    },
    {
        name: "Aisha Singh",
        role: "Engagement",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
        quote: "So professional and attentive. She listened to all my concerns about my skin type and the final look was just stellar! Highly recommend her for any special occasion.",
    }
];

export default function TestimonialsCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-blush-50 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-gold-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        Love Notes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                        Client Words
                    </h2>
                </div>
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={scrollLeft}
                        className="w-12 h-12 rounded-full border border-gold-300 flex items-center justify-center text-gold-700 hover:bg-gold-600 hover:text-white hover:border-gold-600 transition-all"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-12 h-12 rounded-full border border-gold-300 flex items-center justify-center text-gold-700 hover:bg-gold-600 hover:text-white hover:border-gold-600 transition-all"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] bg-white p-8 md:p-10 snap-start shadow-sm border border-blush-100 shrink-0"
                        >
                            <div className="flex gap-1 mb-6 text-gold-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-foreground/80 italic font-serif text-lg leading-relaxed mb-8">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground tracking-wide">{testimonial.name}</h4>
                                    <p className="text-sm text-foreground/60 uppercase tracking-widest text-[10px] mt-1">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS to hide scrollbar in WebKit */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
        </section>
    );
}
