"use client";

import { motion } from "framer-motion";
import { Server, Database, Layers, Network } from "lucide-react";

export const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 justify-between">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:w-1/2 flex flex-col items-start"
                >
                    <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Engineering Mindset</h2>
                    <h3 className="text-3xl lg:text-4xl font-semibold mb-6">Designing for <span className="text-gray-400">Scale.</span></h3>
                    <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 border-l-4 border-blue-500 pl-6 italic">
                        "I believe great engineering is about designing systems that are reliable, scalable, and meaningful."
                    </p>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">
                        Building software isn't just about syntax; it's about solving complex problems through structured architecture. Every component, API limit, and database query must be intentional.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 py-2 px-4 rounded-full border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            Reliability First
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 py-2 px-4 rounded-full border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-violet-500" />
                            Maintainable Logic
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:w-1/2 relative w-full aspect-square max-w-md"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 rounded-[3rem] blur-3xl" />

                    {/* Animated Architecture Pattern */}
                    <div className="relative w-full h-full glass-card rounded-[2rem] p-8 border border-white/10 flex flex-col items-center justify-center gap-8 overflow-hidden">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-xl z-20 backdrop-blur-md"
                        >
                            <Layers size={32} className="text-blue-400" />
                        </motion.div>

                        <div className="flex w-full justify-between px-8 relative z-10">
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md"
                            >
                                <Database size={32} className="text-violet-400" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md"
                            >
                                <Server size={32} className="text-blue-300" />
                            </motion.div>
                        </div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
                            className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-xl z-20 backdrop-blur-md"
                        >
                            <Network size={32} className="text-violet-300" />
                        </motion.div>

                        {/* Connecting SVG lines */}
                        <svg className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none" viewBox="0 0 400 400">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M 200 120 L 120 200 M 200 120 L 280 200 M 120 250 L 200 300 M 280 250 L 200 300"
                                stroke="#60a5fa"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                fill="none"
                            />
                        </svg>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
