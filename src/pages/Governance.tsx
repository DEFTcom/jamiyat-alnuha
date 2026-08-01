import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PDFCard } from "@/components/governance/PDFCard";
import { PDFViewer } from "@/components/governance/PDFViewer";
import { Modal } from "@/components/ui/Modal";
import { PageBanner } from "@/components/layout/PageBanner";
import { governanceDocuments } from "@/data/governance";
import type { DocumentCategory, GovernanceDocument } from "@/types/governance";
import { staggerContainer } from "@/animations/variants";
import bannerImage from "@/assets/banners/hero-governance.png";

const categories: (DocumentCategory | "الكل")[] = [
  "الكل",
  "التأسيس والترخيص",
  "اللائحة الأساسية",
  "مجلس الإدارة",
  "القرارات الإدارية",
];

type SortKey = "الأحدث" | "الأقدم" | "الاسم";

export function Governance() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("الكل");
  const [sort, setSort] = useState<SortKey>("الأحدث");
  const [activeDoc, setActiveDoc] = useState<GovernanceDocument | null>(null);

  const filtered = useMemo(() => {
    let docs = governanceDocuments.filter((d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.description.toLowerCase().includes(query.toLowerCase())
    );

    if (category !== "الكل") {
      docs = docs.filter((d) => d.category === category);
    }

    docs = [...docs].sort((a, b) => {
      if (sort === "الأحدث") return b.updatedAt.localeCompare(a.updatedAt);
      if (sort === "الأقدم") return a.updatedAt.localeCompare(b.updatedAt);
      return a.title.localeCompare(b.title, "ar");
    });

    return docs;
  }, [query, category, sort]);

  return (
    <div>
      <PageBanner image={bannerImage} />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-4">
      <SectionHeader
        eyebrow="الشفافية والإفصاح"
        title="مركز الحوكمة"
        description="اطّلع على وثائق الترخيص والتسجيل واللائحة الأساسية وقرارات مجلس الإدارة."
      />

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute end-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث في المستندات..."
            className="w-full rounded-full border border-neutral-200 bg-white py-3 pe-11 ps-4 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="w-full rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 sm:w-auto"
        >
          <option>الأحدث</option>
          <option>الأقدم</option>
          <option>الاسم</option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === c
                ? "bg-brand-600 text-white"
                : "bg-white text-neutral-600 hover:bg-brand-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((doc) => (
            <PDFCard key={doc.id} doc={doc} onPreview={setActiveDoc} />
          ))}
        </motion.div>
      ) : (
        <p className="mt-16 text-center text-sm text-neutral-500">
          لا توجد مستندات مطابقة لبحثك.
        </p>
      )}

      <Modal open={!!activeDoc} onClose={() => setActiveDoc(null)} title={activeDoc?.title}>
        {activeDoc && <PDFViewer fileUrl={activeDoc.fileUrl} />}
      </Modal>
      </div>
    </div>
  );
}
