import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

interface PageBannerProps {
  image: string;
}

export function PageBanner({ image }: PageBannerProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="relative -mb-4 flex h-40 items-center justify-center overflow-hidden bg-gradient-to-b from-brand-50 to-transparent sm:h-56"
    >
      <img src={image} alt="" className="h-full w-auto max-w-none opacity-90" />
    </motion.div>
  );
}
