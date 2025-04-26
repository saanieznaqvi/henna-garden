import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PremiumButton } from "../ui/premium-button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  isTransparent?: boolean;
}

export const Header = ({
  isTransparent = false,
}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerClasses = `
    fixed top-0 left-0 w-full z-50 bg-[#2A3635] shadow-subtle
  `;

  const logoColor = "text-white";
  const navItemColor = "text-white";
  const menuIconColor = "#ffffff";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Saanie's Henna Garden" className="h-12 w-auto" />
            <span className={`font-heading text-xl tracking-[0.2em] ${logoColor}`}>
              Saanie's Henna Garden
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem 
                key={item.label} 
                href={item.href} 
                label={item.label} 
                color={navItemColor} 
              />
            ))}
            <PremiumButton variant="outline" size="sm">
              Book Now
            </PremiumButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={24} color={menuIconColor} />
            ) : (
              <Menu size={24} color={menuIconColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#2A3635] shadow-premium overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="font-body text-white py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <PremiumButton variant="outline" fullWidth size="sm">
                    Book Now
                  </PremiumButton>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = ({ href, label, color }: { href: string; label: string; color: string }) => {
  return (
    <Link to={href}>
      <motion.span
        className={`relative px-2 py-1 font-body tracking-wider ${color}`}
        whileHover="hover"
        initial="initial"
      >
        {label}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-white"
          variants={{
            initial: { width: "0%", left: "50%" },
            hover: {
              width: "100%",
              left: "0%",
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
        />
      </motion.span>
    </Link>
  );
};
