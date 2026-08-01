import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants";
import heroImage from "@/assets/banners/hero-home.png";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

export function Hero({ eyebrow, title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center md:order-2 md:text-start"
        >
          {eyebrow && (
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-medium text-brand-700"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 md:mx-0"
          >
            {description}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              {primaryCta && <Button to={primaryCta.to}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button to={secondaryCta.to} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:order-1"
        >
          <img
            src={heroImage}
            alt=""
            className="mx-auto w-full max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
