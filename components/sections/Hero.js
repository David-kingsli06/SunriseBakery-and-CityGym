import Button from "../ui/Button";

export default function Hero({ brand }) {
  return (
    <section id="home" className="overflow-hidden bg-cream pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="container-x grid items-center gap-9 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="eyebrow rise">Baked fresh, served with love</div>
          <h1 className="rise font-serif text-5xl font-semibold leading-tight text-cocoa md:text-6xl">
            {brand.name}
            <em className="mt-2 block text-[0.5em] font-medium italic text-caramel">
              A little warmth in every bite
            </em>
          </h1>
          <p className="rise mb-8 mt-6 max-w-md text-[1.05rem]">
            From the first sip of coffee to the last bite of cake, let us make your day a little sweeter. Come in for your favourites, stay for the warmth, and leave with a smile.
          </p>
          <div className="rise flex flex-wrap gap-3.5">
            <Button href="#menu">Explore Menu</Button>
            <Button href="#favourites" variant="outline">Our Favourites</Button>
          </div>
        </div>

        <div className="rise relative h-[320px] overflow-hidden rounded-[200px_200px_22px_22px] shadow-soft md:h-[470px]">
          <img
            src="/images/hero.jpg"
            alt="Fresh pastries and cakes in the bakery display"
            className="h-full w-full object-cover transition duration-[1400ms] hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
