"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Python", desc: "Data analysis, backend services, and AI/ML model training." },
    { name: "Java", desc: "Robust Object-Oriented Programming and enterprise application design." },
    { name: "Flutter", desc: "Cross-platform mobile application development with responsive UIs." },
    { name: "FastAPI", desc: "High-performance REST API architecture with Python." },
    { name: "Machine Learning", desc: "Building intelligent predictive models utilizing scikit-learn & TensorFlow." },
    { name: "Cloud Integration", desc: "Deploying scalable applications on modern cloud infrastructure." },
    { name: "Docker", desc: "Containerizing applications for consistent environments and delivery." },
    { name: "Git", desc: "Advanced version control and collaborative development tracking." },
    { name: "REST APIs", desc: "Designing structured and efficient communication layers." },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Tech Stack</h2>
                <h3 className="text-3xl lg:text-4xl font-semibold">Technologies I Engineer <span className="text-gray-400">With.</span></h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative overflow-hidden rounded-2xl glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <h4 className="text-xl font-medium mb-2 text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                            {skill.name}
                        </h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {skill.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
