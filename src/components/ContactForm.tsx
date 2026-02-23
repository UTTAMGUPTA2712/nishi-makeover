"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteData } from "@/config/siteData";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "Bridal Full Package",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Use WhatsApp API directly as a fallback for form submission
        const whatsappMessage = `Hi ${siteData.artistName}, I'm ${formData.name}. I'm inquiring about ${formData.service} on ${formData.date}. My details - Email: ${formData.email}, Phone: ${formData.phone}. Message: ${formData.message}`;
        const cleanPhone = siteData.contact.phone.replace(/[^0-9+]/g, '');
        window.open(`https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-24 bg-white" id="contact">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Details */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center">
                        <span className="text-purple-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                            Inquire
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-10 font-light">
                            We are currently accepting bookings for the upcoming wedding season. Please fill out the form with your details, and we'll get back to you within 24-48 hours.
                        </p>

                        <div className="bg-purple-50 p-8 border border-purple-100 rounded-lg">
                            <h3 className="text-lg font-serif font-medium mb-4 text-gray-900">Direct Inquiry</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                For urgent inquiries or specific questions, feel free to reach out directly via WhatsApp.
                            </p>
                            <a
                                href={`https://wa.me/${siteData.contact.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 uppercase tracking-widest text-sm transition-all duration-300 shadow-md font-medium"
                            >
                                <MessageCircle size={18} className="mr-3" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="w-full lg:w-2/3">
                        <form onSubmit={handleSubmit} className="bg-zinc-50 p-8 md:p-12 shadow-sm border border-black/5 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="flex flex-col gap-2 relative">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-600 font-medium">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-black/20 focus:border-purple-600 py-3 outline-none transition-colors rounded-none placeholder:text-gray-400 font-light text-gray-900 group"
                                        placeholder="Priya Sharma"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-600 font-medium">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-black/20 focus:border-purple-600 py-3 outline-none transition-colors rounded-none placeholder:text-gray-400 font-light text-gray-900"
                                        placeholder="priya@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-600 font-medium">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-black/20 focus:border-purple-600 py-3 outline-none transition-colors rounded-none placeholder:text-gray-400 font-light text-gray-900"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="date" className="text-xs uppercase tracking-widest text-gray-600 font-medium">Event Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-black/20 focus:border-purple-600 py-3 outline-none transition-colors rounded-none font-light text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mb-8">
                                <label htmlFor="service" className="text-xs uppercase tracking-widest text-gray-600 font-medium">Primary Service Required</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-black/20 focus:border-purple-600 py-3 outline-none transition-colors rounded-none font-light appearance-none text-gray-900"
                                >
                                    <option value="Bridal Full Package">Bridal Full Package (Airbrush/HD)</option>
                                    <option value="Pre-Wedding/Engagement">Pre-Wedding / Engagement</option>
                                    <option value="Editorial/Fashion">Editorial / Fashion Shoots</option>
                                    <option value="Party Makeup">Party / Guest Makeup</option>
                                    <option value="Other">Other / Not Sure</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2 mb-10">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-600 font-medium">Tell us about your look / event details *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-black/20 focus:border-purple-600 py-3 outline-none transition-colors rounded-none placeholder:text-gray-400 font-light resize-none text-gray-900"
                                    placeholder="I'm looking for a very natural, glowing daytime look for my destination wedding..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center justify-center w-full md:w-auto bg-gray-900 hover:bg-purple-700 text-white px-10 py-5 uppercase tracking-widest text-sm transition-all duration-300 rounded-md"
                            >
                                Send Inquiry
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
