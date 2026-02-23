"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

// Placeholder images
const images = [
    "https://images.unsplash.com/photo-1595956553066-624a949027e7?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop", // same as hero
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080661-469bcfc70b80?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1964&auto=format&fit=crop", // same as about
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974&auto=format&fit=crop",
];

export default function PortfolioGallery({ preview = false }: { preview?: boolean }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const displayImages = preview ? images.slice(0, 6) : images;

    return (
        <section className="py-24 bg-white" id="portfolio-section">
            <div className="container mx-auto px-6 md:px-12">
                {!preview && (
                    <div className="text-center mb-16">
                        <span className="text-gold-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                            Featured Work
                        </h2>
                        <div className="flex justify-center gap-4 mt-8 flex-wrap">
                            {["All", "Bridal", "Editorial", "Glamour"].map((filter) => (
                                <button
                                    key={filter}
                                    className={`px-6 py-2 text-sm tracking-widest uppercase transition-colors ${filter === "All"
                                            ? "bg-gold-600 text-white"
                                            : "bg-transparent text-foreground/70 border border-black/10 hover:border-gold-600 hover:text-gold-700"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {displayImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-sm break-inside-avoid"
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`Portfolio image ${index + 1}`}
                                width={800}
                                height={1200}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white w-10 h-10" strokeWidth={1} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[101]"
                        aria-label="Close modal"
                    >
                        <X size={32} />
                    </button>

                    <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center">
                        <Image
                            src={selectedImage}
                            alt="Expanded portfolio image"
                            fill
                            className="object-contain"
                            quality={100}
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
