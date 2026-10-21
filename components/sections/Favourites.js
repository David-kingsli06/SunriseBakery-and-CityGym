import Card from "../shared/Card";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Favourites({ items }) {
  return (
    <section id="favourites" className="bg-sand py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            centered
            eyebrow="Our Favourites"
            title={<>A few of our <em>favourite things</em></>}
            lead="A little sweetness, a little comfort and a whole lot of love."
          />
        </Reveal>
        <div className="grid gap-7 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <Card
                image={item.image}
                alt={item.title}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                tagline={item.tagline}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
