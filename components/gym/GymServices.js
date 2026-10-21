import Card from "../shared/Card";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function GymServices({ items }) {
  return (
    <section id="services" className="bg-sand py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading centered eyebrow="What we offer" title={<>Our <em>services</em></>} />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
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
