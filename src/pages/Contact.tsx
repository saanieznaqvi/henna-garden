import React from "react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/page-container";
import { PageTitle } from "@/components/common/page-title";
import { BookingForm } from "@/components/contact/booking-form";
import { ContactInfo } from "@/components/contact/contact-info";

const Contact = () => {
  return (
    <PageContainer pageTransition="slide">
      <PageTitle 
        title="Book Your Session" 
        subtitle="Contact us to schedule your henna appointment" 
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BookingForm fieldFocusEffects={true} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactInfo highlightOnHover={true} />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl mb-4 text-primary">Service Area</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="font-body max-w-2xl mx-auto text-primary/80">
              I provide henna services throughout the Greater Houston area, including Sugar Land, Galveston, and surrounding areas.
            </p>
          </div>
          
          <motion.div
            className="bg-white p-4 rounded-lg shadow-subtle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full">
              <img 
                src="/assets/map.png" 
                alt="Service Area Map" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Contact;
