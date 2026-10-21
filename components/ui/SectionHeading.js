/* Eyebrow label, title and optional intro paragraph used at the top of sections.
   Wrap a word in <em> to show it in italic caramel. */
export default function SectionHeading({ eyebrow, title, lead, centered = false, className = "" }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="font-serif text-4xl font-semibold leading-tight text-cocoa md:text-5xl [&_em]:font-serif [&_em]:italic [&_em]:text-caramel">
        {title}
      </h2>
      {lead && <p className={`mt-4 max-w-xl text-[1.02rem] ${centered ? "mx-auto" : ""}`}>{lead}</p>}
    </div>
  );
}
