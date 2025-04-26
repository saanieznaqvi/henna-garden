
import React from "react";
import { ServiceCard } from "./service-card";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string | number;
}

interface ServiceCardsProps {
  services: Service[];
  expandOnHover?: boolean;
}

export const ServiceCards = ({ services, expandOnHover = true }: ServiceCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          price={service.price}
          expandOnHover={expandOnHover}
        />
      ))}
    </div>
  );
};
