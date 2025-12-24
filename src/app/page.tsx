import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcases from "@/components/Showcases";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Showcases />
      <Pricing />

      {/* Final Contact/Support Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="glass-dark rounded-[2.5rem] p-12 relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-balance">
              Ready to master your <span className="text-gradient">finances?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Join thousands of users who trust PennyPort for their daily tracking.
              Have questions? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-primary px-10 py-4 rounded-full font-bold text-lg">
                Get Started
              </button>
              <a href="mailto:support@pennyport.app" className="text-white hover:text-primary-pink transition-colors font-semibold">
                Contact Support
              </a>
            </div>

            {/* Decorative background logo */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5 -rotate-12 select-none pointer-events-none">
              <Image src="/app-icon.png" alt="" width={160} height={160} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
