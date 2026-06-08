import ProjectFilter from "../components/ProjectFilter";
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
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        {projects.length === 0 ? (
          <div className="reveal py-10">
            <p className="font-[family-name:var(--font-display)] text-3xl">目前沒有可顯示的作品。</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-400">
              Supabase 已連線成功，但 projects 資料表沒有回傳公開可讀取的資料。請確認資料列已新增，
              並且 RLS policy 允許 anon 使用者讀取。
            </p>
          </div>
        ) : (
          <ProjectFilter projects={projects} />
        )}
      </section>
    </SiteShell>
  );
}
