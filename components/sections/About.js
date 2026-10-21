import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const values = [
  { icon: "🥐", title: "Made with care", text: "Thought and attention in everything we prepare." },
  { icon: "🍰", title: "Comfort in every bite", text: "Familiar flavours for everyday moments." },
  { icon: "☕", title: "A warm welcome", text: "Every customer should feel at home." },
  { icon: "🎂", title: "Something for every mood", text: "From morning fuel to celebration cakes." },
];

export default function About({ hours }) {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="container-x grid items-center gap-14 md:grid-cols-2">
        <Reveal className="relative pb-10">
          <div className="h-[420px] overflow-hidden rounded-[220px_220px_22px_22px] shadow-soft md:h-[500px]">
            <img src="/images/about.jpg" alt="Inside the Sunrise Bakery shop" className="h-full w-full object-cover transition duration-1000 hover:scale-105" />
          </div>
          <div className="absolute bottom-0 right-0 w-[min(260px,80%)] rounded-card border border-line bg-card p-6 shadow-lift">
            <h4 className="mb-3 font-serif text-lg font-semibold text-cocoa">Opening hours</h4>
            {hours.map((h) => (
              <div key={h.days} className="mb-2.5 text-[0.9rem]">
                {h.days}
                <b className="block font-bold text-cocoa">{h.time}</b>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading
            eyebrow="About Us"
            title={<>A little story behind <em>every bite</em></>}
          />
          <p className="mb-4">Sunrise Bakery is built around a simple idea: good food brings people together. Whether it is a fresh loaf for the breakfast table, a cake for a special celebration or coffee shared with a friend, the little things often become the best memories.</p>
          <p>We believe baking is about more than following a recipe. It is about the care in every batch, the joy of sharing something delicious and the smiles that follow the first bite.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tint text-lg">{v.icon}</div>
                <div>
                  <b className="block font-bold text-cocoa">{v.title}</b>
                  <span className="text-[0.93rem]">{v.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
