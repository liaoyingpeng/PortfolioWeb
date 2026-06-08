export default function PageIntro({ eyebrow, title, body, titleClassName = "" }) {
  return (
    <section className="reveal grid gap-12 border-b border-white/10 py-20 lg:grid-cols-[0.6fr_1.4fr] lg:py-28">
      <p className="text-xs uppercase tracking-[0.42em] text-stone-300">{eyebrow}</p>
      <div className="space-y-8">
        <h1 className={`max-w-4xl whitespace-pre-line font-[family-name:var(--font-display)] text-4xl font-black leading-[0.95] text-stone-100 sm:text-5xl ${titleClassName}`}>
          {title}
        </h1>
        {body ? <p className="max-w-3xl text-base leading-8 text-stone-300 sm:text-xl">{body}</p> : null}
      </div>
    </section>
  );
}
