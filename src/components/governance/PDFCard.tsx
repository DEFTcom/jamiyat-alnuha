import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import type { GovernanceDocument } from "@/types/governance";
import { fadeUp } from "@/animations/variants";

interface PDFCardProps {
  doc: GovernanceDocument;
  onPreview: (doc: GovernanceDocument) => void;
}

export function PDFCard({ doc, onPreview }: PDFCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="glass flex flex-col gap-4 rounded-3xl p-6"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <FileText size={22} />
        </div>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
          {doc.category}
        </span>
      </div>

      <div>
        <h3 className="text-base font-semibold text-neutral-900">{doc.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600">{doc.description}</p>
      </div>

      <div className="mt-auto flex items-center justify-between text-xs text-neutral-400">
        <span>{(doc.fileSizeKb / 1024).toFixed(1)} MB</span>
        <span>{doc.updatedAt}</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPreview(doc)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          <Eye size={16} /> معاينة
        </button>
        <a
          href={doc.fileUrl}
          download
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-200 py-2.5 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Download size={16} /> تحميل
        </a>
      </div>
    </motion.div>
  );
}
