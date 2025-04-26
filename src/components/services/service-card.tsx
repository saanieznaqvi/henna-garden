
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PremiumButton } from "../ui/premium-button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string | number;
  expandOnHover?: boolean;
}

export const ServiceCard = ({
  title,
  description,
  image,
  price,
  expandOnHover = true,
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="service-card relative overflow-hidden rounded-lg bg-white"
      initial={{ boxShadow: "0 2px 10px rgba(37, 55, 55, 0.05)" }}
      whileHover={{
        boxShadow: "0 10px 30px rgba(37, 55, 55, 0.1)",
        y: -5,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      onHoverStart={() => expandOnHover && setIsExpanded(true)}
      onHoverEnd={() => expandOnHover && setIsExpanded(false)}
    >
      <div className="service-image-container relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40" />
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-heading">
          {title}
        </h3>
      </div>

      <motion.div
        className="service-details p-4"
        animate={{
          height: isExpanded ? "auto" : "80px",
          overflow: "hidden",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center mb-3">
          <p className="font-body text-accent font-medium">Starting at</p>
          <p className="font-heading text-xl text-primary">${price}</p>
        </div>

        <motion.p
          className="font-body text-primary/70 leading-relaxed"
          animate={{ opacity: isExpanded ? 1 : 0.7 }}
          transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link to="/contact">
            <PremiumButton variant="outline">Book Now</PremiumButton>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
