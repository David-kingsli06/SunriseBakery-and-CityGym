"use client";

import { useRef, useState } from "react";
import Reveal from "../ui/Reveal";

/* Contact details and enquiry form. Shared by the bakery and the gym.
   brand:    { address, phone, email }
   copy:     { eyebrow, title (JSX), intro, buttonLabel, successText }
   subjects: array of topics for the Subject dropdown */
export default function Contact({ brand, copy, subjects }) {
  const emptyForm = { name: "", email: "", subject: "", message: "" };
  const rules = {
    name: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    subject: (v) => v !== "",
    message: (v) => v.trim().length >= 10,
  };
  const messages = {
    name: "Please enter your name (at least 2 characters).",
    email: "Please enter a valid email address.",
    subject: "Please choose a subject.",
    message: "Please write at least 10 characters.",
  };

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setSent(false);
    if (errors[name]) {
      setErrors({ ...errors, [name]: !rules[name](value) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: !rules[name](value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(rules).forEach((name) => {
      newErrors[name] = !rules[name](form[name]);
    });
    setErrors(newErrors);

    const firstInvalid = Object.keys(rules).find((name) => newErrors[name]);
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    setSent(true);
    setForm(emptyForm);
    setErrors({});
  };

  const fieldClass = (name) =>
    `w-full rounded-[14px] border bg-cream px-4 py-3 text-[16px] text-cocoa transition focus:border-caramel focus:outline-none focus:ring-4 focus:ring-caramel/15 ${
      errors[name] ? "border-[#c4553d]" : "border-line"
    }`;

  const iconBox = "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-card text-lg";

  return (
    <section id="contact" className="bg-sand py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 className="mb-4 font-serif text-4xl font-semibold leading-tight text-cocoa md:text-5xl [&_em]:font-serif [&_em]:italic [&_em]:text-caramel">
            {copy.title}
          </h2>
          <p>{copy.intro}</p>

          <div className="mt-7 grid gap-5">
            <div className="flex items-start gap-4">
              <div className={iconBox}>📍</div>
              <div><b className="block font-bold text-cocoa">Visit us</b>{brand.address}</div>
            </div>
            <div className="flex items-start gap-4">
              <div className={iconBox}>📞</div>
              <div>
                <b className="block font-bold text-cocoa">Call us</b>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-caramelDark">{brand.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className={iconBox}>✉️</div>
              <div>
                <b className="block font-bold text-cocoa">Email us</b>
                <a href={`mailto:${brand.email}`} className="hover:text-caramelDark">{brand.email}</a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-card border border-line bg-card p-7 shadow-soft md:p-8">
            <h3 className="mb-1 font-serif text-2xl font-semibold text-cocoa">Send us a message</h3>
            <p className="mb-6 text-[0.92rem]">Leave us a note and we will get back to you soon.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-cocoa">Full name *</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your full name" autoComplete="name" className={fieldClass("name")} />
                {errors.name && <p className="mt-1 text-sm text-[#c4553d]">{messages.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-cocoa">Email address *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@example.com" autoComplete="email" className={fieldClass("email")} />
                {errors.email && <p className="mt-1 text-sm text-[#c4553d]">{messages.email}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-bold text-cocoa">Subject *</label>
              <select id="subject" name="subject" value={form.subject} onChange={handleChange} onBlur={handleBlur} className={fieldClass("subject")}>
                <option value="">Select an option</option>
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              {errors.subject && <p className="mt-1 text-sm text-[#c4553d]">{messages.subject}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-cocoa">Your message *</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur} placeholder="Type your message here..." className={`${fieldClass("message")} min-h-[120px] resize-y`} />
              {errors.message && <p className="mt-1 text-sm text-[#c4553d]">{messages.message}</p>}
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">{copy.buttonLabel}</button>

            {sent && (
              <p role="status" className="mt-4 rounded-[14px] bg-[#eef5e8] p-4 text-[0.93rem] text-[#4a6b3a]">
                {copy.successText}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
