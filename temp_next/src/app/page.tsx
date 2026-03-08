import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/ui/Particles";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Particles />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />

      <Footer />
    </main>
  );
}
