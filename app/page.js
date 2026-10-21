import Header from "@/components/shared/Header";

export const metadata = {
  title: "Sunrise Bakery - Fresh mornings. Sweeter moments.",
  description: "Freshly baked cakes, breads, pastries and coffee at Sunrise Bakery.",
};
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/Hero";
import Favourites from "@/components/sections/Favourites";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import SpecialOrders from "@/components/sections/SpecialOrders";
import Contact from "@/components/sections/Contact";
import Divider from "@/components/ui/Divider";
import { bakery, bakeryContact, navLinks, favourites, menuFilters, menuItems } from "@/data/bakery";

/* The one-page site. Sections run top to bottom. */
export default function Home() {
  return (
    <div className="theme-bakery min-h-screen bg-cream">
      <Header
        brand={bakery}
        links={navLinks}
        cta={{ label: "Explore Menu", href: "#menu" }}
      />
      <main>
        <Hero brand={bakery} />
        <Favourites items={favourites} />
        <Divider />
        <About hours={bakery.hours} />
        <Menu filters={menuFilters} items={menuItems} />
        <Divider />
        <SpecialOrders />
        <Contact brand={bakery} copy={bakeryContact.copy} subjects={bakeryContact.subjects} />
      </main>
      <Footer
        brand={bakery}
        links={navLinks}
        details={bakery}
      />
    </div>
  );
}
