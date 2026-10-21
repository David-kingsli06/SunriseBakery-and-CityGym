/* Photo card. Shared component: pass in the photo and text.
   image, alt, title, subtitle, text, tagline (all optional except image and title) */
export default function Card({ image, alt, title, subtitle, text, tagline }) {
  return (
    <article className="group h-full overflow-hidden rounded-card border border-line bg-card shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 pb-7">
        <h3 className="font-serif text-[1.45rem] font-semibold leading-snug text-cocoa">{title}</h3>
        {subtitle && <div className="mb-2 mt-1 text-sm font-semibold text-caramel">{subtitle}</div>}
        {text && <p className="text-[0.97rem]">{text}</p>}
        {tagline && <p className="mt-3 font-serif italic text-caramelDark">{tagline}</p>}
      </div>
    </article>
  );
}
