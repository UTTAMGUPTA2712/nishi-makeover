"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram } from "lucide-react";
import { siteData } from "@/config/siteData";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity font-serif text-gray-900"
                >
                    {siteData.companyName}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm uppercase tracking-widest transition-colors ${pathname === link.href
                                ? "text-primary-700 font-medium"
                                : "text-gray-800 hover:text-primary-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={siteData.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors text-gray-800 hover:text-primary-600"
                    >
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden transition-colors p-2 text-gray-900 hover:text-primary-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-primary-100 shadow-lg py-4 flex flex-col space-y-4 px-6 z-50">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-base uppercase tracking-widest py-2 border-b border-primary-50 transition-colors ${pathname === link.href
                                ? "text-primary-700 font-medium"
                                : "text-gray-800 hover:text-primary-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <a
                            href={siteData.contact.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-gray-800 hover:text-primary-600 transition-colors"
                        >
                            <Instagram size={20} />
                            <span className="text-sm uppercase tracking-widest">Follow on Instagram</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
