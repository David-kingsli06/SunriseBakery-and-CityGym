import Reveal from "../ui/Reveal";

export default function GymAbout({ brand }) {
  const points = ["Modern equipment", "Certified trainers", "Flexible membership plans"];

  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="container-x grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <div className="eyebrow">About us</div>
          <h2 className="mb-5 font-serif text-4xl font-bold leading-tight text-cocoa md:text-5xl">
            We provide training and best <em className="not-italic text-caramel">fitness motivation</em>
          </h2>
          <p>
            {brand.name} is more than just a gym. It is a community that helps you achieve your fitness goals with the right training, support and motivation.
          </p>
          <ul className="mt-7 grid gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-semibold text-cocoa">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-caramel text-sm font-bold text-white [clip-path:polygon(4px_0,100%_0,calc(100%_-_4px)_100%,0_100%)]">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-4/5 border-l-4 border-t-4 border-caramel" aria-hidden="true" />
            <div className="relative h-[360px] overflow-hidden shadow-lift md:h-[440px]">
              <img src="/images/gym/about.jpg" alt="Trainer coaching a squat in the gym" className="h-full w-full object-cover transition duration-1000 hover:scale-105" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
