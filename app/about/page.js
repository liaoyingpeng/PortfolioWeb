import SiteShell from "../components/SiteShell";
import { education, highlights } from "../lib/content";

export const metadata = {
  title: "About | LYP"
};

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    title: "Design",
    items: ["Figma", "UI Design", "Wireframe", "Prototype"]
  },
  {
    title: "Interactive",
    items: ["Unity", "TouchDesigner"]
  }
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="reveal grid gap-12 border-b border-white/10 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:py-28">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-300">About</p>
          <div className="space-y-3">
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-black leading-[0.9] text-stone-100 sm:text-7xl">
              廖盈芃
            </h1>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-stone-400 sm:text-4xl">
              Ying-Peng Liao
            </p>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-300">
            Frontend Developer / UI/UX Designer
          </p>
          <p className="text-xl leading-9 text-stone-200 sm:text-2xl sm:leading-10">
            目前就讀於元智大學資訊傳播學系，專注於網頁前端開發、介面設計與互動體驗設計。
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-400">
            我喜歡從使用情境出發，整理資訊層級、操作流程與視覺節奏，再透過前端實作把概念轉成可以被瀏覽、操作與感受的數位作品。
          </p>
        </div>
      </section>

      <section className="grid gap-12 border-b border-white/10 py-20 lg:grid-cols-[0.35fr_1fr] lg:py-24">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.38em] text-stone-300">Skills</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-stone-100">
            Tools for building digital experiences.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <section key={group.title} className="border-t border-white/10 pt-6">
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-stone-100">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="grid gap-12 border-b border-white/10 py-20 lg:grid-cols-[0.35fr_1fr] lg:py-24">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.38em] text-stone-300">Education</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-stone-100">
            Academic background.
          </h2>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-[family-name:var(--font-display)] text-4xl leading-tight text-stone-100">
            {education.school}
          </p>
          <p className="mt-4 text-base leading-8 text-stone-300">
            {education.department}
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 lg:py-28">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.35fr_1fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.38em] text-stone-300">Experience</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-stone-100">
              Selected milestones.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-stone-400">
            這些經歷來自團隊協作、設計競賽與海外交流，持續累積我在溝通、觀察與專案推進上的能力。
          </p>
        </div>

        <div className="relative space-y-0 border-l border-white/10 pl-6 sm:pl-9">
          {highlights.map((item) => (
            <article key={item.title} className="relative border-b border-white/10 py-8 first:pt-0 last:border-b-0">
              <span className="absolute -left-[1.95rem] top-9 h-3 w-3 rounded-full border border-white/35 bg-[#15151b] sm:-left-[2.35rem]" />
              <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                {item.date}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight text-stone-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-300">
                {item.meta}
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

    </SiteShell>
  );
}
