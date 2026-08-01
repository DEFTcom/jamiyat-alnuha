import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-start"}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-medium text-brand-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}
