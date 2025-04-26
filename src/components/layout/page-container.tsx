import React from "react";
import { motion } from "framer-motion";
import { Header } from "./header";
import { Footer } from "./footer";

type PageTransitionType = "fade" | "slide" | "scale";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  pageTransition?: PageTransitionType;
  headerTransparent?: boolean;
}

export const PageContainer = ({
  children,
  className = "",
  pageTransition = "fade",
  headerTransparent = false,
}: PageContainerProps) => {
  const getTransitionVariants = (type: PageTransitionType) => {
    switch (type) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
          exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
        };
      case "slide":
        return {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          exit: { opacity: 0, x: -20, transition: { duration: 0.4, ease: "easeIn" } },
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.98 },
          animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
          exit: { opacity: 0, scale: 1.02, transition: { duration: 0.4, ease: "easeIn" } },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.6 } },
          exit: { opacity: 0, transition: { duration: 0.4 } },
        };
    }
  };

  return (
    <>
      <Header isTransparent={headerTransparent} />
      <motion.main
        className={`min-h-screen ${className}`}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getTransitionVariants(pageTransition)}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};
