import React from "react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/page-container";
import { PageTitle } from "@/components/common/page-title";
import { ServiceCards } from "@/components/services/service-cards";
import { PremiumButton } from "@/components/ui/premium-button";
import { serviceCategories } from "@/data/site-data";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <PageContainer pageTransition="slide">
      <PageTitle 
        title="My Services" 
        subtitle="Discover my bouquet of henna services, each designed to make your moments blossom" 
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ServiceCards services={serviceCategories} />
            <motion.p 
              className="text-center mt-8 text-sm text-primary/70 italic max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              * The images shown are examples of work by talented henna artists and are used for 
              illustrative purposes. While these images represent my services, they are not my personal work. Rest assured, my designs maintain the 
              same level of intricacy and attention to detail.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="mt-16 bg-secondary-light p-8 rounded-lg shadow-subtle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="font-heading text-2xl text-primary mb-2">
                  Ready to Let Your Beauty Bloom?
                </h3>
                <p className="font-body text-primary/80">
                  Schedule your henna experience and watch your vision flourish
                </p>
              </div>
              <Link to="/contact">
                <PremiumButton variant="primary" size="lg">
                  Book Now
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl mb-6 text-primary text-center">
              Growing Your Knowledge
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
            
            <div className="space-y-8">
              <FaqItem 
                question="How long does henna last?" 
                answer="Henna typically lasts 1-3 weeks, depending on the body part, your skin type, and how well you care for it after application. Hands and feet tend to stain the darkest and last the longest. Please note that the longevity of your henna design cannot be guaranteed as it heavily depends on how well the aftercare instructions are followed and individual skin characteristics." 
              />
              
              <FaqItem 
                question="Is henna safe?" 
                answer="Yes! I use only natural henna powder mixed with essential oils and natural ingredients. My henna paste contains no chemicals, PPD, or artificial additives that can cause allergic reactions." 
              />
              
              <FaqItem 
                question="How far in advance should I book my bridal henna?" 
                answer="For bridal henna, we recommend booking at least 2-3 months in advance to secure your date, especially during peak wedding season. The actual application should be done 2-3 days before your wedding day." 
              />
              
              <FaqItem 
                question="Do you travel for appointments?" 
                answer="Yes, I offer mobile services throughout Sugar Land, Houston, and Galveston areas. Travel fees may apply depending on the location." 
              />
              
              <FaqItem 
                question="What's the booking process?" 
                answer="You can request a booking through my contact form, email, or Instagram. I'll confirm availability, discuss design options, and secure your appointment with a deposit." 
              />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <motion.div 
      className="border-b border-secondary pb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="font-heading text-xl mb-3 text-primary">{question}</h4>
      <p className="font-body text-primary/80">{answer}</p>
    </motion.div>
  );
};

export default Services;
