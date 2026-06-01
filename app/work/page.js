import Link from "next/link";
import LaptopMockup from "../components/LaptopMockup";
import PhoneMockup from "../components/PhoneMockup";
import SiteShell from "../components/SiteShell";
import { getProjects } from "../lib/projects";

export const metadata = {
  title: "Project | LYP"
};

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <SiteShell>
      <section className="relative overflow-hidden pb-8 pt-14 sm:pt-16 lg:pb-10 lg:pt-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-300">Selected Project</p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-black leading-[0.9] text-stone-100 sm:text-7xl lg:text-8xl">
              Project
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            以作品展示為主，點選每張卡片進入完整案例。
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        {projects.length === 0 ? (
          <div className="reveal rounded-[2.5rem] border border-white/10 bg-[#1f1f27] p-10 shadow-2xl shadow-black/25">
            <p className="font-[family-name:var(--font-display)] text-3xl">目前沒有可顯示的作品。</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-400">
              Supabase 已連線成功，但 projects 資料表沒有回傳公開可讀取的資料。請確認資料列已新增，
              並且 RLS policy 允許 anon 使用者讀取。
            </p>
          </div>
        ) : (
          <div className="rounded-[2rem] border border-white/10 bg-[#1f1f27]/92 p-4 shadow-[0_38px_120px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.07)] sm:rounded-[3rem] sm:p-6 lg:p-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="group/project scroll-reveal flex min-h-[34rem] cursor-pointer flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#15151b] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.055)] transition duration-300 hover:-translate-y-1 hover:border-white/24 hover:bg-[#191922] sm:rounded-[2rem] sm:p-4"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-6 px-2 pt-2 sm:mb-5 sm:px-3 sm:pt-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-stone-300">Idea {project.display_id}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-stone-500">{project.category}</p>
                    </div>
                    <span className="font-[family-name:var(--font-display)] text-5xl font-black leading-none text-stone-700 sm:text-6xl">
                      {project.display_id}
                    </span>
                  </div>

                  <div className="mockup-scene relative flex h-[21rem] items-center justify-center overflow-hidden rounded-[1.25rem] p-8 ring-1 ring-white/10 transition duration-300 group-hover/project:brightness-110 sm:rounded-[1.6rem]">
                    <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                    {project.title.includes("陪伴雲") || project.title.includes("CareNova") ? (
                      <div className="flex h-full items-center [&>div]:max-w-[9.25rem]">
                        <PhoneMockup imageUrl={project.image_url} title={project.title} />
                      </div>
                    ) : (
                      <LaptopMockup imageUrl={project.image_url} title={project.title} />
                    )}
                  </div>
                </div>

                <div className="mt-7 space-y-6 px-2 pb-3 sm:px-3 sm:pb-4">
                  <div className="space-y-4">
                    <h2 className="font-[family-name:var(--font-display)] text-4xl font-black leading-[0.95] text-stone-100 sm:text-5xl">
                      {project.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-stone-300">
                      {project.subtitle || project.description}
                    </p>
                  </div>
                  <div className="grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                    <p className="text-sm leading-7 text-stone-300">
                      使用技術：{project.tech_stack.join(" / ")}
                    </p>
                    <span className="inline-flex rounded-full border border-white/12 bg-white/[0.035] px-4 py-3 text-xs uppercase tracking-[0.22em] text-stone-300">
                      View detail
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        )}
      </section>
    </SiteShell>
  );
}
