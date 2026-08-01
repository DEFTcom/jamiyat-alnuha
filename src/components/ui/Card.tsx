import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/animations/variants";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`glass rounded-3xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
