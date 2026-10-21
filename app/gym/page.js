import Header from "@/components/shared/Header";

export const metadata = {
  title: "City Gym - Build Your Best Self",
  description: "City Gym: training, memberships and personal coaching.",
};
import Footer from "@/components/shared/Footer";
import GymHero from "@/components/gym/GymHero";
import GymServices from "@/components/gym/GymServices";
import GymAbout from "@/components/gym/GymAbout";
import GymPlans from "@/components/gym/GymPlans";
import GymReviews from "@/components/gym/GymReviews";
import Contact from "@/components/sections/Contact";
import {
  gym,
  gymNavLinks,
  gymServices,
  gymPlans,
  gymReviews,
  gymContact,
} from "@/data/gym";

/* The City Gym one-page site. Uses the shared header, card, footer and contact form. */
export default function GymPage() {
  return (
    <div className="theme-gym min-h-screen bg-cream">
      <Header
        brand={gym}
        links={gymNavLinks}
        cta={{ label: "Join Now", href: "#plans" }}
      />
      <main>
        <GymHero brand={gym} />
        <GymServices items={gymServices} />
        <GymAbout brand={gym} />
        <GymPlans plans={gymPlans} />
        <GymReviews reviews={gymReviews} />
        <Contact brand={gym} copy={gymContact.copy} subjects={gymContact.subjects} />
      </main>
      <Footer brand={gym} links={gymNavLinks} details={gym} />
    </div>
  );
}
