import { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { siteData } from "@/config/siteData";

export const metadata: Metadata = {
    title: `Portfolio | ${siteData.companyName}`,
    description: `Browse the bridal and editorial makeup portfolio of ${siteData.artistName} highlighting natural, glowing, and airbrush looks.`,
};

export default function PortfolioPage() {
    return (
        <div className="pt-12 bg-white flex flex-col min-h-screen">
            <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl mb-12">
                <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
                    My Portfolio
                </h1>
                <p className="text-foreground/70 leading-relaxed font-light text-lg">
                    A curated collection of my work featuring real brides, editorial campaigns, and styled shoots. Every face tells a unique story.
                </p>
            </div>

            <PortfolioGallery />

            <BeforeAfterGallery />
        </div>
    );
}
