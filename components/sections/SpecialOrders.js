import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function SpecialOrders() {
  return (
    <section id="special" className="bg-cream py-20 md:py-28">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="eyebrow">Special Orders</div>
          <h2 className="mb-4 font-serif text-4xl font-semibold leading-tight text-cocoa md:text-5xl">
            Something to celebrate? <em className="font-serif italic text-caramel">Let&apos;s make it sweeter.</em>
          </h2>
          <p className="mb-7">Birthdays, anniversaries, family gatherings or just-because surprises deserve something delicious. Tell us what you have in mind and we will design a cake to match.</p>
          <Button href="#contact">Ask About Special Orders</Button>
        </Reveal>

        <Reveal delay={150}>
          <div className="h-[300px] overflow-hidden rounded-card shadow-soft md:h-[380px]">
            <img src="/images/special.jpg" alt="Decorated celebration cake with berries" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
