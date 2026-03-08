"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "AgriVora",
            desc: "AI-powered crop recommendation system combining soil analysis, weather data, and machine learning for predictive real-time agricultural insights.",
            techs: ["Python", "FastAPI", "Flutter", "Machine Learning"],
            github: "https://github.com/kerthikan5",
            link: "#",
        },
        {
            title: "SmartQueue",
            desc: "Real-time queue management system designed to optimize throughput and provide accurate scheduling analytics across institutional spaces.",
            techs: ["TypeScript", "Next.js", "WebSockets"],
            github: "https://github.com/kerthikan5",
            link: "#",
        },
        {
            title: "Digital Notice Board",
            desc: "An automated information distribution system that synchronizes global updates onto synchronized screens with low-latency delivery.",
            techs: ["Java", "Spring Boot", "MySQL"],
            github: "https://github.com/kerthikan5",
            link: "#",
        },
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3 text-center w-full block">Selected Work</h2>
                <h3 className="text-3xl lg:text-4xl font-semibold mb-6">Proven <span className="text-gray-400">Architectures.</span></h3>
            </div>

            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative overflow-hidden rounded-3xl glass-card p-1 border border-white/5 hover:border-blue-500/20 transition-all duration-500"
                    >
                        <div className="bg-[#0f1523]/80 backdrop-blur-3xl rounded-[22px] p-8 md:p-10 relative overflow-hidden h-full flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">

                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700" />

                            <div className="flex flex-col md:max-w-xl relative shrink-0">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                                        <Code2 size={24} />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-gray-100">{project.title}</h4>
                                </div>

                                <p className="text-gray-400 font-light leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techs.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-gray-300 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 w-full md:w-auto mt-4 md:mt-0 relative z-20">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 sm:px-6 sm:py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10 gap-2 w-full md:w-auto">
                                    <Github size={18} />
                                    <span className="hidden sm:inline">Source Code</span>
                                </a>
                                <a href={project.link} className="flex items-center justify-center p-3 sm:px-6 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors gap-2 w-full md:w-auto">
                                    <ExternalLink size={18} />
                                    <span className="hidden sm:inline">Live Preview</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
