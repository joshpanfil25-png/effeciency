import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            About Efficiency Media
          </h2>
          <div className="w-16 h-1 bg-teal mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            At Efficiency Media, our omnichannel approach brings together specialists
            across all media disciplines—digital and traditional—to collaborate on
            developing the most effective media plans to meet our clients' needs.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Our team of experienced media planners and buyers, each with 10+ years of
            expertise in their core competencies, combines strategic insight with agile
            execution to deliver integrated solutions.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            As an employee-owned agency, we're more invested than ever in delivering
            innovative solutions and measurable results for our clients through the
            rapidly changing media landscape.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
            onClick={() => document.querySelector("#team")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 bg-teal text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-teal-light transition-colors"
          >
            Meet the Team
          </motion.button>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Proudly Female Owned",
              desc: "We are a female-owned agency that fosters an empowering and flexible work environment—built on integrity and accountability.",
            },
            {
              title: "Employee Owned",
              desc: "Our transition to employee ownership means we're more invested than ever in delivering innovative solutions for our clients.",
            },
            {
              title: "Our Mission",
              desc: "To be the most trusted media partner by delivering thoughtful strategy, disciplined execution, and total transparency.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-display font-semibold text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
