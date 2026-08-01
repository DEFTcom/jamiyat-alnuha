import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative mx-auto max-w-2xl border-e-2 border-brand-100 pe-8"
    >
      {items.map((item) => (
        <motion.li key={item.year} variants={fadeUp} className="relative mb-10 last:mb-0">
          <span className="absolute -end-[41px] top-1 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-100" />
          <span className="text-sm font-semibold text-brand-600">{item.year}</span>
          <h4 className="mt-1 text-base font-semibold text-neutral-900">{item.title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.description}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
