import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Loader } from "@/components/ui/Loader";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  fileUrl: string;
}

export function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full overflow-auto rounded-2xl border border-neutral-200 bg-neutral-50">
        <Document
          file={fileUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<Loader label="جاري تحميل المستند..." />}
          error={
            <p className="p-10 text-center text-sm text-neutral-500">
              تعذر تحميل المستند. تأكد من توفر الملف.
            </p>
          }
        >
          <Page pageNumber={page} width={640} />
        </Document>
      </div>

      {numPages && numPages > 1 && (
        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="rounded-full p-2 hover:bg-neutral-100 disabled:opacity-30"
            aria-label="الصفحة السابقة"
          >
            <ChevronRight size={18} />
          </button>
          <span>
            صفحة {page} من {numPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(numPages, p + 1))}
            disabled={page >= numPages}
            className="rounded-full p-2 hover:bg-neutral-100 disabled:opacity-30"
            aria-label="الصفحة التالية"
          >
            <ChevronLeft size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
