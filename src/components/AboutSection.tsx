import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/config/siteData";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                        <Image
                            src={siteData.about.image}
                            alt={`${siteData.artistName} applying premium makeup`}
                            fill
                            className="object-cover rounded-sm shadow-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 -z-10 rounded-sm" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border border-purple-200 -z-10 rounded-sm" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                    <span className="text-purple-700 font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        {siteData.about.tagline}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                        {siteData.about.heading}
                    </h2>
                    <p className="text-gray-800 leading-relaxed mb-6 font-light">
                        {siteData.about.paragraph1}
                    </p>
                    <p className="text-gray-800 leading-relaxed mb-10 font-light">
                        {siteData.about.paragraph2}
                    </p>

                    <Link
                        href="/about"
                        className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-purple-700 hover:text-purple-900 transition-colors group pb-1 border-b border-purple-300 hover:border-purple-700"
                    >
                        Read my story
                    </Link>
                </div>
            </div>
        </section>
    );
}
