"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Philosophy", href: "#philosophy" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0e17]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <a href="#hero" className="font-bold text-xl tracking-tighter text-white z-50">
                        Kerthikan<span className="text-blue-500">.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/Kerthikan_CV.pdf"
                            download
                            className="text-sm font-medium px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-colors text-white"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 text-gray-300 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#0a0e17]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMobileMenuOpen(false);
                                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/Kerthikan_CV.pdf"
                            download
                            className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-medium"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
