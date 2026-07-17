import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// This lucide version dropped the Linkedin brand glyph, so we inline a matching
// icon that accepts the same { className, size } props lucide icons use.
const Linkedin = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Phone,
              label: "Phone",
              value: "773.463.8801",
              href: "tel:7734638801",
            },
            {
              icon: Mail,
              label: "Email",
              value: "info@efficiencymedia.com",
              href: "mailto:info@efficiencymedia.com",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Chicago, IL",
              href: "#",
            },
            {
              icon: Linkedin,
              label: "Connect",
              value: "LinkedIn",
              href: "https://www.linkedin.com/company/efficiency-media/?originalSubdomain=pr",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-14 h-14 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                <item.icon className="text-teal" size={24} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="font-semibold text-navy">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
