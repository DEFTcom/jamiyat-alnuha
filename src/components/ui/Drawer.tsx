import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { X } from "lucide-react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Drawer({ open, onClose, children }: DrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-y-0 end-0 z-50 w-72 bg-white p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="mb-6 rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
              aria-label="إغلاق"
            >
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
