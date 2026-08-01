import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Hero } from "@/components/layout/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/animations/variants";
import governanceImage from "@/assets/banners/hero-governance.png";

const pillars = [
  {
    icon: HeartHandshake,
    title: "تنمية مهارات الطفل",
    description: "برامج تربوية ومهارية تواكب مراحل نمو الطفل المختلفة.",
  },
  {
    icon: Users,
    title: "دعم الأطفال الأيتام",
    description: "دعم نفسي واجتماعي وتربوي، وكفالة مادية ومعنوية لتنمية مهاراتهم الحياتية.",
  },
  {
    icon: ShieldCheck,
    title: "حوكمة شفافة",
    description: "جمعية مرخصة رسميًا من المركز الوطني لتنمية القطاع غير الربحي، رقم 1000873900.",
  },
  {
    icon: Sparkles,
    title: "تمكين المربين",
    description: "تزويد المربين بالأدوات والوسائل الحديثة في تربية الطفل.",
  },
];

const trustFacts = [
  { label: "رقم الترخيص", value: "1000873900" },
  { label: "الرقم الوطني الموحد", value: "7054181529" },
  { label: "جهة الإشراف", value: "وزارة الموارد البشرية والتنمية الاجتماعية" },
  { label: "مقر الجمعية", value: "مكة المكرمة" },
];

export function Home() {
  return (
    <>
      <Hero
        eyebrow="جمعية أهلية مرخصة"
        title="جمعية النهى للأمومة والطفولة"
        description="نعمل على تمكين الأمهات ورعاية الأطفال عبر برامج نوعية، بحوكمة شفافة والتزام مجتمعي راسخ."
        primaryCta={{ label: "تعرف على الجمعية", to: "/about" }}
        secondaryCta={{ label: "مركز الحوكمة", to: "/governance" }}
      />

      <section className="border-y border-neutral-200 bg-white/60">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustFacts.map((f) => (
            <motion.div key={f.label} variants={fadeUp} className="text-center">
              <p className="text-xs text-neutral-500">{f.label}</p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">{f.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="رسالتنا"
          title="نصنع الفرق في حياة الأسر"
          description="نؤمن بأن الاستثمار في الأمومة والطفولة هو استثمار في مستقبل المجتمع بأكمله."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => (
            <Card key={p.title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <p.icon size={22} />
              </div>
              <h3 className="text-base font-semibold text-neutral-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.description}</p>
            </Card>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass grid items-center gap-8 rounded-[2rem] p-8 sm:p-12 md:grid-cols-2"
        >
          <div className="order-2 text-center md:order-1 md:text-start">
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-medium text-brand-700">
              الشفافية والإفصاح
            </span>
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
              مركز حوكمة مفتوح للجميع
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-600 md:mx-0">
              اطّلع على شهادة الترخيص، اللائحة الأساسية، وقرارات مجلس الإدارة — كل وثيقة متاحة
              للمعاينة والتحميل مباشرة.
            </p>
            <div className="mt-8">
              <Button to="/governance">تصفح مركز الحوكمة</Button>
            </div>
          </div>
          <img
            src={governanceImage}
            alt=""
            className="order-1 mx-auto w-full max-w-sm md:order-2"
          />
        </motion.div>
      </section>

      <section className="bg-brand-900 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-semibold">كن جزءًا من الأثر</h2>
          <p className="mt-4 text-brand-100">
            تعرّف على مجلس الإدارة والفريق التنفيذي، أو تواصل معنا مباشرة.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/board" variant="secondary" className="!bg-white/10 !text-white hover:!bg-white/20">
              مجلس الإدارة
            </Button>
            <Button to="/contact">تواصل معنا</Button>
          </div>
        </div>
      </section>
    </>
  );
}
