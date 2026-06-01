import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Project" },
  { href: "/contact", label: "Contact" }
];

export default function SiteShell({ children }) {
  return (
    <main className="min-h-screen bg-[#15151b] text-stone-100">
      <div className="relative isolate min-h-screen overflow-hidden">
        <div className="site-grid pointer-events-none absolute inset-0 -z-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_50%_-10%,_rgba(255,255,255,0.14),_transparent_54%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(21,21,27,0)_0%,_rgba(21,21,27,0.28)_44%,_#15151b_100%)]" />
        <div className="mx-auto flex min-h-screen w-full max-w-[92rem] flex-col px-5 py-5 sm:px-8 lg:px-12">
          <header className="sticky top-5 z-20 mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/10 bg-[#1f1f27]/82 px-2 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:flex-nowrap sm:justify-between sm:gap-4 sm:rounded-full sm:px-5">
            <Link href="/" className="flex min-h-9 items-center rounded-full px-2 font-[family-name:var(--font-display)] text-base font-black uppercase tracking-[0.2em] text-stone-100 sm:min-h-11 sm:px-4 sm:text-xl sm:tracking-[0.24em]">
              LYP
            </Link>
            <nav className="flex min-h-10 items-center gap-1 rounded-full bg-black/18 p-1 text-[0.68rem] text-stone-300 sm:min-h-11 sm:gap-2 sm:text-sm">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="flex min-h-8 items-center rounded-full px-2 uppercase tracking-[0.1em] sm:min-h-9 sm:px-4 sm:tracking-[0.12em]">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
        </div>
      </div>
    </main>
  );
}
