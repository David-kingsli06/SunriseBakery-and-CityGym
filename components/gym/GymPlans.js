import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function GymPlans({ plans }) {
  return (
    <section id="plans" className="bg-sand py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading centered eyebrow="Pricing" title={<>Membership <em>plans</em></>} />
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`relative h-full border bg-card p-8 text-center transition duration-300 hover:-translate-y-2 ${
                  plan.popular ? "scale-[1.03] border-2 border-caramel shadow-lift" : "border-line"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-caramel px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Most popular
                  </div>
                )}
                <div className="font-serif text-xl font-bold uppercase tracking-[0.1em] text-cocoa">{plan.name}</div>
                <div className="mb-6 mt-3 font-serif text-5xl font-bold text-cocoa">
                  {plan.price}
                  <small className="font-sans text-base font-normal text-bodytext"> / month</small>
                </div>
                <ul className="mb-8 grid gap-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-[0.95rem] text-cocoa">
                      <span className="font-bold text-caramel">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`${plan.popular ? "btn-primary" : "btn-outline"} w-full`}>
                  Choose plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
