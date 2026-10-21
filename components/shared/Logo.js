/* Logo icon and name. Shared by the header and footer.
   brand.logoIcon: "sun" (bakery) or "bars" (gym) */
export default function Logo({ brand, footer = false }) {
  const icon =
    brand.logoIcon === "bars" ? (
      <div className="flex h-7 items-end gap-[3px]" aria-hidden="true">
        <i className="logo-bar block h-[40%] w-1 rounded-sm bg-caramel" />
        <i className="logo-bar block h-full w-1 rounded-sm bg-caramel" style={{ animationDelay: "0.2s" }} />
        <i className="logo-bar block h-[60%] w-1 rounded-sm bg-caramel" style={{ animationDelay: "0.4s" }} />
        <i className="logo-bar block h-[85%] w-1 rounded-sm bg-caramel" style={{ animationDelay: "0.1s" }} />
      </div>
    ) : (
      <div
        className="relative h-11 w-11 shrink-0 rounded-full bg-[radial-gradient(circle_at_50%_80%,#f7d48e_0_35%,#e3a863_36%_60%,transparent_61%)] after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:rounded-b-[50px] after:bg-cream after:content-['']"
        aria-hidden="true"
      />
    );

  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <b className={`block font-serif text-[1.3rem] font-semibold leading-tight ${footer ? "text-onDark" : "text-cocoa"}`}>
          {brand.name}
        </b>
        <small className={`block text-[0.72rem] tracking-wide ${footer ? "text-accentOnDark" : "text-caramel"}`}>
          {brand.tagline}
        </small>
      </div>
    </div>
  );
}
