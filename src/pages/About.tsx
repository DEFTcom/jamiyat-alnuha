import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageBanner } from "@/components/layout/PageBanner";
import bannerImage from "@/assets/banners/hero-inner.png";

const goals = [
  "المساهمة في تنمية مهارات الطفل.",
  "تقديم البرامج التربوية والمهارية للطفل.",
  "تقديم الدعم النفسي والاجتماعي والتربوي للأطفال الأيتام.",
  "تمكين المربين من الأدوات والوسائل الحديثة في تربية الطفل.",
  "كفالة اليتيم ماديًا ومعنويًا وتنمية مهاراته الحياتية.",
];

export function About() {
  return (
    <div>
      <PageBanner image={bannerImage} />
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-4">
      <SectionHeader
        eyebrow="من نحن"
        title="عن جمعية النهى"
        description="جمعية أهلية غير ربحية مرخصة برقم (1000873900) من المركز الوطني لتنمية القطاع غير الربحي، تعمل تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية، ومقرها الرئيسي مدينة مكة المكرمة."
      />

      <div className="mt-14">
        <h3 className="mb-6 text-center text-2xl font-semibold text-neutral-900">أهدافنا</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {goals.map((goal, i) => (
            <div key={goal} className="glass flex items-start gap-3 rounded-2xl p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-neutral-700">{goal}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 rounded-3xl bg-brand-900 p-8 text-white sm:grid-cols-3">
        <div>
          <p className="text-xs text-brand-200">رقم الترخيص</p>
          <p className="mt-1 text-lg font-semibold">1000873900</p>
        </div>
        <div>
          <p className="text-xs text-brand-200">الرقم الوطني الموحد</p>
          <p className="mt-1 text-lg font-semibold">7054181529</p>
        </div>
        <div>
          <p className="text-xs text-brand-200">جهة الإشراف</p>
          <p className="mt-1 text-lg font-semibold">وزارة الموارد البشرية والتنمية الاجتماعية</p>
        </div>
      </div>
      </div>
    </div>
  );
}
