const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            <span className="text-teal text-xl font-mono">⟨</span>
            <span className="font-bold tracking-wider text-navy-foreground">EFFICIENCY</span>
            <span className="text-teal text-xl font-mono">⟩</span>
            <span className="text-teal-light text-sm font-medium ml-1">Media</span>
          </div>
          <p className="text-navy-foreground/50 text-sm">
            © {new Date().getFullYear()} Efficiency Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Home", "About Us", "Services", "Testimonials"].map((label) => (
              <button
                key={label}
                onClick={() => {
                  const id = label.toLowerCase().replace(/\s+/g, "");
                  const map: Record<string, string> = { home: "home", aboutus: "about", services: "services", testimonials: "testimonials" };
                  document.querySelector(`#${map[id] || id}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-navy-foreground/60 text-sm hover:text-teal-light transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
