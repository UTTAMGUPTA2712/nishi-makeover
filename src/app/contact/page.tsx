import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact | Uttam Makeup",
    description: "Book Uttam for your bridal or editorial makeup needs. Get in touch for availability, pricing, and specific inquiries.",
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="pt-24 pb-12 bg-blush-50">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
                    <span className="text-gold-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        Booking
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-foreground/70 leading-relaxed font-light text-lg">
                        We would love to be part of your special day. Please provide as much detail as possible so we can give you the most accurate quote and confirm availability.
                    </p>
                </div>
            </div>

            {/* Info Cards */}
            <div className="container mx-auto px-6 md:px-12 -mt-8 relative z-10 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 shadow-sm border border-black/5 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-gold-50 flex items-center justify-center rounded-full text-gold-600 mb-4">
                            <Mail size={20} />
                        </div>
                        <h3 className="font-serif text-xl mb-2">Email</h3>
                        <a href="mailto:hello@uttam.com" className="text-foreground/70 font-light hover:text-gold-600">hello@uttam.com</a>
                    </div>

                    <div className="bg-white p-8 shadow-sm border border-black/5 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-gold-50 flex items-center justify-center rounded-full text-gold-600 mb-4">
                            <Phone size={20} />
                        </div>
                        <h3 className="font-serif text-xl mb-2">Phone / WhatsApp</h3>
                        <a href="tel:+919876543210" className="text-foreground/70 font-light hover:text-gold-600">+91 98765 43210</a>
                    </div>

                    <div className="bg-white p-8 shadow-sm border border-black/5 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-gold-50 flex items-center justify-center rounded-full text-gold-600 mb-4">
                            <MapPin size={20} />
                        </div>
                        <h3 className="font-serif text-xl mb-2">Location</h3>
                        <p className="text-foreground/70 font-light">Delhi NCR, India<br /><span className="text-sm">(Available Worldwide)</span></p>
                    </div>
                </div>
            </div>

            {/* Reusing existing ContactForm component but stripping its own padding/title if needed, actually it looks great as is, we will just use it. */}
            {/* Wait, the ContactForm component has its own title and padding. Let's just render it directly so it acts as the form section. */}
            <ContactForm />

        </div>
    );
}
