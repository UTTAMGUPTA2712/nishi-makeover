import { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import Link from "next/link";
import { Check } from "lucide-react";
import { siteData } from "@/config/siteData";

export const metadata: Metadata = {
    title: `Services & Pricing | ${siteData.companyName}`,
    description: `Detailed breakdown of bridal makeup packages, pre-wedding styling, editorial rates, and 1-on-1 makeup lessons by ${siteData.artistName}.`,
};

const detailedServices = [
    {
        title: "The Ultimate Bridal Package",
        description: "Our signature service for your wedding day. Includes HD or Airbrush makeup, premium hairstyling, draping, and a trial session.",
        price: "₹35,000",
        features: [
            "Consultation & Trial Session (1.5 hrs)",
            "Premium Airbrush or HD Makeup",
            "Advanced Hairstyling & Extensions installation",
            "Dupatta/Saree Draping",
            "High-end lashes & touch-up kit",
        ]
    },
    {
        title: "Pre-Wedding & Engagement",
        description: "Perfect for sangeet, mehendi, or engagement ceremonies. A flawless look that complements your chosen outfit and lighting.",
        price: "₹20,000",
        features: [
            "HD Makeup Application",
            "Elegant Hairstyling",
            "Draping Services",
            "Premium False Lashes",
        ]
    },
    {
        title: "Party & Guest Makeup",
        description: "Stand out as a bridesmaid or family member with a customized look that fits the theme of the event.",
        price: "₹10,000",
        features: [
            "Flawless Base Makeup",
            "Basic Hairstyling (Curls/Straight/Simple Bun)",
            "Lashes included",
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-12 bg-white">
            <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl mb-16">
                <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
                    Rates & Services
                </h1>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">
                    Transparent pricing for our most requested services. Each appointment is tailored to your unique skin type, facial structure, and personal style preferences.
                </p>
            </div>

            <div className="container mx-auto px-6 md:px-12 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {detailedServices.map((pkg, idx) => (
                        <div key={idx} className={`p-10 flex flex-col ${idx === 0 ? "bg-blush-50 border border-gold-200 relative shadow-sm" : "bg-zinc-50 border border-black/5"}`}>
                            {idx === 0 && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-600 text-white text-xs uppercase tracking-widest py-1 px-4">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-serif font-medium mb-3">{pkg.title}</h3>
                            <p className="font-light text-foreground/70 mb-6 flex-grow">{pkg.description}</p>
                            <div className="text-3xl font-medium text-gold-700 mb-8">{pkg.price}</div>

                            <ul className="space-y-4 mb-10 flex-grow font-light text-sm">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start">
                                        <Check className="text-gold-500 mr-3 mt-0.5" size={16} shrink-0 />
                                        <span className="text-foreground/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className={`text-center py-4 uppercase tracking-widest text-sm transition-colors ${idx === 0 ? "bg-foreground text-white hover:bg-gold-700" : "bg-white border border-foreground text-foreground hover:bg-foreground hover:text-white"}`}
                            >
                                Inquire Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blush-50 py-24">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Need a Custom Quote?</h2>
                    <p className="text-foreground/70 font-light mb-10">
                        For editorial shoots, commercial campaigns, or large bridal parties, please reach out directly to discuss your specific requirements.
                    </p>
                    <Link href="/contact" className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-gold-700 hover:text-gold-900 border-b border-gold-300 hover:border-gold-700 pb-1">
                        Contact for Custom Packages
                    </Link>
                </div>
            </div>
        </div>
    );
}
