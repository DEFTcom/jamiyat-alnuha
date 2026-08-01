import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/animations/variants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 text-center"
      >
        <h3 className="text-xl font-semibold text-neutral-900">شكرًا لتواصلكم معنا</h3>
        <p className="mt-2 text-neutral-600">سيقوم فريقنا بالرد عليكم في أقرب وقت ممكن.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onSubmit={handleSubmit}
      className="glass grid gap-5 rounded-3xl p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">الاسم</label>
          <input
            required
            type="text"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">البريد الإلكتروني</label>
          <input
            required
            type="email"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-700">الموضوع</label>
        <input
          required
          type="text"
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-700">الرسالة</label>
        <textarea
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <Button type="submit" className="justify-self-start">
        إرسال الرسالة <Send size={16} />
      </Button>
    </motion.form>
  );
}
