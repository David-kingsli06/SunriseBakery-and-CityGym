import Logo from "./Logo";

/* Bottom of the page. Shared component: pass in the details and links.
   brand: { name, tagline, logoIcon }   links: [{ href, label }]
   details: { footerText, address, phone, hours: [{ days, time }], copyright } */
export default function Footer({ brand, links, details }) {
  return (
    <footer className="bg-footer pb-7 pt-16 text-onDarkMuted">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo brand={brand} footer />
            <p className="mt-5 text-[0.93rem]">{details.footerText}</p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-onDark">Find us</h4>
            <p className="text-[0.93rem]">{details.address}</p>
            <p className="mt-2.5 text-[0.93rem]">
              <a href={`tel:${details.phone.replace(/\s/g, "")}`} className="hover:text-accentOnDark">{details.phone}</a>
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-onDark">Opening hours</h4>
            {details.hours.map((h) => (
              <div key={h.days} className="mb-2.5 text-[0.93rem]">
                {h.days}
                <b className="block font-semibold text-onDark">{h.time}</b>
              </div>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-onDark">Quick links</h4>
            <ul className="grid gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[0.93rem] hover:text-accentOnDark">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-[0.86rem]">
          {details.copyright}
        </div>
      </div>
    </footer>
  );
}
