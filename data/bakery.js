/* =============================================================
   SUNRISE BAKERY - CONTENT
   All the text, links and menu items live here. Change them in
   this one file; the components display whatever is listed.
   ============================================================= */

export const bakery = {
  name: "Sunrise Bakery",
  logoIcon: "sun",
  tagline: "Fresh mornings. Sweeter moments.",
  address: "123 Baker Street, Greenwood, Bengaluru - 560001",
  phone: "+91 98765 43210",
  email: "hello@sunrisebakery.com",
  hours: [
    { days: "Monday - Saturday", time: "7:00 AM - 9:00 PM" },
    { days: "Sunday", time: "8:00 AM - 6:00 PM" },
  ],
  footerText: "Baked with care, shared with love. We are here to make your everyday moments a little more delicious.",
  copyright: "© 2026 Sunrise Bakery. Made with love and a little extra sweetness.",
};

// Header and footer links. "href" must match a section id.
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#favourites", label: "Favourites" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#special", label: "Special Orders" },
  { href: "#contact", label: "Contact" },
];

export const favourites = [
  {
    title: "A Slice of Happiness",
    subtitle: "Freshly baked cake",
    image: "/images/fav-cake.jpg",
    text: "Every celebration deserves something sweet. Our soft cakes bring together rich flavours and melt-in-your-mouth goodness.",
    tagline: "Made to sweeten your day.",
  },
  {
    title: "Fresh from the Oven",
    subtitle: "Artisan bread",
    image: "/images/fav-bread.jpg",
    text: "Nothing beats the comfort of freshly baked bread. Enjoy a golden crust, a soft centre and that familiar homemade taste.",
    tagline: "Simple goodness, baked fresh.",
  },
  {
    title: "Your Perfect Cup",
    subtitle: "Freshly brewed coffee",
    image: "/images/fav-coffee.jpg",
    text: "Take a moment for yourself with a comforting cup of coffee. Rich aroma, smooth flavour and the perfect warmth.",
    tagline: "Sip slowly. Smile often.",
  },
];

// Filter buttons above the menu. "id" must match the "cat" of menu items.
export const menuFilters = [
  { id: "all", label: "All" },
  { id: "cakes", label: "Cakes" },
  { id: "breads", label: "Breads" },
  { id: "pastries", label: "Pastries" },
  { id: "drinks", label: "Drinks" },
];

export const menuItems = [
  { name: "Chocolate Truffle Cake", cat: "cakes", image: "/images/chocolate-truffle-cake.jpg", desc: "Rich chocolate layers covered in smooth, velvety ganache." },
  { name: "Classic Vanilla Cake", cat: "cakes", image: "/images/classic-vanilla-cake.jpg", desc: "Light, fluffy and simply beautiful, with delicate vanilla flavour." },
  { name: "Red Velvet Cake", cat: "cakes", image: "/images/red-velvet-cake.jpg", desc: "Soft red sponge paired with creamy frosting and a lovely balance." },
  { name: "Artisan Sourdough", cat: "breads", image: "/images/artisan-sourdough.jpg", desc: "A crisp golden crust, a tender centre and a flavour worth savouring." },
  { name: "Soft Milk Bread", cat: "breads", image: "/images/soft-milk-bread.jpg", desc: "Pillowy-soft with a gentle sweetness, perfect for breakfast." },
  { name: "Butter Croissant", cat: "pastries", image: "/images/butter-croissant.jpg", desc: "Golden, flaky layers with a buttery aroma that makes mornings special." },
  { name: "Cinnamon Swirls", cat: "pastries", image: "/images/cinnamon-swirls.jpg", desc: "Soft, sweet spirals with warming cinnamon and a delicate icing drizzle." },
  { name: "Blueberry Muffins", cat: "pastries", image: "/images/blueberry-muffins.jpg", desc: "Tender muffins bursting with fruity flavour for a relaxed treat." },
  { name: "Chocolate Chip Cookies", cat: "pastries", image: "/images/chocolate-chip-cookies.jpg", desc: "Crisp at the edges, soft in the middle and full of chocolate." },
  { name: "Creamy Cappuccino", cat: "drinks", image: "/images/creamy-cappuccino.jpg", desc: "Rich espresso topped with silky steamed milk and foam." },
  { name: "Iced Latte", cat: "drinks", image: "/images/iced-latte.jpg", desc: "Smooth espresso, chilled milk and ice for a refreshing break." },
  { name: "Classic Hot Chocolate", cat: "drinks", image: "/images/classic-hot-chocolate.jpg", desc: "A warm, chocolatey hug in a cup for slow mornings." },
];

export const bakeryContact = {
  copy: {
    eyebrow: "Get in Touch",
    title: <>We&apos;d love to <em>hear from you</em></>,
    intro: "Whether you have a question about our menu, need help with a special order or simply want to know more, we are here to help.",
    buttonLabel: "Send enquiry",
    successText: "Thank you! Your enquiry has been noted. We will get back to you soon.",
  },
  subjects: ["Cake or special order", "Menu question", "Feedback", "Other"],
};
