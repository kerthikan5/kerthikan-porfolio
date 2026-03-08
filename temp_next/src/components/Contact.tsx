"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
    const [focus, setFocus] = useState<string | null>(null);

    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3 text-center w-full block">Get in Touch</h2>
                <h3 className="text-3xl lg:text-4xl font-semibold mb-6">Let's <span className="text-gray-400">Collaborate.</span></h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-light">
                    Whether you have an opportunity or just want to say hi, my inbox is always open. Reach out and I'll get back to you!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="lg:w-1/3 flex flex-col gap-4"
                >
                    <a href="mailto:dev.kerthikan@gmail.com" className="flex items-center gap-4 p-6 glass-card rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                        <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Email</p>
                            <p className="text-gray-200">dev.kerthikan@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://github.com/kerthikan5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 glass-card rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                        <div className="p-3 bg-gray-500/10 text-gray-300 rounded-xl">
                            <Github size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">GitHub</p>
                            <p className="text-gray-200">github.com/kerthikan5</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/kerthikan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 glass-card rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                        <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">LinkedIn</p>
                            <p className="text-gray-200">linkedin.com/in/kerthikan</p>
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="lg:w-2/3 glass-card rounded-3xl p-8 border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

                    <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                        window.location.href = `mailto:dev.kerthikan@gmail.com?subject=Contact from Portfolio - ${name}&body=${message} (%0A%0AFrom: ${email})`;
                    }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                animate={focus === 'name' ? { scale: 1.01 } : { scale: 1 }}
                                className={`relative border rounded-xl overflow-hidden transition-colors duration-300 ${focus === 'name' ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10 bg-white/5'}`}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    onFocus={() => setFocus('name')}
                                    onBlur={() => setFocus(null)}
                                    className="w-full bg-transparent p-4 outline-none text-gray-200 text-sm font-light placeholder:text-gray-500"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                animate={focus === 'email' ? { scale: 1.01 } : { scale: 1 }}
                                className={`relative border rounded-xl overflow-hidden transition-colors duration-300 ${focus === 'email' ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10 bg-white/5'}`}
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    onFocus={() => setFocus('email')}
                                    onBlur={() => setFocus(null)}
                                    className="w-full bg-transparent p-4 outline-none text-gray-200 text-sm font-light placeholder:text-gray-500"
                                    required
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            animate={focus === 'message' ? { scale: 1.01 } : { scale: 1 }}
                            className={`relative border rounded-xl overflow-hidden transition-colors duration-300 ${focus === 'message' ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10 bg-white/5'}`}
                        >
                            <textarea
                                name="message"
                                placeholder="What do you want to build together?"
                                rows={5}
                                onFocus={() => setFocus('message')}
                                onBlur={() => setFocus(null)}
                                className="w-full bg-transparent p-4 outline-none text-gray-200 text-sm font-light placeholder:text-gray-500 resize-none"
                                required
                            />
                        </motion.div>

                        <button type="submit" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 px-8 rounded-xl transition-all w-full md:w-auto self-start">
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
