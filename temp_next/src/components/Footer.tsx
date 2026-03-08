"use client";

import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-8 mt-12 bg-black/20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-500 text-sm font-light text-center md:text-left"
                >
                    &copy; {new Date().getFullYear()} Kerthikan Jegovarajah. All rights reserved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-6 text-sm text-gray-400 font-medium"
                >
                    <a href="https://github.com/kerthikan5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/kerthikan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="http://kerthikan.me" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Website</a>
                </motion.div>
            </div>
        </footer>
    );
};
