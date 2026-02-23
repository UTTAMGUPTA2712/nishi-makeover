"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const beforeAfterPairs = [
    {
        before: "https://images.unsplash.com/photo-15素颜?q=80&w=1000&auto=format&fit=crop", // placeholder
        after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop", // same face with makeup
        label: "Bridal Airbrush",
    },
    {
        before: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop", // using same due to lack of real pairs
        after: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
        label: "Engagement Soft Glam",
    },
    {
        before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop",
        label: "High Fashion Editorial",
    },
    {
        before: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1516975080661-469bcfc70b80?q=80&w=1000&auto=format&fit=crop",
        label: "Party Natural",
    },
];

export default function BeforeAfterGallery() {
    return (
        <section className="py-24 bg-blush-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-gold-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        Transformations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                        Before & After
                    </h2>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto font-light">
                        Slide to reveal the power of premium makeup. Our philosophy is to enhance your natural features, ensuring you look like the best version of yourself.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {beforeAfterPairs.map((pair, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="relative rounded-sm overflow-hidden shadow-sm aspect-[4/5] md:aspect-square bg-white border border-blush-100">
                                <ReactCompareSlider
                                    itemOne={<ReactCompareSliderImage src={pair.before} alt="Before Makeup" style={{ objectFit: "cover" }} />}
                                    itemTwo={<ReactCompareSliderImage src={pair.after} alt="After Makeup" style={{ objectFit: "cover" }} />}
                                    className="w-full h-full"
                                />
                                {/* Fallback image source for before if it fails to load a realistic pair: we use a grayscale filter on the after image via CSS */}
                                <style jsx global>{`
                  [data-rcs="image-1"] {
                    filter: saturate(0.2) contrast(0.9) brightness(1.1);
                  }
                `}</style>
                            </div>
                            <h3 className="mt-4 text-center font-serif text-lg text-foreground">{pair.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
