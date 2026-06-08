import PageIntro from "../components/PageIntro";
import SiteShell from "../components/SiteShell";
import { contacts } from "../lib/content";

export const metadata = {
  title: "Contact | LYP"
};

export default function ContactPage() {
  const email = contacts.find((contact) => contact.label === "Email");

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="有合作機會、實習邀約，或只是想交流設計與開發，都歡迎與我聯繫。"
      />

      <section className="grid gap-10 py-20 lg:grid-cols-[0.35fr_1fr] lg:py-28">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.38em] text-stone-300">Contact</p>
          <p className="max-w-sm text-base leading-8 text-stone-400">
            前端開發、UI/UX 設計、實習與作品交流相關，都可以透過 Email 聯繫我。
          </p>
        </div>

        <div>
          {email ? (
            <a
              href={email.href}
              className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-6 text-sm transition hover:-translate-y-0.5 hover:border-white/35 hover:text-white"
            >
              <span className="uppercase tracking-[0.28em] text-stone-300">EMAIL</span>
              <span className="text-right text-base text-stone-100">{email.value}</span>
            </a>
          ) : null}
        </div>
      </section>
    </SiteShell>
  );
}
