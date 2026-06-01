import PageIntro from "../components/PageIntro";
import SiteShell from "../components/SiteShell";
import { education, highlights, services } from "../lib/content";

export const metadata = {
  title: "About | LYP"
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About"
        title="我是廖盈芃，專注於 UI/UX、前端開發與互動體驗設計。"
        titleClassName="about-title-font"
        body="目前就讀元智大學資訊傳播學系科技組，擅長從生活情境與使用者需求出發，將想法轉化為清晰、易用且具良好體驗的數位產品，並透過設計與程式實現完整的互動體驗。"
      />

      <section className="grid gap-14 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
        <div className="space-y-6 text-base leading-8 text-stone-300">
          <p>
            我的作品涵蓋電商平台、二手交易系統、個人品牌網站與智慧照護服務，從使用者需求分析、
            介面規劃到前端開發，持續探索設計與技術之間的平衡。
          </p>
          <p>
            在設計與實作過程中，我重視資訊架構、操作流程與視覺一致性，希望讓使用者能夠自然理解內容、
            順暢完成操作，並感受到作品背後的價值與理念。
          </p>
          <p>
            主要使用 HTML、CSS、JavaScript、PHP 與 MySQL 進行網站開發，並透過 Figma 完成介面設計、
            原型規劃與使用者體驗設計。
          </p>
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Education</p>
            <p className="mt-3 text-stone-100">{education.school}</p>
            <p>{education.department}</p>
          </div>
        </div>

        <div className="grid gap-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="border-b border-white/10 p-7 last:border-b-0 sm:border-r sm:last:border-b sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Capability</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-2xl leading-tight text-stone-100">
                {service.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <p className="text-xs uppercase tracking-[0.42em] text-stone-300">Experience</p>
          <div className="space-y-5">
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[0.04em] text-stone-100 sm:text-5xl">
              Highlights shaped by design, collaboration, and continuous learning.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-stone-400">
              從團隊領導、設計競賽到海外交流，這些經歷持續培養我的溝通能力、設計思維與跨文化視野。
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_1fr]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-stone-400">
                {item.date}
              </p>
              <div className="space-y-4">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                  {item.meta}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-stone-100 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-3xl text-sm leading-7 text-stone-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
