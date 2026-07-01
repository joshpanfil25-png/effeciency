import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

// `alwaysSolid` makes the bar render in its scrolled (solid) style regardless of
// scroll position — used on the blog, where there's no dark hero behind it.
// On the homepage it's omitted, so behavior there is unchanged.
const Navbar = ({ alwaysSolid = false }: { alwaysSolid?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = alwaysSolid || scrolled;

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    // Off the homepage (e.g. /blog): navigate home, then the homepage scrolls
    // to the section via its hash handler.
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-1 group">
          <span className="text-teal text-2xl font-mono">⟨</span>
          <span className={`font-bold text-lg tracking-wider ${solid ? "text-navy" : "text-navy-foreground"}`}>
            EFFICIENCY
          </span>
          <span className="text-teal text-2xl font-mono">⟩</span>
          <span className={`text-sm font-medium ml-1 ${solid ? "text-teal" : "text-teal-light"}`}>
            Media
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                solid ? "text-foreground" : "text-navy-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Blog link — Version B only */}
          <Link
            to="/blog"
            className={`text-sm font-medium transition-colors hover:text-teal ${
              solid ? "text-foreground" : "text-navy-foreground"
            }`}
          >
            Blog
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-foreground hover:text-teal py-2"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="text-left text-sm font-medium text-foreground hover:text-teal py-2"
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
