"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { siteData } from "@/config/siteData";

const testimonials = siteData.testimonials;

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
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-primary-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        Love Notes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
                        Client Words
                    </h2>
                </div>
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={scrollLeft}
                        className="w-12 h-12 rounded-full border border-primary-300 flex items-center justify-center text-primary-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-12 h-12 rounded-full border border-primary-300 flex items-center justify-center text-primary-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all"
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
                            className="min-w-[300px] md:min-w-[400px] bg-primary-50 p-8 md:p-10 snap-start shadow-sm border border-primary-100 shrink-0 rounded-lg"
                        >
                            <div className="flex gap-1 mb-6 text-primary-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-800 italic font-serif text-lg leading-relaxed mb-8">
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
                                    <h4 className="font-medium text-gray-900 tracking-wide">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600 uppercase tracking-widest text-[10px] mt-1">{testimonial.role}</p>
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
