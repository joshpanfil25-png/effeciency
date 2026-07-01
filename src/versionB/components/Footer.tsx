import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    // From the homepage, scroll in place; from elsewhere (e.g. /blog), navigate
    // home to the section. Homepage behavior is unchanged.
    if (location.pathname !== "/") {
      navigate("/#" + id);
      return;
    }
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

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
                  const key = label.toLowerCase().replace(/\s+/g, "");
                  const map: Record<string, string> = { home: "home", aboutus: "about", services: "services", testimonials: "testimonials" };
                  goToSection(map[key] || key);
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
