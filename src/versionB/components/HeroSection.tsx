import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderFuture from "@/versionB/assets/slider-future-media.png";
import sliderWomen from "@/versionB/assets/slider-women-owned.webp";
import sliderPhone from "@/versionB/assets/slider-em-phone.png";

const slides = [
  { src: sliderFuture, alt: "Future of Media" },
  { src: sliderWomen, alt: "Women-Owned Business" },
  { src: sliderPhone, alt: "Efficiency Media" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-teal-light font-medium text-sm tracking-widest uppercase mb-4"
          >
            Employee-Owned Media Agency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold text-navy-foreground leading-tight mb-6"
          >
            Strategic Media Planning & Buying
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-navy-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            Our omnichannel approach brings together specialists across all media
            disciplines to deliver integrated solutions and measurable results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4"
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-teal text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-teal-light transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-navy-foreground/30 text-navy-foreground px-8 py-3 rounded-lg font-medium hover:bg-navy-foreground/10 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-navy-foreground/20 backdrop-blur flex items-center justify-center text-navy-foreground hover:bg-navy-foreground/30 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-teal w-6" : "bg-navy-foreground/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-navy-foreground/20 backdrop-blur flex items-center justify-center text-navy-foreground hover:bg-navy-foreground/30 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
