import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcases from "@/components/Showcases";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Showcases />
      <Pricing />
      <Footer />
    </main>
  );
}
