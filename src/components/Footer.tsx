import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteData } from "@/config/siteData";

export default function Footer() {
    return (
        <footer className="bg-purple-950 pt-16 pb-8 border-t border-purple-900 text-purple-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-2xl font-serif text-white">{siteData.companyName}</h3>
                        <p className="text-purple-200 leading-relaxed max-w-sm">
                            Delhi's Expert Bridal & Fashion Makeup Artist. Creating timeless, radiant looks for your special day.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-sm uppercase tracking-widest font-semibold text-white">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-purple-200 hover:text-white transition-colors">Home</Link>
                            <Link href="/about" className="text-purple-200 hover:text-white transition-colors">About</Link>
                            <Link href="/services" className="text-purple-200 hover:text-white transition-colors">Services</Link>
                            <Link href="/portfolio" className="text-purple-200 hover:text-white transition-colors">Portfolio</Link>
                            <Link href="/contact" className="text-purple-200 hover:text-white transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-sm uppercase tracking-widest font-semibold text-white">Get in Touch</h4>
                        <div className="flex flex-col space-y-3">
                            <a href={`mailto:${siteData.contact.email}`} className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors">
                                <Mail size={18} />
                                <span>{siteData.contact.email}</span>
                            </a>
                            <a href={`https://wa.me/${siteData.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors">
                                <Phone size={18} />
                                <span>{siteData.contact.phone}</span>
                            </a>
                            <div className="flex items-start space-x-3 text-purple-200">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span>{siteData.contact.location}</span>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center space-x-4">
                            <a
                                href={siteData.contact.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-purple-900 border border-purple-800 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 transition-all shadow-sm"
                            >
                                <Instagram size={18} />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-purple-900 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-purple-300">
                    <p>&copy; {new Date().getFullYear()} {siteData.companyName}. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
