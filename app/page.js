import Link from "next/link";
import SiteShell from "./components/SiteShell";

const directions = [
  ["01", "UI/UX", "從使用情境整理介面層級與操作節奏。"],
  ["02", "Frontend", "以清楚的前端結構實作設計細節。"],
  ["03", "Interaction", "用克制的動態建立探索感與回饋。"]
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative min-h-[calc(100dvh-5.5rem)] pb-16 pt-20 sm:pt-24 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute right-[-8rem] top-28 hidden h-[34rem] w-[34rem] rounded-full border border-white/[0.055] lg:block" />
        <div className="pointer-events-none absolute left-[-5rem] top-40 hidden h-72 w-72 rounded-[4rem] border border-white/[0.045] lg:block" />

        <div className="grid min-h-[calc(100dvh-13rem)] gap-14 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
          <div className="reveal space-y-11">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-stone-300">
              <span className="h-px w-12 bg-white/20" />
              UI/UX + Frontend + Interaction
            </div>

            <div className="space-y-7">
              <h1 className="hero-title-3d max-w-5xl font-[family-name:var(--font-display)] text-[4.1rem] font-black leading-[0.84] sm:text-[6.8rem] lg:text-[9.5rem]">
                <span>DIGITAL</span>
                <span>WORKS</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center rounded-full border border-white/70 bg-stone-100 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#15151b] shadow-[0_12px_0_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.8)]"
              >
                View Project
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center rounded-full border border-white/14 bg-[#1f1f27] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-stone-200 shadow-[0_12px_28px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                About
              </Link>
            </div>
          </div>

          <aside className="reveal reveal-delay rounded-[2.25rem] border border-white/10 bg-[#1f1f27]/88 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-8">
            <div className="grid gap-0">
              {directions.map(([number, title, body]) => (
                <div key={title} className="grid gap-5 border-b border-white/10 py-6 first:pt-0 last:border-b-0 sm:grid-cols-[4rem_1fr]">
                    <p className="font-[family-name:var(--font-display)] text-4xl font-black text-stone-300">{number}</p>
                  <div className="space-y-3">
                    <h2 className="text-sm uppercase tracking-[0.22em] text-stone-100">{title}</h2>
                    <p className="text-sm leading-7 text-stone-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/work"
              className="mt-8 flex min-h-12 items-center justify-between rounded-full border border-white/12 bg-black/20 px-5 text-sm uppercase tracking-[0.18em] text-stone-300"
            >
              <span>Enter case archive</span>
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
