import { motion } from "framer-motion";
import type { Person } from "@/types/team";
import { Card } from "@/components/ui/Card";
import { staggerContainer } from "@/animations/variants";

export function PersonGrid({ people }: { people: Person[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {people.map((p) => (
        <Card key={p.id} className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-semibold text-brand-700">
            {p.name.split(" ")[1]?.[0] ?? p.name[0]}
          </div>
          <h3 className="text-base font-semibold text-neutral-900">{p.name}</h3>
          <p className="mt-1 text-sm font-medium text-brand-600">{p.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">{p.bio}</p>
        </Card>
      ))}
    </motion.div>
  );
}
