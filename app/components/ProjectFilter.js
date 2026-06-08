"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";

const filters = [
  { id: "web", label: "Web" },
  { id: "app", label: "App" },
  { id: "game", label: "Game" }
];

function getProjectType(project) {
  const content = [
    project.title,
    project.category,
    project.description,
    ...(project.scope || []),
    ...(project.tech_stack || [])
  ]
    .join(" ")
    .toLowerCase();

  if (content.includes("game") || content.includes("unity") || content.includes("遊戲")) {
    return "game";
  }

  if (
    content.includes("app") ||
    content.includes("mobile") ||
    content.includes("手機") ||
    content.includes("照護") ||
    content.includes("care")
  ) {
    return "app";
  }

  return "web";
}

function ProjectCard({ project }) {
  const isPhoneProject = project.title.includes("陪伴雲") || project.title.includes("CareNova");

  return (
    <Link
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
          {isPhoneProject ? (
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
  );
}

export default function ProjectFilter({ projects }) {
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredProjects = useMemo(
    () => activeFilter ? projects.filter((project) => getProjectType(project) === activeFilter) : projects,
    [activeFilter, projects]
  );

  return (
    <div className="space-y-6">
      <div className="mb-6 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter((currentFilter) => (
                currentFilter === filter.id ? null : filter.id
              ))}
              className={`min-h-11 rounded-full border px-5 text-sm font-bold uppercase tracking-[0.2em] transition duration-200 ${
                isActive
                  ? "border-white/70 bg-stone-100 text-[#15151b] shadow-[0_10px_0_rgba(0,0,0,0.25)]"
                  : "border-white/12 bg-black/20 text-stone-300 hover:border-white/30 hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="min-h-[18rem] py-8 sm:py-10">
          <p className="font-[family-name:var(--font-display)] text-4xl font-black text-stone-100">
            Coming Soon
          </p>
        </div>
      )}
    </div>
  );
}
