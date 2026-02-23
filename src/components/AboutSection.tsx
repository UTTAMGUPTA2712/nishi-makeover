import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="py-24 bg-blush-50">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                        <Image
                            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1964&auto=format&fit=crop"
                            alt="Uttam applying premium makeup"
                            fill
                            className="object-cover rounded-sm shadow-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-200 -z-10 rounded-sm" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold-300 -z-10 rounded-sm" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                    <span className="text-gold-600 font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Meet the Artist
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                        Hi, I'm Uttam
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6 font-light">
                        With over a decade of experience in the beauty industry, I specialize in creating timeless, radiant looks for brides and high-fashion editorials. My philosophy is simple: makeup should enhance your natural beauty, not mask it.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mb-10 font-light">
                        Whether you're walking down the aisle in a grand palace or posing for a fashion spread, my goal is to make you feel confident, beautiful, and absolutely flawless.
                    </p>

                    <Link
                        href="/about"
                        className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-gold-700 hover:text-gold-900 transition-colors group pb-1 border-b border-gold-300 hover:border-gold-700"
                    >
                        Read my story
                    </Link>
                </div>
            </div>
        </section>
    );
}
