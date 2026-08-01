import { SectionHeader } from "@/components/ui/SectionHeader";
import { PersonGrid } from "@/components/layout/PersonGrid";
import { PageBanner } from "@/components/layout/PageBanner";
import { executiveTeam } from "@/data/team";
import bannerImage from "@/assets/banners/hero-inner.png";

export function ExecutiveTeam() {
  return (
    <div>
      <PageBanner image={bannerImage} />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-4">
        <SectionHeader
          eyebrow="الإدارة التنفيذية"
          title="الفريق التنفيذي"
          description="فريق تنفيذي متخصص يترجم استراتيجية الجمعية إلى برامج وأثر ملموس."
        />
        <div className="mt-14">
          <PersonGrid people={executiveTeam} />
        </div>
      </div>
    </div>
  );
}
