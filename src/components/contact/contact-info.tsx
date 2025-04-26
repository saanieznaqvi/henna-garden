import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";

interface ContactInfoProps {
  highlightOnHover?: boolean;
}

export const ContactInfo = ({ highlightOnHover = true }: ContactInfoProps) => {
  return (
    <div className="bg-secondary-light rounded-lg p-6 md:p-8 h-full">
      <h3 className="font-heading text-2xl text-primary mb-6">Contact Information</h3>
      
      <ul className="space-y-6">
        <ContactItem
          icon={<Mail size={20} />}
          title="Email"
          content="saanieshennagarden@gmail.com"
          highlightOnHover={highlightOnHover}
        />
        
        <ContactItem
          icon={<Instagram size={20} />}
          title="Instagram"
          content="@saanies_henna_garden"
          link="https://www.instagram.com/saanies_henna_garden?igsh=ZWdvY3FpYXp5aGt2&utm_source=qr"
          highlightOnHover={highlightOnHover}
        />
        
        <ContactItem
          icon={<MapPin size={20} />}
          title="Service Area"
          content="Sugar Land, TX and Galveston, TX"
          highlightOnHover={highlightOnHover}
        />
        
        <ContactItem
          icon={<Clock size={20} />}
          title="Availability"
          content="By appointment only"
          highlightOnHover={highlightOnHover}
        />
      </ul>
      
      <div className="mt-8 p-4 bg-white/50 rounded text-center">
        <p className="font-body text-sm text-primary/70">
          For the fastest response, please use the booking form or contact us directly via Instagram.
        </p>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  highlightOnHover?: boolean;
}

const ContactItem = ({
  icon,
  title,
  content,
  link,
  highlightOnHover,
}: ContactItemProps) => {
  const ContentComponent = link ? 'a' : 'span';
  const contentProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <li className="flex items-start">
      <div className="bg-white p-2 rounded-full mr-4">
        <span className="text-accent">{icon}</span>
      </div>
      <div>
        <h4 className="font-heading text-lg text-primary">{title}</h4>
        <ContentComponent
          {...contentProps}
          className={`font-body text-primary/70 ${
            link ? "hover:text-accent transition-colors" : ""
          }`}
        >
          {content}
        </ContentComponent>
      </div>
    </li>
  );
};
