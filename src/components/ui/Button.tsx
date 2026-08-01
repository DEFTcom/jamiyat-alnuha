import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20",
  secondary:
    "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50",
};

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} className={classes}>
      {children}
    </motion.button>
  );
}
