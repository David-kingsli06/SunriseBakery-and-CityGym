/* =============================================================
   CITY GYM - CONTENT
   All the gym's text, links, prices and reviews live here.
   ============================================================= */

export const gym = {
  name: "City Gym",
  tagline: "Build Your Best Self",
  logoIcon: "bars",
  address: "123 Fitness Street, Delhi, India",
  phone: "+91 98765 43210",
  email: "info@citygym.com",
  hours: [
    { days: "Mon - Fri", time: "5:00 AM - 10:00 PM" },
    { days: "Sat - Sun", time: "6:00 AM - 8:00 PM" },
  ],
  footerText: "Train harder. Get stronger. Live better. We are here to help you reach your goals.",
  copyright: `© ${new Date().getFullYear()} City Gym. All rights reserved.`,
};

export const gymNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Membership" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const gymServices = [
  {
    title: "Personal Training",
    subtitle: "Certified trainers",
    image: "/images/gym/service-training.jpg",
    text: "Get individual guidance from certified trainers.",
    tagline: "Built around your goals.",
  },
  {
    title: "Strength Exercises",
    subtitle: "Power and muscle",
    image: "/images/gym/service-strength.jpg",
    text: "Build muscle and increase your power.",
    tagline: "Lift heavier every week.",
  },
  {
    title: "Cardio Training",
    subtitle: "Stamina and heart health",
    image: "/images/gym/service-cardio.jpg",
    text: "Improve your stamina and heart health.",
    tagline: "Go further, every day.",
  },
];

export const gymPlans = [
  { name: "Basic", price: "$25", features: ["Gym access", "Basic equipment", "Locker room"], popular: false },
  { name: "Standard", price: "$49", features: ["All basic benefits", "Group classes", "Personal training (1 session)"], popular: true },
  { name: "Premium", price: "$99", features: ["All standard benefits", "Unlimited classes", "Personal training (4 sessions)"], popular: false },
];

export const gymReviews = [
  {
    quote: "City Gym has completely changed my fitness journey. The trainers are amazing, and the environment is motivating. I've never felt stronger!",
    name: "Sarah Johnson",
    since: "Member since 2022",
  },
  {
    quote: "The equipment is top class and the coaches push you in the right way. I've added 15 kg to my squat in six months.",
    name: "Rahul Mehta",
    since: "Member since 2023",
  },
  {
    quote: "Early morning sessions, great music and a crowd that keeps you honest. Best decision I made this year.",
    name: "Daniel Okafor",
    since: "Member since 2024",
  },
];

export const gymContact = {
  copy: {
    eyebrow: "Get in Touch",
    title: <>Ready to <em>start?</em></>,
    intro: "Ask about memberships, personal training or a free trial session. We reply within one working day.",
    buttonLabel: "Send message",
    successText: "Thanks! Your message has been received. We will be in touch soon.",
  },
  subjects: ["Membership plans", "Personal training", "Free trial session", "Other"],
};

