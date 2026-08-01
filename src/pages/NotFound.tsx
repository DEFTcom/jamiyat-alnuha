import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/animations/variants";

export function NotFound() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="mx-auto flex max-w-md flex-col items-center px-6 py-32 text-center"
    >
      <span className="text-6xl font-semibold text-brand-200">404</span>
      <h1 className="mt-4 text-2xl font-semibold text-neutral-900">الصفحة غير موجودة</h1>
      <p className="mt-3 text-neutral-600">عذرًا، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.</p>
      <Button to="/" className="mt-8">
        العودة للرئيسية
      </Button>
    </motion.div>
  );
}
