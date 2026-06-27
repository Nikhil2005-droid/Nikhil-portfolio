import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import SplashScreen from "@/components/SplashScreen";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white">
      {/* Splash Screen */}
      <SplashScreen />

      <Navbar />

      {/* Portfolio Sections */}
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Social />
      <Contact />
      
      {/* Animated Footer */}
      <Footer />
    </main>
  );
}


