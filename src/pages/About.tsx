import React from "react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/page-container";
import { PageTitle } from "@/components/common/page-title";
import { SectionHeader } from "@/components/common/section-header";
import { processSteps, testimonials } from "@/data/site-data";

const About = () => {
  return (
    <PageContainer pageTransition="fade">
      <PageTitle 
        title="About Me" 
        subtitle="The artist behind Saanie's Henna Garden" 
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Meet the Artist"
            subtitle="The artist behind Saanie's Henna Garden"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/assets/about-saanie.jpg" 
                  alt="Saanie, Henna Artist" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl mb-6 text-primary">
                Meet the Artist
              </h2>
              <div className="w-24 h-1 bg-accent mb-6"></div>
              
              <div className="space-y-4 font-body text-primary/80">
                <p>
                  Welcome to Saanie's Henna Garden! I'm Saanie, a passionate henna artist based in the Greater Houston Area, specializing in intricate floral designs that bring natural beauty to life.
                </p>
                <p>
                  My journey with henna began through my Pakistani heritage, but it truly blossomed from my deep love of art, design, and nature. As someone who has always been drawn to the delicate details in both art and the natural world, I found my perfect creative expression in henna artistry.
                </p>
                <p>
                  I specialize in dainty floral designs, creating intricate patterns that reflect the beauty of nature. What makes my work unique is my attention to detail and my love for creating delicate, nature-inspired pieces that make each client feel beautiful.
                </p>
                <p>
                  While I'm relatively new to professional henna artistry, I'm excited to turn my passion into a business that brings joy and beauty to others. Whether you're celebrating a special occasion or simply want to adorn yourself with beautiful henna, I'm committed to creating a design that perfectly captures your vision with my signature floral touch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Aftercare Instructions"
            subtitle="Follow these steps to ensure your henna design lasts as long as possible"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-accent"></div>
              
              {/* Timeline Content */}
              <div className="space-y-24">
                <TimelineItem 
                  year="First 4-6 Hours" 
                  title="Initial Care" 
                  content={[
                    "Keep the paste on for at least 4-6 hours (the longer, the darker the stain)",
                    "Avoid touching or smudging the wet henna paste",
                    "For overnight applications, wrap the area with mefix tape",
                    "After the paste is dry, apply a lemon juice and sugar mixture on top",
                    "Stay warm and avoid water contact"
                  ]}
                  side="left"
                />
                
                <TimelineItem 
                  year="6-8 Hours" 
                  title="Paste Removal" 
                  content={[
                    "Gently scrape off the dry paste using the edge of a credit card or butter knife",
                    "Do not wash the area with water for at least 10 hours (water stops the darkening process)",
                    "Apply a natural oil (coconut or olive oil) to seal and protect the design",
                    "Continue to avoid water contact"
                  ]}
                  side="right"
                />
                
                <TimelineItem 
                  year="8-24 Hours" 
                  title="Development Period" 
                  content={[
                    "Keep the design completely dry for 24 hours",
                    "If showering is necessary, apply oil and cover with plastic wrap",
                    "Avoid harsh soaps, chemicals, or excessive rubbing",
                    "The color will continue to develop and darken during this time"
                  ]}
                  side="left"
                />
                
                <TimelineItem 
                  year="24+ Hours" 
                  title="Ongoing Care" 
                  content={[
                    "Your design has now reached its final color",
                    "Continue applying natural oil daily to maintain the design",
                    "Avoid chlorine, chemicals, and excessive scrubbing",
                    "With proper care, your henna can last 1-3 weeks"
                  ]}
                  side="right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="My Process"
            subtitle="From consultation to aftercare, every step of my process is designed to ensure you receive the best possible henna experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {processSteps.slice(0, 3).map((step, index) => (
              <ProcessStep 
                key={step.id}
                number={index + 1}
                title={step.title}
                description={step.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <ProcessStep 
              number={4}
              title={processSteps[3].title}
              description={processSteps[3].description}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Client Testimonials"
            subtitle="What my clients say about their experience"
            darkBackground={true}
            textColor="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                title={testimonial.title}
                quote={testimonial.quote}
                author={testimonial.name}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Review Submission Section */}
          <div className="max-w-2xl mx-auto bg-white text-primary p-8 rounded-lg shadow-subtle">
            <SectionHeader 
              title="Share Your Experience"
              subtitle="I'd love to hear about your experience with Saanie's Henna Garden"
            />
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="review" className="block font-body mb-2">Your Review</label>
                <textarea
                  id="review"
                  rows={4}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Share your experience with Saanie's Henna Garden"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 px-6 rounded-lg font-body hover:bg-accent-dark transition-colors duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  content: string[];
  side: "left" | "right";
}

const TimelineItem = ({ year, title, content, side }: TimelineItemProps) => {
  return (
    <div className="flex flex-col items-center gap-6 relative">
      {/* Time Box */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-primary text-white rounded-lg px-4 py-2 shadow-subtle">
          <p className="font-heading text-sm text-center leading-tight whitespace-nowrap">
            {year}
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full flex items-start justify-center">
        <motion.div 
          className={`w-5/12 ${side === "left" ? "text-center pr-16" : "order-3 text-center pl-16"}`}
          initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl mb-4 text-primary">{title}</h3>
          <div className="font-body text-primary/80 space-y-3">
            {content.map((item, index) => (
              <p key={index} className="leading-relaxed text-center">{item}</p>
            ))}
          </div>
        </motion.div>
        
        {/* Center Line */}
        <div className="w-2/12 flex justify-center relative min-h-[200px]">
          <div className="absolute top-0 bottom-0 w-px bg-accent"></div>
        </div>
        
        {/* Empty Space Section */}
        <div className={`w-5/12 ${side === "left" ? "order-3" : ""}`}></div>
      </div>
    </div>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep = ({ number, title, description, delay = 0 }: ProcessStepProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-subtle h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-heading text-xl mb-4">
        {number}
      </div>
      <h3 className="font-heading text-xl mb-3 text-primary">{title}</h3>
      <p className="font-body text-sm text-primary/80">{description}</p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  title: string;
  quote: string;
  author: string;
  image: string;
  delay?: number;
}

const TestimonialCard = ({ title, quote, author, image, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white text-primary p-6 rounded-lg shadow-subtle flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        boxShadow: "0 15px 30px rgba(37, 55, 55, 0.2)",
        transition: { duration: 0.4 }
      }}
    >
      <div className="flex justify-center mb-2">
        <img src="/assets/logo2.png" alt="Saanie's Henna Garden Logo" className="w-12 h-12 object-contain" />
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <h3 className="font-heading text-xl text-center mb-4 text-primary">{title}</h3>
        <p className="quote font-body leading-relaxed mb-4 text-center">{quote}</p>
        <p className="author-name font-heading text-primary text-center">{author}</p>
      </div>
    </motion.div>
  );
};

export default About;
