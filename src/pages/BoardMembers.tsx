import { SectionHeader } from "@/components/ui/SectionHeader";
import { PersonGrid } from "@/components/layout/PersonGrid";
import { PageBanner } from "@/components/layout/PageBanner";
import { boardMembers } from "@/data/team";
import bannerImage from "@/assets/banners/hero-inner.png";

export function BoardMembers() {
  return (
    <div>
      <PageBanner image={bannerImage} />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-4">
        <SectionHeader
          eyebrow="حوكمة الجمعية"
          title="مجلس الإدارة"
          description="نخبة من الخبرات المتخصصة تقود الجمعية نحو تحقيق رسالتها بأعلى معايير الحوكمة."
        />
        <div className="mt-14">
          <PersonGrid people={boardMembers} />
        </div>
      </div>
    </div>
  );
}
