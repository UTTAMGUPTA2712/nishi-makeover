"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

import { beforeAfterPairs } from "@/config/siteData";

export default function BeforeAfterGallery() {
    return (
        <section className="py-24 bg-primary-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        Transformations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
                        Before & After
                    </h2>
                    <p className="mt-6 text-gray-700 max-w-2xl mx-auto font-light">
                        Slide to reveal the power of premium makeup. Our philosophy is to enhance your natural features, ensuring you look like the best version of yourself.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {beforeAfterPairs.map((pair, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="relative rounded-lg overflow-hidden shadow-sm aspect-[4/5] md:aspect-square bg-white border border-primary-100">
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
                            <h3 className="mt-4 text-center font-serif text-lg text-gray-900">{pair.description}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
