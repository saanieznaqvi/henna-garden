
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

// Create a subset of motion button props that excludes problematic event handlers
type SafeMotionButtonProps = Omit<HTMLMotionProps<"button">, "onDrag" | "onDragStart" | "onDragEnd">;

// Extend with our custom props
interface PremiumButtonProps extends SafeMotionButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const PremiumButton = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className,
  ...props
}: PremiumButtonProps) => {
  const getVariantStyles = (variant: ButtonVariant) => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white border-primary hover:bg-primary-dark";
      case "secondary":
        return "bg-secondary text-primary border-secondary hover:bg-secondary-dark";
      case "outline":
        return "bg-transparent text-primary border-primary hover:bg-hover-overlay";
      case "text":
        return "bg-transparent text-primary border-transparent hover:bg-hover-overlay";
      default:
        return "bg-primary text-white border-primary hover:bg-primary-dark";
    }
  };

  const getSizeStyles = (size: ButtonSize) => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-6 py-3";
      case "lg":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3";
    }
  };

  return (
    <motion.button
      className={cn(
        "border rounded font-body tracking-wide transition-all",
        getVariantStyles(variant),
        getSizeStyles(size),
        fullWidth ? "w-full" : "",
        className
      )}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 4px 12px rgba(37, 55, 55, 0.1)",
        y: -2,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
