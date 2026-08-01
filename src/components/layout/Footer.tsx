import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900">جمعية النهى</h3>
          <p className="text-sm leading-relaxed text-neutral-600">
            جمعية النهى للأمومة والطفولة، جمعية أهلية تعمل على دعم الأمهات والأطفال
            وتمكينهم عبر برامج توعوية وصحية واجتماعية.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-neutral-900">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link to="/about" className="hover:text-brand-700">عن الجمعية</Link></li>
            <li><Link to="/governance" className="hover:text-brand-700">مركز الحوكمة</Link></li>
            <li><Link to="/contact" className="hover:text-brand-700">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-neutral-900">تواصل معنا</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+966559996191" className="hover:text-brand-700">0559996191</a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/RpHPRSTm1DfLDZAG8?g_st=iwb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-brand-700"
              >
                <MapPin size={16} /> مكة المكرمة، حي البحيرات
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} جمعية النهى للأمومة والطفولة — ترخيص رقم 1000873900. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
