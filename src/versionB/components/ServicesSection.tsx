import { motion } from "framer-motion";
import { Layers, BarChart3, Zap, TrendingUp } from "lucide-react";
import omnichannelFramework from "@/versionB/assets/omnichannel-framework.png";
import googlePartner from "@/versionB/assets/google-partner.jpg";
import googleCertified from "@/versionB/assets/google-certified.png";
import wbeBadge from "@/versionB/assets/wbe-badge.png";

const services = [
  {
    icon: Layers,
    title: "Integrated from the Start",
    desc: "Digital and traditional channels are planned together — not added on later.",
  },
  {
    icon: BarChart3,
    title: "Strategy-Led Planning",
    desc: "Every channel has a defined role tied to business objectives and audience behavior.",
  },
  {
    icon: Zap,
    title: "Agile Execution",
    desc: "Plans are built to adapt, allowing for real-time optimization and smarter budget shifts.",
  },
  {
    icon: TrendingUp,
    title: "Built for a Changing Landscape",
    desc: "Our approach evolves as platforms, audiences, and media opportunities change.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-navy text-navy-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-teal-light font-medium text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our Omnichannel Approach
          </h2>
          <div className="w-16 h-1 bg-teal mx-auto mb-6 rounded-full" />
          <p className="text-navy-foreground/70 text-lg leading-relaxed">
            We build media strategies the way audiences consume media today —
            connected, flexible, and performance-driven.
          </p>
        </motion.div>

        {/* Omnichannel Framework Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <img
            src={omnichannelFramework}
            alt="Our Omnichannel Media Framework"
            className="w-full rounded-xl shadow-lg"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-navy-foreground/5 border border-navy-foreground/10 rounded-xl p-8 hover:bg-teal/10 hover:border-teal/30 transition-all"
            >
              <div className="w-14 h-14 rounded-lg bg-teal/20 flex items-center justify-center mb-5 group-hover:bg-teal/30 transition-colors">
                <s.icon className="text-teal-light" size={28} />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{s.title}</h3>
              <p className="text-navy-foreground/60 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-navy-foreground/5 border border-navy-foreground/10 rounded-xl p-10"
        >
          <h3 className="text-2xl font-display font-bold mb-4">The Result</h3>
          <p className="text-navy-foreground/70 text-lg max-w-xl mx-auto">
            Clearer strategy. Better integration. Smarter media performance. We believe
            that the partners you choose can directly affect your success. Work with the
            best. Work with Efficiency Media.
          </p>
        </motion.div>

        {/* Google Partner & Certified Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-16"
        >
          <img
            src={googlePartner}
            alt="Google Partner"
            className="h-40 object-contain rounded bg-white p-3"
          />
          <img
            src={googleCertified}
            alt="Google Certified"
            className="h-40 object-contain rounded bg-white p-3"
          />
          <img
            src={wbeBadge}
            alt="Certified WBE - Women Business Enterprise"
            className="h-40 object-contain rounded bg-white p-3"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
