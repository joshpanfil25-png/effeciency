import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import logoOrlandoMag from "@/versionB/assets/testimonials/orlando-magazine.jpg";
import logoOrlandoHealth from "@/versionB/assets/testimonials/orlando-health.png";
import logoOhioState from "@/versionB/assets/testimonials/ohio-state-waterproofing.jpg";
import logoSportClips from "@/versionB/assets/testimonials/sport-clips.jpg";
import logoOberweis from "@/versionB/assets/testimonials/oberweis.jpg";
import logoMni from "@/versionB/assets/testimonials/mni.jpg";
import logoConversant from "@/versionB/assets/testimonials/conversant.jpg";
import logoWmaq from "@/versionB/assets/testimonials/wmaq.jpg";

const testimonials = [
  {
    text: "From the minute we were introduced to Amy, Melanie and the Efficiency Media team—one thing was immediately clear, Efficiency Media is putting their clients first. Egos & agendas are checked at the door, and a genuine interest in their clients' success shines through. Thoughtful, informed and responsive, they have created a supremely unique and open environment for communication and collaboration.",
    author: "Rosemary Bowers",
    title: "Senior Account Manager, Orlando Magazine",
    logo: logoOrlandoMag,
  },
  {
    text: "The team at Efficiency Media has proven to be much more than a media planning and buying service for Orlando Health. We consider the team partners in our organization. Not only was the planning strategic, I was most impressed by the negotiations that took place on behalf of Orlando Health. It is with confidence of proper placement and the best price, we go to market with our messages.",
    author: "Rod C. James",
    title: "Orlando Health",
    logo: logoOrlandoHealth,
  },
  {
    text: "Over the past 9 years we have worked with Efficiency Media and they always have our best interests in mind. One of the things I love about Efficiency Media is the tough negotiation skills and they never miss a deadline. I have recommended Efficiency Media to all my franchisees.",
    author: "Paul Trecarichi",
    title: "EverDry / Ohio State Waterproofing",
    logo: logoOhioState,
  },
  {
    text: "Expertise, value and integrity—sometimes rarities in our industry, they are in overflow at Efficiency Media! It's incredibly impressive the way Efficiency Media navigates the changing media landscape—blending traditional and digital buying proficiencies—while single-mindedly looking out for the best interests of our brand.",
    author: "Danielle Linden",
    title: "Sport Clips",
    logo: logoSportClips,
  },
  {
    text: "Oberweis has been working with Efficiency Media from the beginning. We are extremely pleased with the professionalism, knowledge and skill demonstrated by Amy and her outstanding team. Efficiency Media has always been thorough and highly responsive. They are tough negotiators on our behalf and we can always trust their advice.",
    author: "Bruce Bedford",
    title: "Vice President, Marketing, Oberweis Dairy",
    logo: logoOberweis,
  },
  {
    text: "MNI Targeted Media and Efficiency Media have been partners since 2015 working across multiple accounts. Amy and team are very thorough and always have their clients' interest in mind. Their attention to detail and fast and clear communication makes Efficiency Media a great partner.",
    author: "Heather Hein",
    title: "Director of Advertising Sales, MNI",
    logo: logoMni,
  },
  {
    text: "I enjoy working with Efficiency Media because, while they're on top of their game, they are always willing to evaluate new approaches. I find they are knowledgeable in the verticals they serve and they work strongly in the best interest of their clients.",
    author: "John Green",
    title: "Director of Sales, Conversant",
    logo: logoConversant,
  },
  {
    text: "I have worked with Amy and Efficiency Media for ten years. Their commitment to their clients is unmatched. Fair but tough negotiators always mindful of spending their client's dollars in the most cost effective way while maintaining a quality, high reach, targeted schedule.",
    author: "Kenny Wharton",
    title: "Account Executive, WMAQ-TV",
    logo: logoWmaq,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy">
            What Our Partners Say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl shadow-lg p-10 md:p-14 text-center"
            >
              <div className="flex items-center justify-center mb-6 gap-4">
                <img
                  src={testimonials[current].logo}
                  alt={testimonials[current].title}
                  className="h-48 w-48 object-contain rounded-lg bg-white p-2 shadow-sm"
                />
              </div>
              <Quote className="text-teal/30 mx-auto mb-4" size={40} />
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-semibold text-navy text-lg">
                {testimonials[current].author}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {testimonials[current].title}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-teal hover:border-teal transition"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm text-muted-foreground">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-teal hover:border-teal transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
