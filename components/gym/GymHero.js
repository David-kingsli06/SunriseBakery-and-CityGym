import Button from "../ui/Button";

export default function GymHero({ brand }) {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden bg-cream py-20">
      <div className="absolute inset-0">
        <img src="/images/gym/hero.jpg" alt="Athlete training with dumbbells" className="h-full w-full object-cover object-[20%_center] md:object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95 md:bg-gradient-to-r md:from-black/95 md:via-black/75 md:to-black/25" />
      </div>

      <div className="container-x relative z-10 max-w-2xl">
        <div className="eyebrow rise">Welcome to {brand.name}</div>
        <h1 className="rise font-serif text-6xl font-bold leading-[1.02] text-white md:text-7xl">
          Build Your
          <span className="block text-caramel">Best Self</span>
        </h1>
        <p className="rise mb-8 mt-5 text-lg text-white">Train harder. Get stronger. Live better.</p>
        <div className="rise">
          <Button href="#plans">Join Now →</Button>
        </div>
      </div>
    </section>
  );
}
