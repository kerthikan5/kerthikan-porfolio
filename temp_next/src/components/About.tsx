"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:w-1/2"
                >
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
                        {/* Soft decorative glow behind image */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 glass">
                            {/* Note: Ensure the image is in the public directory */}
                            <img
                                src="/DSC01517-2.jpg"
                                alt="Kerthikan Jegovarajah"
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 opacity-90 object-top"
                            />
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 border border-white/10 shadow-xl backdrop-blur-xl">
                            <p className="text-xs text-gray-400 font-mono tracking-wider">STATUS</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium">Open to Work</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:w-1/2 flex flex-col items-start text-left"
                >
                    <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">About Me</h2>
                    <h3 className="text-3xl lg:text-4xl font-semibold mb-6">Designing logic, <span className="text-gray-400">building impact.</span></h3>

                    <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                        <p>
                            My passion lies in <strong>building scalable software</strong> and engineering intelligent systems. As a Computer Science undergraduate focused heavily on problem-solving, I combine an analytical approach with an obsession for high-quality, maintainable code.
                        </p>
                        <p>
                            I am deeply interested in <strong>AI and modern technology</strong>, striving to design applications that push the boundaries of what software can achieve. Whether it's architecting a robust backend model or developing a seamless end-to-end cloud platform, I approach development with an engineering mindset—valuing correctness, performance, and clear system architecture.
                        </p>
                        <p>
                            Beyond the abstract, I have a strong <strong>commitment to solving real-world challenges</strong>. Technology is only as good as the problems it resolves, and my ultimate goal is to create technological solutions that offer tangible, meaningful impact to users and businesses alike.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
