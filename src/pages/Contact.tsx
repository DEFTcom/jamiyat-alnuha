import { MapPin, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/layout/ContactForm";
import { PageBanner } from "@/components/layout/PageBanner";
import bannerImage from "@/assets/banners/hero-inner.png";

export function Contact() {
  return (
    <div>
      <PageBanner image={bannerImage} />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-4">
        <SectionHeader
          eyebrow="نسعد بتواصلكم"
          title="تواصل معنا"
          description="لأي استفسار أو شراكة أو دعم، فريقنا جاهز للرد عليكم."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+966559996191"
            className="glass flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-neutral-700 hover:text-brand-700"
          >
            <Phone size={16} /> 0559996191
          </a>
          <a
            href="https://maps.app.goo.gl/RpHPRSTm1DfLDZAG8?g_st=iwb"
            target="_blank"
            rel="noreferrer"
            className="glass flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-neutral-700 hover:text-brand-700"
          >
            <MapPin size={16} /> مكة المكرمة، حي البحيرات
          </a>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
