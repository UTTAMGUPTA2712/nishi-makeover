import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteData } from "@/config/siteData";

export default function Footer() {
    return (
        <footer className="bg-blush-50 pt-16 pb-8 border-t border-blush-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-2xl font-serif text-foreground">{siteData.companyName}</h3>
                        <p className="text-foreground/70 leading-relaxed max-w-sm">
                            Premium bridal and editorial fashion makeup artist based in {siteData.contact.location}. Creating timeless, radiant looks for your special day.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-sm uppercase tracking-widest font-semibold text-foreground">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-foreground/70 hover:text-gold-700 transition-colors">Home</Link>
                            <Link href="/about" className="text-foreground/70 hover:text-gold-700 transition-colors">About</Link>
                            <Link href="/services" className="text-foreground/70 hover:text-gold-700 transition-colors">Services</Link>
                            <Link href="/portfolio" className="text-foreground/70 hover:text-gold-700 transition-colors">Portfolio</Link>
                            <Link href="/contact" className="text-foreground/70 hover:text-gold-700 transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-sm uppercase tracking-widest font-semibold text-foreground">Get in Touch</h4>
                        <div className="flex flex-col space-y-3">
                            <a href={`mailto:${siteData.contact.email}`} className="flex items-center space-x-3 text-foreground/70 hover:text-gold-700 transition-colors">
                                <Mail size={18} />
                                <span>{siteData.contact.email}</span>
                            </a>
                            <a href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center space-x-3 text-foreground/70 hover:text-gold-700 transition-colors">
                                <Phone size={18} />
                                <span>{siteData.contact.phone}</span>
                            </a>
                            <div className="flex items-start space-x-3 text-foreground/70">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span>{siteData.contact.location}</span>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center space-x-4">
                            <a
                                href={siteData.contact.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-gold-500 hover:text-white transition-all shadow-sm"
                            >
                                <Instagram size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blush-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
                    <p>&copy; {new Date().getFullYear()} {siteData.companyName}. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-gold-700 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gold-700 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
