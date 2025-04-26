import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h4 className="font-heading text-2xl mb-4">Saanie's Henna Garden</h4>
            <p className="font-body text-sm mb-6 opacity-80">
              Elegant henna artistry for all occasions. Experience the beauty of
              traditional designs with a modern twist.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.instagram.com/saanies_henna_garden?igsh=ZWdvY3FpYXp5aGt2&utm_source=qr">
                <Instagram size={20} />
              </SocialIcon>
              <SocialIcon href="mailto:saanieshennagarden@gmail.com">
                <Mail size={20} />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading text-xl mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services & Pricing</FooterLink>
              <FooterLink href="/gallery">Design Gallery</FooterLink>
              <FooterLink href="/about">About Saanie</FooterLink>
              <FooterLink href="/contact">Contact & Booking</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-heading text-xl mb-4">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-center font-body text-sm">
                <Mail size={16} className="mr-3 opacity-80" />
                <span>saanieshennagarden@gmail.com</span>
              </li>
              <li className="flex items-start font-body text-sm">
                <MapPin size={16} className="mr-3 mt-1 opacity-80" />
                <span>Sugar Land, TX and Galveston, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-xs opacity-70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Saanie's Henna Garden. All rights reserved.
          </p>
          <div className="flex space-x-4 font-body text-xs">
            <Link to="/privacy" className="opacity-70 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="opacity-70 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
    >
      {children}
    </a>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link to={href}>
        <span className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
          {children}
        </span>
      </Link>
    </li>
  );
};
