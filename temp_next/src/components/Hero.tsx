"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
            <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-start lg:items-center lg:text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm"
                >
                    <Terminal size={14} />
                    <span>Hello World</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Kerthikan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Jegovarajah</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-3xl font-medium text-gray-400 mb-6 max-w-3xl"
                >
                    Software Engineer <span className="text-blue-500 font-light mx-2">|</span> AI & Intelligent Systems Builder
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed font-light"
                >
                    I build intelligent digital systems combining AI, software engineering, and real-world problem solving. Designing reliable, scalable, and meaningful solutions to modern challenges.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="flex items-center justify-center px-8 py-4 glass text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e17]/50 to-[#0a0e17] pointer-events-none" />
        </section>
    );
};
