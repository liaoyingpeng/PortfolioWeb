export default function PhoneMockup({ imageUrl, title }) {
  return (
    <div className="relative mx-auto w-full max-w-[14rem] rotate-[2deg] transition duration-500 group-hover/project:-translate-y-2 group-hover/project:rotate-[0.8deg] group-hover/mockup:-translate-y-2 group-hover/mockup:rotate-[0.8deg]">
      <div className="absolute -inset-8 -z-10 rounded-full bg-white/[0.045] blur-3xl transition duration-500 group-hover/project:bg-white/[0.075] group-hover/mockup:bg-white/[0.075]" />
      <div className="rounded-[2.35rem] border border-stone-600/70 bg-stone-950 p-1.5 shadow-[0_34px_90px_rgba(0,0,0,0.68)]">
        <div className="relative overflow-hidden rounded-[1.95rem] border border-stone-700/60 bg-stone-900 aspect-[9/19.5]">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-stone-950 shadow-lg shadow-black/40" />
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${title} app screen`}
              className="h-full w-full object-cover brightness-95 contrast-105 transition duration-500 group-hover/project:scale-[1.025] group-hover/project:brightness-110 group-hover/mockup:scale-[1.025] group-hover/mockup:brightness-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,_rgba(245,245,244,0.12),_rgba(68,64,60,0.35))] px-8 text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl text-stone-300">{title}</p>
            </div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[2.35rem] ring-1 ring-white/10" />
    </div>
  );
}
